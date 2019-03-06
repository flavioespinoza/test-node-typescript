const fs = require('fs')
const path = require('path')
const log = require('ololog')

/**
 * @param {{fs:mkdir}} Create directory
 * */
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw err
// })

/**
 * @param {{fs:writeFile}} Create and write to file
 * */
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', (err) => {
	if (err) throw err
})

/**
 * @param {{fs:appendFile}} Appends to existing file
 * */
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js!', (err) => {
	if (err) throw err
})

/**
 * @param {{fs:readFile}} Read file
 * */
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
	if (err) throw err
	log.lightYellow(data)
})

/**
 * @param {{fs:rename}} Rename file
 * */
const timestamp = new Date().getTime()
const fileName = `hello_world__${timestamp}.txt`
fs.rename(
	path.join(__dirname, '/test', 'hello.txt'),
	path.join(__dirname, '/test', fileName),
	(err) => {
		if (err) throw err
	    log.blue(`File renamed to: ${fileName}`)
	}
)
