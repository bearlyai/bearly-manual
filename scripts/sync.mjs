// Copies the Bearly Manual's Markdown from bearly.ai into this repository: the index (manual.md), every page
// (manual/**.md), and the whole Manual in one file (manual-full.md). bearly.ai is the source of truth.
import { mkdir, readdir, rm, writeFile } from "node:fs/promises"
import path from "node:path"

const ORIGIN = "https://bearly.ai"
const DOCS = `${ORIGIN}/docs/`
const INDEX_URL = `${DOCS}manual.md`
const FULL_URL = `${DOCS}manual-full.txt`
const PAGE_LINK = /\]\((https:\/\/bearly\.ai\/docs\/manual(?:\/[a-z0-9-]+)+\.md)\)/g
// A real index lists dozens of pages; fewer means a broken response, so keep the current copy.
const MIN_PAGES = 10

async function fetchText(url) {
    const response = await fetch(url, { headers: { "user-agent": "bearly-manual-mirror" }, signal: AbortSignal.timeout(30_000) })
    if (response.status === 404) return undefined
    if (!response.ok) throw new Error(`${url} answered ${response.status}`)
    return response.text()
}

async function markdownFiles(directory) {
    const entries = await readdir(directory, { withFileTypes: true }).catch(() => [])
    const files = await Promise.all(
        entries.map((entry) => {
            const entryPath = path.join(directory, entry.name)
            return entry.isDirectory() ? markdownFiles(entryPath) : entry.name.endsWith(".md") ? [entryPath] : []
        }),
    )
    return files.flat()
}

const index = await fetchText(INDEX_URL)
if (index === undefined) {
    console.log(`${INDEX_URL} isn't published yet; nothing to sync.`)
    process.exit(0)
}

const pageUrls = [...new Set([...index.matchAll(PAGE_LINK)].map((match) => match[1]))]
if (pageUrls.length < MIN_PAGES) throw new Error(`${INDEX_URL} lists only ${pageUrls.length} pages; keeping the current copy.`)

const written = new Set()
await writeFile("manual.md", index)
for (const url of pageUrls) {
    const page = await fetchText(url)
    if (page === undefined) throw new Error(`${url} is listed in the index but answered 404.`)
    const file = url.slice(DOCS.length)
    await mkdir(path.dirname(file), { recursive: true })
    await writeFile(file, page)
    written.add(path.normalize(file))
}

const full = await fetchText(FULL_URL)
if (full === undefined) throw new Error(`${FULL_URL} answered 404.`)
await writeFile("manual-full.md", full)

for (const file of await markdownFiles("manual")) {
    if (!written.has(path.normalize(file))) await rm(file)
}
console.log(`Synced ${pageUrls.length} Manual pages, the index, and the full Manual.`)
