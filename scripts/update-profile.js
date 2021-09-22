const {
  readFileSync,
  writeFileSync
} = require('fs');
const axios = require('axios');

async function main() {
  try {
    const url = 'https://raw.githubusercontent.com/actions-cool/cool/main/assets/actions.js';
    const path = './profile/README.md';
    const point = '## Cool List';
    const colors = [
      'bright',
      'green',
      'yellowgreen',
      'yellow',
      'orange',
      'red',
      'blue',
      'blueviolet',
      '%023ff69b4'
    ];

    const {
      data
    } = await axios.get(url);
    const json = JSON.parse(data.substring(12, data.length - 1));
    console.log(json)
    const oldReadme = readFileSync(path, 'utf-8');
    const index = oldReadme.indexOf(point);
    const before = oldReadme.substring(0, index);

    let table = ``;

    json.actions.forEach((a, i) => {
      const color = i % (colors.length);
      table += `
| [${a.name}](${a.url}) | ${a.desc} | [![](https://img.shields.io/github/stars/actions-cool/${a.name}?style=flat-square&color=${color})](https://github.com/actions-cool/${a.name}/stargazers) |`
    })

    const newReadme = before + point + `
| --- | --- | --- |` + table;

    writeFileSync(path, newReadme);
    console.log('Done!')
  } catch(e) {
    console.log(e.message);
  }
}

main();