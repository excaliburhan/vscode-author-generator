/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @date 2017-02-10 13:10:00
 * @desc [description] 
*/

let vscode = require('vscode')
let path = require('path')
let fs = require('fs')
let moment = require('moment')

module.exports = {
  getFileType(document) {
    let fileInfo = document.fileName.split('.')
    return fileInfo.length > 1 ? fileInfo.pop() : 'default'
  },
  getTplPath(type) {
    type = type.toLowerCase()
    let extDir = vscode.extensions.getExtension('edwardhjp.vscode-author-generator').extensionPath
    let extPath = path.join(extDir, 'templates', `${type}.tpl`)
    if (fs.existsSync(extPath)) {
      return extPath
    } else {
      return path.join(extDir, 'templates', 'default.tpl')
    }
  },
  getTplText(document) {
    let text = ''
    let config = this.getConfig()
    let type = this.getFileType(document)
    let tplPath = this.getTplPath(type)
    try {
      text = fs.readFileSync(tplPath, 'utf-8')
      text = text.replace(/\[author\]/, config.author)
                 .replace(/\[email\]/, config.email)
                 .replace(/\[date\]/, config.date)
    } catch (error) {
      vscode.window.showErrorMessage(error.message)
    }
    return text
  },
  getConfig() {
    let config = vscode.workspace.getConfiguration('author-generator')
    config = {
      author: config.get('author'),
      email: config.get('email'),
      date: this.getDate()
    }
    return config
  },
  getDate() {
    return moment().format('YYYY-MM-DD hh:mm:ss')
  }
}
