const sass = require('node-sass')
const fs = require('fs')

sass.render({file: '../public/main.scss'}, (err, result) => { 
    if (err) {
        console.log(err);
    } else {
        const css = result.css.toString()
        
        fs.writeFileSync('../public/style.css', css)
    }
})