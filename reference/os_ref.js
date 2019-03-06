const os = require('os')
const log = require('ololog')

/**
 * @method {{os:userInfo}} User info
 * */
log.red(os.userInfo())

/**
 * @method {{os:networkInterfaces}} Network interfaces info
 * */
log.lightRed(os.networkInterfaces())

/**
 * @method {{os:cpus}} CPU Core info
 * */
log.cyan(os.cpus())
log.lightCyan(`${os.cpus().length} CPU's`)

/**
 * @method {{os:freemem}} Free memory
 * */
log.lightYellow(os.freemem())

/**
 * @method {{os:totalmem}} Total memory
 * */
log.yellow(os.totalmem())

/**
 * @method {{os:homedir}} Home directory
 * */
log.magenta(os.homedir())

/**
 * @method {{os:uptime}} Total seconds system has been up
 * */
log.black(os.uptime())

/**
 * @method {{os:release}} Operating System (OS) release version
 * */
log.lightYellow(os.release())

/**
 * @method {{os:loadavg}} Array with the 1m, 5m and 15m load averages
 * @returns Array
 * @example console.log(os.loadavg()) => [1.97314453125, 2.1044921875, 2.18017578125]
 * */
log.blue(os.loadavg())

/**
 * @method {{os:platform}} Platform
 * */
log.magenta(os.platform())

/**
 * @method {{os:arch}} Architecture (CPU)
 * */
log.blue(os.arch())

/**
 * @method {{os:type}} Operating System (OS) name
 * */
log.lightBlue(os.type())

/**
 * @method {{os:endianness}} String identifying the endianness of the CPU for which the Node.js binary was compiled
 * @returns String
 * @example 'BE' big endian
 * @example 'LE' little endian
 * @url https://en.wikipedia.org/wiki/Endianness
 * */
log.red(os.endianness())

/**
 * @method {{os:getPriority}}
 * @param {{pid:integer}} Default: 0, Process ID to retrieve scheduling priority for
 * @returns integer
 * */
log.black(os.getPriority(0))


log.lightCyan(os.constants.priority)

