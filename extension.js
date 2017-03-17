/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @date 2017-02-13 11:51:32
 * @desc [description] 
*/

let vscode = require('vscode')
let generator = require('./generator.js')

function activate(context) {
  let initAuthor = vscode.commands.registerCommand('extension.generateAuthorInfo', () => {
    generator.initInfo()
  })

  let updateAuthor = vscode.commands.registerCommand('extension.updateAuthorInfo', () => {
    generator.updateInfo()
  })

  context.subscriptions.push(initAuthor)
  context.subscriptions.push(updateAuthor)
}
exports.activate = activate

function deactivate() {}
exports.deactivate = deactivate
