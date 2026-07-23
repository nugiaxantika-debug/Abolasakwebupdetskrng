const fs = require('fs');
let content = fs.readFileSync('src/services/whatsapp.ts', 'utf8');

content = content.replace(
  "const sticker = new Sticker(bgBuffer, { pack: 'ATTP', author: 'Bot', type: 'full' });",
  "const pngBuffer = await sharp(bgBuffer).png().toBuffer();\n                 const sticker = new Sticker(pngBuffer, { pack: 'ATTP', author: 'Bot', type: 'full' });"
);

content = content.replace(
  "const searchQuery = targetQuery.replace(\"tiktok\", \"\");",
  "let searchQuery = targetQuery.replace(\"tiktok\", \"\");\n      if (targetQuery === \"videosexybikini\") searchQuery = \"bikini haul\";"
);

fs.writeFileSync('src/services/whatsapp.ts', content);
console.log("Patched.");
