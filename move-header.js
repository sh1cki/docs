const { writeFileSync, readFileSync } = require('fs');

['ru', 'en'].forEach(v => {
  const f = readFileSync(`./${v}.md`);

  writeFileSync(`./${v}/index.md`, f.toString());
}); 