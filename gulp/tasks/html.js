import gulp from 'gulp'
import fileinclude from 'gulp-file-include'
import gulpif from 'gulp-if'
import plumber from 'gulp-plumber'
import config from '../config'

export const htmlBuild = () =>
  gulp
    .src(`${config.src.html}/*.html`)
    .pipe(plumber())
    .pipe(fileinclude())
    .pipe(gulp.dest(`${config.dest.html}`))

export const htmlWatch = () =>
  gulp.watch(`${config.src.html}/**/*.html`, htmlBuild)
