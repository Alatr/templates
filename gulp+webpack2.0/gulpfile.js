const gulp = require('gulp');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const del = require('del');
const notify = require("gulp-notify");
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
// css
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
// webpack
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
//js
const importFile = require('gulp-file-include');
const uglify = require('gulp-uglify');
//img
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');
//svg
const svgSprites = require("gulp-svg-sprites");


const paths = {
    root: './dist',
    templates: {
        pages: './src/pug/pages/*.pug',
        src: './src/pug/**/*.pug',
        dest: './dist'
    },
    styles: { 
        main: './src/assets/styles/main.scss',
        src: './src/assets/styles/**/*.scss',
        dest: './dist/assets/styles'
    },
    scripts: {
        src: './src/assets/scripts/*.js',
        dest: './dist/assets/scripts/'
    },
    fonts: {
        src: './src/assets/fonts/**/*',
        dest: './dist/assets/fonts'
    },
    images: {
        src: './src/assets/images/**/*',
        dest: './dist/assets/images'
    },
    svgSprite: {
        src: './src/assets/svg-sprite/*.svg',
        dest: './src/assets/svg-sprite/sprite/'
    },
    gulpModules: {
        src: './src/assets/scripts/gulp-modules/*.js',
        dest: './dist/assets/scripts/'
    },
    libs: {
        src: './src/assets/scripts/libs/libs.js',
        dest: './src/assets/scripts/gulp-modules/'
    },
    static: {
        src: './src/static/**/*.*',
        dest: './dist/static/'
    },
}

// слежка
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    //gulp.watch(paths.scripts.src, scripts); //for webpack
    gulp.watch(paths.gulpModules.src, gulpModules);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.fonts.src, fonts);
    gulp.watch(paths.libs.src, libs);
    gulp.watch(paths.static.src, static);
}

// следим за build и релоадим браузер
function server() {
    browserSync.init({
				//server: paths.root,
				notify: false,
				proxy: "voda",
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

// очистка
function clean() {
    return del(paths.root);
}

// pug
function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.root));
}

// scss
function styles() {
    return gulp.src(paths.styles.main)
    .pipe(sourcemaps.init()) // инциализация sourcemap'ов
    .pipe(sass({
        outputStyle: 'expanded' // компиляции в CSS с отступами
    }))
    .on('error', notify.onError({
        title: 'SCSS',
        message: '<%= error.message %>' // вывод сообщения об ошибке
    }))
		.pipe(sourcemaps.write())
    .pipe(rename("main.min.css"))
		// .pipe(autoprefixer({
		// 	cascade: false,
		// 	browsers: 'last 15 versions',
		// }))
    .pipe(gulp.dest(paths.styles.dest))
}

// fonts
function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest))
}

// php
function static() {
    return gulp.src(paths.static.src)
        .pipe(gulp.dest(paths.static.dest))
}

// svg-sprite
function svgSprite() {
		return gulp.src(paths.svgSprite.src)
				.pipe(svgSprites({
					mode: "symbols",
					preview: false,
					selector: "icon-%f",
					svg: {
						symbols: 'symbol_sprite.php'
					}
				}))
        .pipe(gulp.dest(paths.svgSprite.dest))
}

// images
function images() {
    return gulp.src(paths.images.src)
        .pipe(cache(imagemin([
        	imagemin.gifsicle({
        		interlaced: true
        	}),
        	imagemin.jpegtran({
        		progressive: true
        	}),
        	imageminJpegRecompress({
        		loops: 5,
        		min: 75,
        		max: 80,
        		quality: 'medium'
        	}),
        	imagemin.svgo(),
        	imagemin.optipng({
        		optimizationLevel: 5
        	}),
        	imageminPngquant({
        		quality: [0.55, 0.60],
        		speed: 5
        	})
        ], {
        	verbose: true
        })))
        .pipe(gulp.dest(paths.images.dest));
}

// webpack
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest));
}

//gulp-scripts
function gulpModules() {
    return gulp.src(paths.gulpModules.src)
        .pipe(plumber({
            errorHandler: notify.onError({
            title: 'JavaScript',
            message: '<%= error.message %>' // выводим сообщение об ошибке
            })
        }))
		.pipe(importFile({ //
			prefix: '@@', // импортим все файлы, описанные в результируещем js
			basepath: '@file' //
		}))
		.pipe(gulp.dest(paths.gulpModules.dest))
}

//libs-scripts
function libs() {
	return gulp.src(paths.libs.src)
		.pipe(importFile({ //
			prefix: '@@', // импортим все файлы, описанные в результируещем js
			basepath: '@file' //
		}))
		.pipe(uglify())
		.pipe(gulp.dest(paths.libs.dest))
}



exports.templates = templates;
exports.styles = styles;
//exports.scripts = scripts;
exports.gulpModules = gulpModules;
exports.images = images;
exports.clean = clean;
exports.fonts = fonts;
exports.svgSprite = svgSprite;
exports.libs = libs;
exports.static = static;

gulp.task('default', gulp.series(
		svgSprite,
		clean,
		libs,
		gulp.parallel(styles, templates, fonts, gulpModules, images, static),
    gulp.parallel(watch, server)
));