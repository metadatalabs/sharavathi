import { readFile, readdir, stat } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import assert from 'node:assert/strict'

const root = resolve('out')
const origin = 'https://sharavathi.co'
async function walk(dir) {
    const files = await readdir(dir, { withFileTypes:true })
    return (await Promise.all(files.map(f => f.isDirectory() ? walk(join(dir,f.name)) : join(dir,f.name)))).flat()
}
const pages = new Map()
for (const file of await walk(root)) {
    if (!file.endsWith('/index.html') || file.endsWith('/404/index.html') || file.endsWith('/_not-found/index.html')) continue
    pages.set(file.slice(root.length).replace(/index.html$/, ''), await readFile(file,'utf8'))
}
const sitemap = await readFile(join(root,'sitemap.xml'),'utf8')
for (const [path, html] of pages) {
    assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${path}: one H1`)
    assert.ok(html.includes(`rel="canonical" href="${origin}${path}"`),`${path}: canonical`)
    assert.ok(sitemap.includes(`${origin}${path}</loc>`),`${path}: sitemap`)
    assert.ok(!html.includes('—'),`${path}: no em dashes`)
    assert.match(html,/<meta name="description" content="[^"]+"/,`${path}: description`)
    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1])
    for (const match of html.matchAll(/<a\b[^>]*href="([^"]*)"/g)) {
        const href = match[1]
        if (!href.startsWith('/') && !href.startsWith('#')) continue
        const url = new URL(href,origin+path)
        assert.ok(pages.has(url.pathname),`${path}: missing link ${href}`)
        if(url.hash) assert.ok(pages.get(url.pathname).includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),`${path}: missing anchor ${href}`)
    }
    for (const match of html.matchAll(/<img\b[^>]*>/g)) {
        assert.match(match[0],/\balt="[^"]*"/,`${path}: image alt`)
        const src = match[0].match(/\bsrc="([^"]+)"/)?.[1]
        if(src?.startsWith('/')) await stat(join(root,src))
    }
}
for(const town of ['shivamogga','sagara','hosanagar','thirthahalli']) assert.ok(pages.has(`/locations/rcc-pipes-${town}/`))
assert.equal((await readFile(join(root,'CNAME'),'utf8')).trim(),'sharavathi.co')
assert.ok((await readFile(join(root,'robots.txt'),'utf8')).includes(`${origin}/sitemap.xml`))
console.log(`Passed: ${pages.size} pages, internal links, anchors, metadata, structured data, images, sitemap, robots and domain.`)
