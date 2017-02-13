/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @date 2017-02-13 11:51:32
 * @desc [description] 
*/

let vscode = require('vscode')
let generator = require('./generator.js')

function activate(context) {
  let authorGenerator = vscode.commands.registerCommand('extension.generateAuthorInfo', () => {
    let editor = vscode.window.activeTextEditor
    editor.edit((builder) => {
      try {
        let document = editor._documentData._document
        let tplText = generator.getTplText(document)
        builder.insert(new vscode.Position(0, 0), tplText)
      } catch (error) {
        vscode.window.showErrorMessage(error.message)
      }
    })
  })

  context.subscriptions.push(authorGenerator)
}
exports.activate = activate

function deactivate() {}
exports.deactivate = deactivate
