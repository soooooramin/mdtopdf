import { Command } from 'commander';
import { marked } from 'marked';
import puppeteer from 'puppeteer';
import fs from 'node:fs';
const program = new Command();
program
    .name('mdtopdf')
    .description('A tool for converting Markdown files to PDF.')
    .version('0.0.1')
    .argument('<file>', 'input Markdown file')
    .action(async (mdFile) => {
    const mdNotation = fs.readFileSync(mdFile, 'utf-8');
    const htmlNotation = MdtoHtml(mdNotation);
    await htmlToPdf(htmlNotation);
    console.log();
});
program.parse();
function MdtoHtml(mdText) {
    return marked.parse(mdText);
}
async function htmlToPdf(htmlText) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlText);
    await page.pdf({
        path: 'output.pdf',
        format: 'A4',
    });
}
