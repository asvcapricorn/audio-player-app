const fs = require('fs');
const path = require('path');
const NodeID3 = require('node-id3');

const dir = './public/audio';
const files = fs.readdirSync(dir);
const metadataList = [];

files.forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (ext === '.mp3') {
    const filePath = path.join(dir, file);
    try {
      const tags = NodeID3.read(filePath);
      metadataList.push({
        file: file,
        id: metadataList.length + 1,
        title: tags.title || path.parse(file).name,
        artist: tags.artist || 'Unknown',
        duration: tags.duration || '0:00',
        album: tags.album || '-'
      });
    } catch (err) {
      console.error(`Ошибка чтения ${file}:`, err.message);
    }
  }
});

console.log(metadataList);

module.exports = { tracks: metadataList };