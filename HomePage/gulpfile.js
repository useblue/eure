import { createRequire } from 'module';
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import { deleteAsync } from 'del';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass)
const require = createRequire(import.meta.url)
const minifycss = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const cssnano = require('gulp-cssnano')
const htmlclean = require('gulp-htmlclean')
const babel = require('gulp-babel')
const connect = require('gulp-connect')
const pug = require('gulp-pug')
sass.compiler = require('node-sass')

const config = require('./config.json')

gulp.task('clean', function () {
	return deleteAsync(['./dist/**/*'])
})

gulp.task('css', function () {
	return gulp
		.src('./src/css/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(minifycss({ compatibility: 'ie8' }))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 2 version'] }))
		.pipe(cssnano({ reduceIdents: false }))
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('html', function () {
	return gulp
		.src('./dist/index.html')
		.pipe(htmlclean())
		.pipe(htmlmin())
		.pipe(gulp.dest('./dist'))
})

gulp.task('js', function () {
	return gulp
		.src('./src/js/*.js')
		.pipe(babel({ presets: ['@babel/preset-env'] }))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('pug', function () {
	return gulp
		.src('./src/index.pug')
		.pipe(pug({ data: config }))
		.pipe(gulp.dest('./dist'))
})

gulp.task('assets', function () {
	return gulp
		.src(['./src/assets/**/*'],{encoding: false})
		.pipe(gulp.dest('./dist/assets'));
})

gulp.task('build', gulp.series('clean', 'assets', 'pug', 'css', 'js', 'html'))
gulp.task('default', gulp.series('build'))

gulp.task('watch', function () {
	gulp.watch('./src/components/*.pug', gulp.parallel('pug'))
	gulp.watch('./src/index.pug', gulp.parallel('pug'))
	gulp.watch('./src/css/**/*.scss', gulp.parallel(['css']))
	gulp.watch('./src/js/*.js', gulp.parallel(['js']))
	connect.server({
		root: 'dist',
		livereload: true,
		port: 8080
	})
})
