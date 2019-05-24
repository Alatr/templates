/*
 * Gulp Pure Start © 2017 – 2019, smart orange
 * ISC Licensed
 * v1.0.1
 */

'use strict';

let dev = './dev',     // рабочая среда проекта
	build = './build', // рабочий билд
	prod = './prod';   // билд в продакшен

// Подключаем все необходимые плагины
const gulp       = require('gulp'),                       // Сам сборщик Gulp
	sass         = require('gulp-sass'),                  // Пакет компиляции SASS/SCSS
	mmq          = require('gulp-merge-media-queries'),   // Плагин, соединющий медиа-запросы
	browserSync  = require('browser-sync'),               // Запуск локального сервера
	babel        = require('gulp-babel'),                 // Транспиляция ES6 в ES5
	sourcemaps   = require('gulp-sourcemaps'),            // Плагин, создающий source maps к файлам
	uglify       = require('gulp-uglify'),                // Пакет минификации файлов JavaScript
	cssnano      = require('gulp-cssnano'),               // Пакет минификации файлов CSS
	rename       = require('gulp-rename'),                // Переименовывание файлов
	del          = require('del'),                        // Удаление файлов директории
	imagemin     = require('gulp-imagemin'),              // Пакет минификации изображений (в зависимостях также идут дополнительные пакеты)
	cache        = require('gulp-cache'),                 // Работа с кэшом
	autoprefixer = require('gulp-autoprefixer'),          // Пакет расстановки вендорных перфиксов
	plumber      = require('gulp-plumber'),               // Предотвращает разрыв pipe'ов, вызванных ошибками gulp-плагинов
	notify       = require('gulp-notify'),                // Выводит уведомления
	eslint       = require('gulp-eslint'),                // Линтинг JS-кода
  importFile   = require('gulp-file-include'),          // Импорт файлов (@@include('path/to/file'))

  imageminPngquant 					= require('imagemin-pngquant'),
  imageminJpegRecompress  	= require('imagemin-jpeg-recompress'),

  svgSprite               = require('gulp-svg-sprites'),
  svgmin                  = require('gulp-svgmin'),
  cheerio                 = require('gulp-cheerio'),
  replace                 = require('gulp-replace');

// Компилируем SASS (можно изменить на SCSS) в CSS с минификацией и добавляем вендорные префиксы
gulp.task('sass', () => {
	return gulp.src(`${dev}/sass/style.scss`)   // В этом файле(-ах) хранятся основные стили, остальные следует импортировать в него
	.pipe(sourcemaps.init())                    // инциализация sourcemap'ов
	.pipe(sass({
		outputStyle: 'expanded' // компиляции в CSS с отступами
	}))
	.on('error', notify.onError({
		title: 'SCSS',
		message: '<%= error.message %>'         // вывод сообщения об ошибке
  }))
  .pipe(autoprefixer({
    grid: 'no-autoplace',
    browsers: 'last 15 versions',
    cascade: false
  }))
  .pipe(mmq())
  .pipe(cssnano())
	.pipe(sourcemaps.write())                   // запись sourcemap'ов
	.pipe(gulp.dest(`${build}/css`))            // путь вывода файла(-ов)
	.pipe(browserSync.reload({
		stream: true                            // инжектим стили без перезагрузки страницы
	}));
});

// Таск SASS для продакшена, без sourcemap'ов
gulp.task('_sass',  () => {
	return gulp.src(`${dev}/sass/style.scss`)
	.pipe(sass())
	.pipe(autoprefixer({
    grid: 'no-autoplace',
    browsers: 'last 15 versions',
    cascade: false
  }))
	.pipe(mmq())
	.pipe(cssnano())
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(gulp.dest(`${prod}/css`));
});

// Линтинг JS-кода
gulp.task('eslint', () => {
	return gulp.src([`${dev}/components/**/*.js`, `${dev}/assets/*.js`])    // все JS файлы
	.pipe(eslint({
		fix: true
	}))
	.pipe(eslint.format());                     // выводит сообщения ESLint'а в консоль
});

// Подключаем JS файлы результирующего файла common.js, конкатенируем и минифицируем
gulp.task('scripts', gulp.parallel('eslint', () => {
	return gulp.src(`${dev}/js/script.js`)      // основной(-ые) файл(-ы) наших сценариев
	.pipe(plumber({
		errorHandler: notify.onError({
			title: 'JavaScript',
			message: '<%= error.message %>'     // выводим сообщение об ошибке
		})
	}))
	.pipe(importFile({                          //
		prefix: '@@',                           // импортим все файлы, описанные в результируещем js
		basepath: '@file'                       //
	}))
	.pipe(sourcemaps.init())                    // инициализация sourcemaps'ов
	// .pipe(babel())                              // транспиляция ES6 в ES5
	// .pipe(uglify())                             // минификация JS
	// .pipe(rename({
	// 	suffix: '.min'                          // переименовываем сжатый файл
	// }))
	.pipe(sourcemaps.write())                   // запись sourcemap'ов
	.pipe(gulp.dest(`${build}/js`))             // путь вывода файлов
	.pipe(browserSync.reload({
		stream: true                            // перезагружаем страницу
	}));
}));


// Таск scripts для продакшена, без sourcemap'ов
gulp.task('_scripts', gulp.parallel('eslint', () => {
	return gulp.src(`${dev}/js/script.js`)
	.pipe(importFile({
		prefix: '@@',
		basepath: '@file'
	}))
	.pipe(babel())
	.pipe(uglify())
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(gulp.dest(`${prod}/js`))
}));

