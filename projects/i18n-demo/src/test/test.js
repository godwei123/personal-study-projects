"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const parser = __importStar(require("@babel/parser"));
const traverse_1 = __importDefault(require("@babel/traverse"));
const generator_1 = __importDefault(require("@babel/generator"));
const path = __importStar(require("node:path"));
const p = path.resolve(__dirname, '../example/js-demo.js');
console.log('p', p);
const text = fs_extra_1.default.readFileSync(p, { encoding: 'utf-8' });
console.log('text', text);
const ast = parser.parse(text, {
    sourceType: "module",
    plugins: ["jsx"],
});
console.log('ast', ast);
traverse_1.default(ast, {
    StringLiteral(path) {
        if (/[\u4e00-\u9fa5]/.test(path.node.value)) {
            path.node.value = `i18n.t('${path.node.value}')`;
        }
    },
});
const { code } = generator_1.default(ast);
console.log('code', code);
const newP = path.resolve(__dirname, '../example/js-demo-new.js');
fs_extra_1.default.writeFileSync(newP, code, { encoding: 'utf-8' });
