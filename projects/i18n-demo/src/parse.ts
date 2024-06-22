import babel, {PluginItem} from '@babel/core'

const defaultBabelPlugins:PluginItem[] = [

]

export const initParse = async (babelPresets: PluginItem[] = [], babelPlugins: PluginItem[] = []) => {
    return function (code: string) {
        return babel.parseSync(code, {
            ast: true,
            presets: babelPresets,
            plugins: [...defaultBabelPlugins, ...babelPlugins]
        })
    }
}
