
const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files =[
        './dist/todo-app/main-es2015.js',
        './dist/todo-app/polyfills-es2015.js',
        './dist/todo-app/runtime-es2015.js'
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/app.js')
    console.info('Angular Elements created successfully!')

})()
