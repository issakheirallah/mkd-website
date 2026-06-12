// Render each HTML promo template to a pixel-perfect PNG.
// Run: node promo/google-business/render.mjs
// Output: PNG files saved next to each HTML source.
import puppeteer from 'puppeteer'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'
import { readdir } from 'node:fs/promises'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Each template is rendered at its target Google Business dimensions.
const TEMPLATES = [
  { file: '01-logo-square.html',     width: 720,  height: 720,  name: 'logo-square' },
  { file: '02-cover-photo.html',     width: 1080, height: 608,  name: 'cover-photo' },
  { file: '03-square-services.html', width: 1080, height: 1080, name: 'square-services' },
  { file: '04-square-areas.html',    width: 1080, height: 1080, name: 'square-areas' },
  { file: '05-square-quote-cta.html',width: 1080, height: 1080, name: 'square-quote-cta' },
  { file: '06-square-tagline.html',  width: 1080, height: 1080, name: 'square-tagline' },
]

const browser = await puppeteer.launch({ headless: 'shell' })

try {
  for (const tpl of TEMPLATES) {
    const page = await browser.newPage()
    await page.setViewport({ width: tpl.width, height: tpl.height, deviceScaleFactor: 2 })
    const url = pathToFileURL(join(__dirname, tpl.file)).toString()
    await page.goto(url, { waitUntil: 'networkidle0' })
    // Allow web fonts to settle
    await page.evaluate(() => document.fonts.ready)
    const outPath = join(__dirname, `${tpl.file.replace('.html', '')}.png`)
    await page.screenshot({ path: outPath, type: 'png', omitBackground: false })
    console.log(`✓ ${tpl.name.padEnd(20)} ${tpl.width}×${tpl.height}  →  ${outPath.split('/').pop()}`)
    await page.close()
  }
} finally {
  await browser.close()
}

const files = await readdir(__dirname)
const pngs = files.filter((f) => f.endsWith('.png')).sort()
console.log(`\nGenerated ${pngs.length} PNG${pngs.length === 1 ? '' : 's'} in promo/google-business/`)
