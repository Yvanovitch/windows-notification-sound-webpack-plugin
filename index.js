const webpack = require('webpack')
const {exec} = require('child_process')

let previousMessage = '';
var isWin = process.platform === "win32";

class WindowsNotificationSound {
    constructor(options) {
        return new webpack.ProgressPlugin(function (percent, message, ...args) {
            if (percent == ' 1 ' && isWin) {
                exec(`powershell "[console]::beep(500,300)"`)
            }
            if(message != previousMessage) {
                console.log(new Date().toLocaleString().replace(',',''),' Progression ', percent == ' 1 ' ? '100%' : message)
                previousMessage = message
            }
        })
    }
}

module.exports = WindowsNotificationSound
