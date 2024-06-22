export type FileExtension = 'js' | 'ts' | 'cjs' | 'mjs' | 'jsx' | 'tsx' | 'vue'

/**
 * js,mjs,cjs,jsx
 */
export const transformJs = (code:string,option:any={})=>{

}

/**
 * ts,tsx
 */
export const transformTs = (code:string,option:any={})=>{

}

/**
 * vue
 */
export const transformVue = (code:string,option:any={})=>{

}


export const transform = (code:string,ext: FileExtension)=>{

    switch (ext) {
        case 'js':
        case 'mjs':
        case 'cjs':
        case 'jsx':
            return transformJs(code)
        case 'ts':
        case 'tsx':
            return transformTs(code)
        case 'vue':
            return transformVue(code)
        default:
            throw new Error(`不支持对.${ext}后缀的文件进行提取`)
    }
}
