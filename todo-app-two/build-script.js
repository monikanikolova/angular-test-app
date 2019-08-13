const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files =[
        './dist/todo-app-two/main-es2015.js',
        './dist/todo-app-two/polyfills-es2015.js',
        './dist/todo-app-two/runtime-es2015.js'
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/app-two.js')
    console.info('Angular Elements created successfully!')

})()
