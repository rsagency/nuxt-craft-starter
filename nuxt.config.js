// Import base config
import buildModules from './config/buildModules'
import head from './config/head'
import css from './config/css'
import plugins from './config/plugins'
import server from './config/server'
import modules from './config/modules'
import build from './config/build'
import generate from './config/generate'
import publicRuntimeConfig from './config/publicRuntimeConfig'

const options = {
    rootDir: './',
    srcDir: 'src',
    target: 'static',
    telemetry: false,
}

export default {
    ...options,
    loading: false,
    components: true,
    head,
    css,
    server,
    build,
    generate,
    modules,
    buildModules,
    plugins,
    publicRuntimeConfig,
}
