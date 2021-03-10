/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-02-13 11:51:32
 * @modify date 2020-08-07 13:03:51
 * @desc [extension file]
 */

let vscode = require('vscode');
let generator = require('./generator.js');

function activate(context) {
  let initAuthor = vscode.commands.registerCommand('extension.generateAuthorInfo', () => {
    generator.initInfo();
  });

  let updateAuthor = vscode.commands.registerCommand('extension.updateAuthorInfo', () => {
    generator.updateInfo();
  });

  context.subscriptions.push(initAuthor);
  context.subscriptions.push(updateAuthor);
}

function deactivate() {}

function initUpdateSave() {
  vscode.workspace.onWillSaveTextDocument(() => {
    generator.updateOnSave();
  });
}

initUpdateSave();

exports.activate = activate;
exports.deactivate = deactivate;
