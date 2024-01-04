/*
npm install --save-dev @babel/preset-env @babel/cli @babel/core babel-loader style-loader css-loader webpack webpack-cli
npm install core-js regenerator-runtime

Babel é um transpilador/transformador de código javascript, ele transpila o código javascript moderno para um versão estavel para qualquer navegador. Ele permite que qualquer navegador utilize uma aplicação web, sem ter que fazer muitos ajustes

npx babel source.js -o new.js presets="@babel/env" -w - Converte o código fonte js, em código js estavel

-w(watch) - Qualquer alteração no código fonte é refletida no código destino

presets:
    @babel/env - Utiliza ultima funcionalidades do ecmascript mesmo em navegador antigo
*/
