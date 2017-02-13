# vscode-author-generator

A tool to generate Custom Author Info at the top of your file.

![gif](https://raw.githubusercontent.com/excaliburhan/vscode-author-generator/master/example.gif)

## Installation

Press `F1` in VSCode, type `ext install` and then look for `vscode-author-generator`.

## Features

- Support multiple templates, `js`, `css`, `html/htm` file types are supported for now.
- Support custom infomation, `author name`, `email`, `date` info is supported for now.

## Usage

### Before Use

- `Preferences` -> `Settings`, add `author-generator.author` and `author-generator.email`.

### Commands

- Generate Author Info - generate your author info right now.

### Manage Custom Templates

#### 1. Open extension directory and find `vscode-author-generator`

- Windows: %USERPROFILE%\.vscode\extensions\{edwardhjp.vscode-author-generator-version}
- Mac: ~/.vscode/extensions/{edwardhjp.vscode-author-generator-version}
- Linux: ~/.vscode/extensions/{edwardhjp.vscode-author-generator-version}

#### 2. Edit or add template file

- `vscode-author-generator` use file suffix as template name. eg: `js.tpl` is the template for `*.js` files. if the specific template file doesn't exsit, `default.tpl` will be used.
- if you want to add another template, just make sure the template filename is correct. eg: add a file named `py.tpl` in `templates` directory will make `*.py` files add this template info.
- notice: `[author]`, `[email]` will automatically replaced with infomation in your VSCode Configration.
