import { Command } from 'commander';
import { marked } from 'marked';
import puppeteer from 'puppeteer';
import fs from 'node:fs';

const program = new Command();

program
 .name('mdtopdf')
 .description('A tool for converting Markdown files to PDF.')
 .version('0.0.1')
 .argument('<file>','input Markdown file')
 .action((mdFile: string)=>{
  const mdNotation: string = fs.readFileSync(mdFile, 'utf-8');
  const htmlNotation: string | Promise<string> = MdtoHtml(mdNotation);
  htmlToPdf(htmlNotation);
  console.log()
 });

 program.parse();

function MdtoHtml(mdText: string){
  const html = marked.parse(mdText);
  return(html);
}

function htmlToPdf(htmlText: string){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.pdf({
    path: 'google_top.pdf',
  });
}