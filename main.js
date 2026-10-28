import { Command } from 'commander';
import { marked } from 'marked';
import fs from 'fs';
const program = new Command();
program
    .name('mdtopdf')
    .description('A tool for converting Markdown files to PDF.')
    .version('0.0.1')
    .argument('<file>', 'input Markdown file')
    .action((mdFile) => {
    const beforeFile = fs.readFileSync(mdFile, 'utf-8');
    const html = marked.parse(beforeFile);
    console.log(html);
});
program.parse();
