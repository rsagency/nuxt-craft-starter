// never try to import *.min.js files
import lazySizes from 'lazysizes'
import 'lazysizes/plugins/attrchange/ls.attrchange'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

// polyfills
import 'lazysizes/plugins/respimg/ls.respimg'

if (!('object-fit' in document.createElement('a').style)) {
    require('lazysizes/plugins/object-fit/ls.object-fit')
}

export default lazySizes
