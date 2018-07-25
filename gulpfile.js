var gulp = require('gulp');

// Gulp / Node utilities
var log = require('fancy-log');
var c = require('ansi-colors');

// Basic workflow plugins
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');

// -----------------------------------------------------------------------------
// Sass Task
//
// Compiles Sass and runs the CSS through autoprefixer. A separate task will
// combine the compiled CSS with vendor files and minify the aggregate.
// -----------------------------------------------------------------------------

function logError(err, res) {
	log(c.red('Sass failed to compile'));
	log(c.red('> ') + err.file.split('/')[err.file.split('/').length - 1] + ' ' + c.underline('line ' + err.line) + ': ' + err.message);
}

gulp.task('styles', function styles() {
	return gulp.src('assets/scss/*.scss')
		.pipe(sass({ style: 'compressed' }).on('error', logError))
		.pipe(prefix( "last 1 version", "> 1%", "ie 8", "ie 7" ))
		.pipe(gulp.dest('assets/css'));
});


// -----------------------------------------------------------------------------
// Watch tasks
//
// These tasks are run whenever a file is saved. Don't confuse the files being
// watched (gulp.watch blobs in this task) with the files actually operated on
// by the gulp.src blobs in each individual task.
//
// A few of the performance-related tasks are excluded because they can take a
// bit of time to run and don't need to happen on every file change. If you want
// to run those tasks more frequently, set up a new watch task here.
// -----------------------------------------------------------------------------
gulp.task('watch', function watch() {
	gulp.watch('assets/scss/**/*.scss', gulp.series('styles'));
});
