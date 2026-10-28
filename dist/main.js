"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const marked_1 = require("marked");
const node_fs_1 = __importDefault(require("node:fs"));
const program = new commander_1.Command();
program
    .name('mdtopdf')
    .description('A tool for converting Markdown files to PDF.')
    .version('0.0.1')
    .argument('<file>', 'input Markdown file')
    .action((mdFile) => {
    const beforeFile = node_fs_1.default.readFileSync(mdFile, 'utf-8');
    const htmlNotation = MdtoHtml(beforeFile);
    console.log(htmlNotation);
});
program.parse();
function MdtoHtml(mdText) {
    const htmlText = marked_1.marked.parse(mdText);
    return (htmlText);
}
function htmlToPdf() {
}
