const fs = require('fs')
var log = require('./logger.js')

let useCookies = function(file){
    fs.readFile(file, 'utf8' , (err, data) => {
        if (err) {
            log('Could not get Cookies From '+file, 'err');
          return
        }
        if(data.length === 0){
            log('No Cookies found in '+file, 'err');
        } else {
            log('Fetched Cookies From '+file, 'ok');
            const cookiesString = fs.readFileSync(file);
            const cookies = JSON.parse(cookiesString);
            return cookies
        }
      })
}


let saveCookies = function(file,CookieData){
    fs.readFile(file, 'utf8' , (err, data) => {
        if (err) {
            log('Could not Read old Cookies From '+file, 'err');
          return
        } else {
            fs.writeFileSync(file, '')
            fs.writeFileSync(file, JSON.stringify(CookieData, null, 2))
            log('Saved Cookies to '+file, 'ok');
        }
      })

}


let clearCookies= function(file){
    fs.readFile(file, 'utf8' , (err, data) => {
        if (err) {
            log('Could not Read old Cookies From '+file, 'err');
          return
        } else {
            fs.writeFileSync(file, '')

            log('Cleared Cookies From '+file, 'ok');
        }
      })

}


module.exports = {
    useCookies,
    saveCookies,
    clearCookies
};