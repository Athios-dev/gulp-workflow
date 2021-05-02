# Gulp workflow
Just sharing my Gulp workflow to build my CSS and JS files.

## 📥 Getting started

### Prerequisites
Have [Node.js](https://nodejs.org/en/) (with `npm` or `npx`) and [Gulp](https://gulpjs.com/) installed.

### Installation
Install following plugins :
* `gulp-autoprefixer`: CSS compatibility.
* `gulp-babel`: JS compatibility.
* `gulp-clean-css`: minify CSS.
* `gulp-uglify`: minify JS.
* `gulp-sass`: SASS compiler.
* `gulp-rename`: rename files.

## ⚙️ Workflow : gulpfile.js
👉 [Here](https://github.com/Athios-dev/gulp-workflow/blob/master/gulpfile.js) is my gulpfile.

### CSS
Gulp is watching inside `📁/src/scss/` to compile files inside `📁/public/css` directory.
Sass files are :
* **compiled** from `.scss` to `.css` ;
* **autoprefixed** ;
*  **minified** ;
* **rename** with `.min` ;

### JS
Gulp is watching inside `📁/src/js/` to compile files inside `📁/public/js` directory.
JavaScript files are :
* **babelized** from `.scss` to `.css` ;
*  **minified** ;
* **rename** with `.min` ;