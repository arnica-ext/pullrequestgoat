import * as fs from 'fs';


const templateFile = fs.readFileSync('./src/template.txt', 'utf8');

for (let i = 0; i < 1500; i++) {
    fs.writeFileSync(`./src/file${i}.js`, templateFile);
}


