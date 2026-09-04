import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const background = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#070918"/><stop offset=".55" stop-color="#0d1028"/><stop offset="1" stop-color="#101534"/>
      </linearGradient>
      <radialGradient id="a"><stop stop-color="#7257ff" stop-opacity=".34"/><stop offset="1" stop-color="#7257ff" stop-opacity="0"/></radialGradient>
      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#64dfff" stroke-opacity=".065"/></pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <circle cx="980" cy="60" r="430" fill="url(#a)"/>
    <rect width="1200" height="630" fill="url(#grid)"/>
    <path d="M54 48h70M54 48v70M1146 512v70h-70" fill="none" stroke="#53d7ff" stroke-opacity=".55" stroke-width="2"/>
    <text x="72" y="92" fill="#53d7ff" font-family="monospace" font-size="15" letter-spacing="3">RESEARCH PROFILE // KAIST</text>
    <text x="70" y="235" fill="#f5f6ff" font-family="Arial, sans-serif" font-size="88" font-weight="700" letter-spacing="-4">Tianhao</text>
    <text x="70" y="322" fill="#a997ff" font-family="Arial, sans-serif" font-size="88" font-weight="700" letter-spacing="-4">Chen.</text>
    <rect x="72" y="361" width="5" height="66" rx="2" fill="#53d7ff"/>
    <text x="96" y="388" fill="#e8ebff" font-family="Arial, sans-serif" font-size="23" font-weight="600">M.S. Student · School of Computing</text>
    <text x="96" y="421" fill="#939bb8" font-family="Arial, sans-serif" font-size="19">Multi-Agent Systems · Efficient Multimodal Inference</text>
    <g transform="translate(72 484)">
      <rect width="175" height="43" rx="21" fill="#7c5cff" fill-opacity=".13" stroke="#967fff" stroke-opacity=".42"/>
      <text x="22" y="27" fill="#c6bbff" font-family="monospace" font-size="12" letter-spacing="1">ACADEMIC // AI</text>
      <rect x="190" width="172" height="43" rx="21" fill="#53d7ff" fill-opacity=".08" stroke="#53d7ff" stroke-opacity=".34"/>
      <text x="212" y="27" fill="#9ceaff" font-family="monospace" font-size="12" letter-spacing="1">RESEARCH LOG</text>
    </g>
    <text x="72" y="584" fill="#5f6887" font-family="monospace" font-size="13" letter-spacing="2">RYU1ION.GITHUB.IO/</text>
  </svg>
`);

const avatarMask = Buffer.from('<svg width="310" height="390"><rect width="310" height="390" rx="30" fill="white"/></svg>');
const avatar = await sharp(join(root, 'src/assets/avatar.jpg'))
  .rotate()
  .resize(310, 390, { fit: 'cover', position: 'centre' })
  .modulate({ saturation: 0.9, brightness: 0.84 })
  .composite([{ input: avatarMask, blend: 'dest-in' }])
  .png()
  .toBuffer();

const companion = await sharp(join(root, 'src/assets/ai-companion.png'))
  .resize({ height: 280 })
  .png()
  .toBuffer();

const overlay = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect x="760" y="84" width="310" height="390" rx="30" fill="none" stroke="#76deff" stroke-opacity=".44" stroke-width="2"/>
    <rect x="750" y="74" width="330" height="410" rx="36" fill="none" stroke="#8c70ff" stroke-opacity=".18"/>
    <path d="M750 136V74h62M1018 484h62v-62" fill="none" stroke="#ff6ec7" stroke-opacity=".55" stroke-width="2"/>
    <rect x="780" y="452" width="176" height="35" rx="17" fill="#080a18" fill-opacity=".88" stroke="#53d7ff" stroke-opacity=".28"/>
    <circle cx="798" cy="469" r="4" fill="#53d7ff"/>
    <text x="812" y="474" fill="#a8eaff" font-family="monospace" font-size="11" letter-spacing="1.3">PROFILE // LIVE</text>
  </svg>
`);

await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#060817' } })
  .composite([
    { input: background, top: 0, left: 0 },
    { input: avatar, top: 84, left: 760 },
    { input: companion, top: 323, left: 950 },
    { input: overlay, top: 0, left: 0 },
  ])
  .png({ compressionLevel: 9, palette: true, quality: 90 })
  .toFile(join(root, 'public/og-card.png'));

console.log('Generated public/og-card.png (1200×630).');
