var log = require('./logger.js')
var toHTML = require('./toHTML.js')
var toLog = require('./toLog.js')
var accurateTime = require('./accurateTime.js')
var toDiscord = require('./toDiscord.js')




//LOG = log('Message Contents','Type of log')
log('This is a Success log','ok')
log('This is a Error log','err')

//toHtml = toHTML(fileName, Rawhtml)
toHTML('website.html','<p>Sample Paragraph</p>')

//ToLog = toLog(data)
toLog('User requested x data')

//AccurateTime = Time from time.is w/ delay
accurateTime()

//toDiscord = toDiscord('Message Contents','Type of Message')
// Will error if you dont have config.json filled out
toDiscord('The Test worked','ok')

