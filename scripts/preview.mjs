import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, extname, sep } from 'node:path'

const root = resolve('out')
const port = Number(process.env.PORT || 4173)
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.ico': 'image/x-icon', '.woff2': 'font/woff2' }
try { await stat(resolve(root, 'index.html')) } catch { console.error('Run npm run build before npm start.'); process.exit(1) }
createServer(async (req, res) => {
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return }
    try {
        const url = new URL(req.url, 'http://localhost')
        let file = resolve(root, '.' + decodeURIComponent(url.pathname))
        if (file !== root && !file.startsWith(root + sep)) { res.writeHead(403); res.end(); return }
        if ((await stat(file)).isDirectory()) {
            if (!url.pathname.endsWith('/')) { res.writeHead(308, { Location: url.pathname + '/' + url.search }); res.end(); return }
            file = resolve(file, 'index.html')
        }
        const body = await readFile(file)
        res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' })
        res.end(req.method === 'HEAD' ? undefined : body)
    } catch {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(req.method === 'HEAD' ? undefined : await readFile(resolve(root, '404.html')))
    }
}).listen(port, '127.0.0.1', () => console.log(`Static preview: http://127.0.0.1:${port}`))
