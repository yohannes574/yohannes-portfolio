/**
 * Generates public/og-image.png (1200x630) with zero dependencies.
 * Dark background + indigo accent band. Replace with a branded image later.
 * Usage: node scripts/generate-og.mjs
 */
import { writeFileSync } from 'node:fs'
import { deflateSync } from 'node:zlib'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const W = 1200
const H = 630

// CRC32 for PNG chunks
const table = new Int32Array(256).map((_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c
})
function crc32(buf) {
  let c = 0xffffffff
  for (const b of buf) c = table[(c ^ b) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}
function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body))
  return Buffer.concat([len, body, crc])
}

// Render pixels: #0A0A0A base, diagonal indigo glow top-right, bottom accent band
const raw = Buffer.alloc(H * (1 + W * 3))
for (let y = 0; y < H; y++) {
  const rowStart = y * (1 + W * 3)
  raw[rowStart] = 0 // filter: none
  for (let x = 0; x < W; x++) {
    const i = rowStart + 1 + x * 3
    // diagonal glow from top-right corner
    const d = Math.max(0, 1 - Math.hypot(x - W, y) / 900)
    const glow = d * d * 0.25
    let r = 10 + glow * 99
    let g = 10 + glow * 102
    let b = 10 + glow * 241
    // bottom band (y 520-630) slightly indigo
    if (y >= 520) {
      r += 15; g += 16; b += 38
    }
    // thin accent line at y=516
    if (y === 516) { r = 99; g = 102; b = 241 }
    raw[i] = Math.min(255, Math.round(r))
    raw[i + 1] = Math.min(255, Math.round(g))
    raw[i + 2] = Math.min(255, Math.round(b))
  }
}

const ihdr = Buffer.alloc(13)
ihdr.writeUInt32BE(W, 0)
ihdr.writeUInt32BE(H, 4)
ihdr[8] = 8 // bit depth
ihdr[9] = 2 // color type RGB
const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', deflateSync(raw, { level: 9 })),
  chunk('IEND', Buffer.alloc(0)),
])

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'og-image.png')
writeFileSync(out, png)
console.log(`Wrote ${out} (${png.length} bytes)`)
