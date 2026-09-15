/**
 * Generates a one-page placeholder résumé (public/resume.pdf) so the
 * "Download Résumé" button works out of the box. Replace with the real CV.
 * Usage: node scripts/generate-resume.mjs
 */
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const lines = [
  ['YOHANNES', 24, 720],
  ['Full-Stack Web Developer', 14, 694],
  ['React | Node.js | MongoDB', 11, 672],
  ['', 11, 650],
  ['I build modern web applications that solve real business problems.', 11, 630],
  ['Full-stack developer focused on scalable, user-friendly applications', 11, 614],
  ['using modern frontend, backend and database technologies.', 11, 598],
  ['', 11, 576],
  ['SELECTED PROJECTS', 13, 550],
  ['- 3D E-Commerce Platform', 11, 528],
  ['- Gym Management Platform', 11, 510],
  ['- SkillBridge Ethiopia', 11, 492],
  ['- Ethiopian E-Commerce Platform', 11, 474],
  ['', 11, 452],
  ['SKILLS', 13, 426],
  ['Frontend: HTML, CSS, JavaScript, React, Vite, Tailwind CSS', 11, 404],
  ['Backend: Node.js, Express.js, REST APIs, Auth, JWT', 11, 386],
  ['Database: MongoDB, Mongoose, Database Design', 11, 368],
  ['Tools: Git, GitHub, VS Code, Postman, npm', 11, 350],
  ['', 11, 328],
  ['CONTACT', 13, 302],
  ['Email: yohannesjj33@gmail.com', 11, 280],
  ['GitHub: https://github.com/yohannes574', 11, 262],
  ['LinkedIn: https://www.linkedin.com/in/yohannes-alem-8183a2388/', 11, 244],
]

let content = ''
for (const [text, size, y] of lines) {
  if (!text) continue
  const escaped = text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
  content += `BT /F1 ${size} Tf 72 ${y} Td (${escaped}) Tj ET\n`
}
// accent rule under the name
content += '0.388 0.4 0.945 RG 2 w 72 700 m 250 700 l S\n'

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
  `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}endstream`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
]

let pdf = '%PDF-1.4\n'
const offsets = []
objects.forEach((body, i) => {
  offsets.push(Buffer.byteLength(pdf))
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`
})
const xrefStart = Buffer.byteLength(pdf)
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
for (const off of offsets) pdf += `${String(off).padStart(10, '0')} 00000 n \n`
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'resume.pdf')
writeFileSync(out, pdf, 'binary')
console.log(`Wrote ${out} (${Buffer.byteLength(pdf)} bytes)`)
