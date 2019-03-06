const path = require('path')
const log = require('ololog').configure({ location: false })

/**
 * @param {{path:basename}} Base file name
 * @return String
 * @example 'path_ref.js'
 * */
log.lightYellow(path.basename(__filename))

/**
 * @param {{path:dirname}}
 * @return String
 * @example '/Users/Flavor/Documents/Projects/es7/test-node-typescript/reference'
 * */
log.blue(path.dirname(__filename))

/**
 * @param {{path:extname}} File extension
 * @return String
 * @example '.js'
 * */
log.lightRed(path.extname(__filename))

/**
 * @param {{path:parse}} Path object
 * @return Object
 * @example {
				root: "/",
				dir: "/Users/Flavor/Documents/Projects/es7/test-node-typescript/r…",
				base: "path_ref.js",
				ext: ".js",
				name: "path"
			}
 * @example console.log(path.parse(__filename).base) => path_ref.js
 * */
log.cyan(path.parse(__filename))
log.lightCyan(path.parse(__filename).base)

/**
 * @param {{path:join}} Concatenate paths
 * @return String
 * @example console.log(path.join(__dirname, 'test', 'hello.html'))
 * 				=> /Users/Flavor/Documents/Projects/es7/test-node-typescript/reference/path_ref.js/test/hello.html
 * */
log.black(path.join(__dirname, 'test', 'hello.html'))