// Подключаем JS файлы бибилотек, установленные bower'ом, конкатенируем их и минифицируем
gulp.task('jsLibs', () => {
  return gulp.src(`${dev}/js/libs.js`)        // файл, в который импортируются наши библиотеки
    .pipe(plumber({
      errorHandler: notify.onError({
        title: 'JavaScript',
        message: '<%= error.message %>'     // выводим сообщение об ошибке
      })
    }))
    .pipe(importFile({                          //
      prefix: '@@',                           // импортим все файлы, описанные в результируещем js
      basepath: '@file'                       //
    }))
    .pipe(uglify())                             // минификация JS
    .pipe(rename({
      suffix: '.min'                          // переименовываем сжатый файл
    }))
    .pipe(gulp.dest(`${build}/js`))             // путь вывода файлов
    .pipe(browserSync.reload({
      stream: true                            // перезагружаем страницу
    }));
});



// Сжатие картинок
gulp.task('img', function () {
  return gulp.src([ `${dev}/img/**/*`])
    .pipe(cache(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imageminJpegRecompress({
        loops: 5,
        min: 65,
        max: 70,
        quality: 'medium'
      }),
      imagemin.svgo(),
      imagemin.optipng({
        optimizationLevel: 5
      }),
      imageminPngquant({
        quality: [0.55,0.60],
        speed: 5
      })
    ], {
      verbose: true
    })))
    .pipe(gulp.dest(`${build}/img`));
});

// svg sprite
gulp.task('svg', function () {
  return gulp.src(`${dev}/img/icons-sprite/**/*.svg`)
    // minify svg
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    // remove all fill and style declarations in out shapes
    .pipe(cheerio({
      run: function ($) {
        $('[fill^="#"]').removeAttr('fill');
        $('[style]').removeAttr('style');
      },
      parserOptions: {
        xmlMode: true
      }
    }))
    // cheerio plugin create unnecessary string '>', so replace it.
    .pipe(replace('&gt;', '>'))
    // build svg sprite
    .pipe(svgSprite({
      mode: "symbols",
      preview: false,
      selector: "icon-%f",
      svg: {
        symbols: 'symbol_sprite.php'
      }
    }))
    .pipe(gulp.dest(`${build}/img/icons-sprite`));
});

// Переносим php в build
gulp.task('php', () => {
  return gulp.src(`${dev}/**/*.php`)
    .pipe(gulp.dest(`${build}/`))
    .pipe(browserSync.reload({
      stream: true                            // инжектим стили без перезагрузки страницы
    }));
});
// Переносим php в prod
gulp.task('_php', () => {
  return gulp.src(`${dev}/**/*.php`)
    .pipe(gulp.dest(`${prod}/**`));
});

// Переносим шрифты
gulp.task('fonts', () => {
	return gulp.src(`${dev}/fonts/**/*`)
	.pipe(gulp.dest(`${build}/fonts`));
});
// Переносим js
gulp.task('jss', () => {
	return gulp.src(`${dev}/js/assets/*.js`)
	.pipe(gulp.dest(`${build}/js/assets`));
});

gulp.task('esjss', () => {
	return gulp.src(`${dev}/js/assets/*.js`)
	.pipe(gulp.dest(`${prod}/js/assets`));
});

// Запускаем наш локальный сервер
gulp.task('browser-sync', () => {
	browserSync({
		proxy: "smarto",
		notify: false,                           // отключаем стандартные уведомления browsersync
	});
});

// Следим за изменениями файлов и вывполняем соответствующие таски
gulp.task('default', gulp.parallel('sass', 'img', 'svg', 'php', 'jsLibs', 'scripts', 'jss' ,'fonts', 'browser-sync', () => {
	// стили
	gulp.watch(`${dev}/**/*.scss`, gulp.series('sass'));
	// разметка
	gulp.watch(`${dev}/**/*.php`, gulp.series('php'));
	// скрипты
	gulp.watch(`${dev}/**/*.js`, gulp.series(['scripts','jss']));
	// скрипты библиотек
	gulp.watch(`${dev}/js/libs.js`, gulp.series('jsLibs'));
	// шрифты
	gulp.watch(`${dev}/fonts/**/*`, gulp.series('fonts'));
	// изображения
	gulp.watch(`${dev}/img/**/*`, gulp.series('img'));
	// изображения
	gulp.watch(`${dev}/img/icons-sprite/*.svg`, gulp.series('svg'));
}));

// Удаляем все лишние файлы: '.gitkeep', 'changelog.md' и 'readme.md'
gulp.task('misc', async () => {
	return del.sync(['**/.gitkeep', 'changelog.md', 'readme.md']);
});

// Очищаем директорию продакшен билда
gulp.task('clean', async () => {
	return del.sync(`${prod}/**/*`);
});

// Чистим кэш изображений (вообще весь кэш)
gulp.task('clear', async () => {
	return cache.clearAll();
});

// Собираем наш билд в продакшен
gulp.task('prod', gulp.series('clean', 'img', '_sass', '_php', 'jsLibs', '_scripts','jss' , async () => {
	// Собираем JS-библиотеки
		gulp.src(`${build}/js/libs.min.js`)
			.pipe(gulp.dest(`${prod}/js`));

	// Собираем шрифты
	gulp.src(`${dev}/fonts/**/*`)
			.pipe(gulp.dest(`${prod}/fonts`));

	// Собираем изображения
	gulp.src(`${build}/img/**/*`)
			.pipe(gulp.dest(`${prod}/img`));

	// Собираем manifest.json
	gulp.src(`${dev}/manifest.json`)
			.pipe(gulp.dest(`${prod}/`));
}));