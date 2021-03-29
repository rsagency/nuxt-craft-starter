// Import base config
import buildModules from './config/buildModules'
import head from './config/head'
import plugins from './config/plugins'
import modules from './config/modules'
import build from './config/build'
import router from './config/router'
import serverMiddleware from './config/serverMiddleware'
import publicRuntimeConfig from './config/publicRuntimeConfig'

const options = {
    rootDir: './',
    srcDir: 'src',
    target: 'static',
    ssr: true,
}

export default {
    ...options,
    loading: false,
    components: true,
    head,
    buildModules,
    plugins,
    modules,
    build,
    router,
    serverMiddleware,
    publicRuntimeConfig,
}
