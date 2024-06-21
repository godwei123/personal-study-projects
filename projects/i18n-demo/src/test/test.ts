import fs from 'fs-extra';
import * as parser from '@babel/parser';
import traverse from "@babel/traverse";
import generator from "@babel/generator";
import * as path from "node:path";
const p = path.resolve(__dirname, '../example/js-demo.js');
console.log('p',p)

const text = fs.readFileSync(p, { encoding: 'utf-8' });

console.log('text',text)

const ast = parser.parse(text, {
    sourceType: "module",
    plugins: ["jsx"],
});

console.log('ast',ast)


traverse(ast, {
    StringLiteral(path:any) {
        if (/[\u4e00-\u9fa5]/.test(path.node.value)) {
            path.node.value = `i18n.t('${path.node.value}')`;
        }
    },
});

const { code } = generator(ast);

console.log('code', code);
const newP = path.resolve(__dirname, '../example/js-demo-new.js');
fs.writeFileSync(newP, code, { encoding: 'utf-8' });



