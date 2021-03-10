/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-02-13 11:51:32
 * @modify date 2021-03-10 16:02:03
 * @desc [extension file]
 */

import * as vscode from 'vscode';
import generator from './generator';

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
  (vscode.workspace as any).onWillSaveTextDocument(() => {
    generator.updateOnSave();
  });
}

initUpdateSave();

exports.activate = activate;
exports.deactivate = deactivate;
