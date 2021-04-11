'use strict';

const gulp = require('gulp');
const rimraf = require('gulp-rimraf');
const tslint = require('gulp-tslint');
const mocha = require('gulp-mocha');
const shell = require('gulp-shell');
const env = require('gulp-env');
const minify = require('gulp-htmlmin');

/**
 * Remove build directory.
 */
gulp.task('clean', function () {
  return gulp.src(outDir, { read: false }).pipe(rimraf());
});

/**
 * Lint all custom TypeScript files.
 */

gulp.task('tslint', function (done) {
  return gulp
    .src('src/**/*.ts')
    .pipe(tslint({ formatter: 'prose' }))
    .pipe(tslint.report());
});

/**
 * Compile TypeScript.
 */

/* function compileTS(args, cb) {
    return exec(tscCmd + args, (err, stdout, stderr) => {
        console.log(stdout);

        if (stderr) {
            console.log(stderr);
        }
        cb(err);
    });
} */

gulp.task('compile', shell.task(['npm run tsc']));

/**
 * Watch for changes in TypeScript
 */
gulp.task('watch', shell.task(['npm run tsc-watch']));

/**
 * Copy config files
 */
gulp.task('configs', (cb) => {
  return gulp.src('src/configurations/*.json').pipe(gulp.dest('./build/src/configurations'));
});

/**
 * Copy HTML files
 */

gulp.task('html', (cb) => {
  return gulp
    .src(['src/templates/**/*.html', 'src/templates/**/*.ejs'])
    .pipe(minify({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build/src/templates'));
});
/**
 * Copy assets images file
 */

gulp.task('images', (cb) => {
  return gulp
    .src(['src/assets/images/*.png', 'src/assets/images/*.jpg', "src/assets/images/*.svg"])
    .pipe(gulp.dest('./build/src/assets/images'));
});

/**
 * Build the project.
 */

gulp.task(
  'build',
  gulp.series(['tslint', 'compile', 'configs', 'images'], function (done) {
    console.log('Build completed');
    done();
  })
);

/**
 * Run tests.
 */
gulp.task(
  'test',
  gulp.series(['build'], function (done) {
    const envs = env.set({ NODE_ENV: 'test' });

    gulp
      .src(['build/test/**/*.js'])
      .pipe(envs)
      .pipe(mocha({ exit: true }))
      .once('error', (error) => {
        console.log(error);
        process.exit(1);
      });
    done();
  })
);

gulp.task('default', gulp.series(['build']));
