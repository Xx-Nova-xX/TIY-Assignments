var gulp = require('gulp'),
connect = require('gulp-connect'),
args = require('yargs')
.alias('p', 'path')
.demand(['path'])
.alias('w', 'watch')
.argv;
 
gulp.task('connect', function(){
connect.server({
root: args.path,
livereload: true
});
});
 
gulp.task('html', function(){
gulp.src(args.watch)
.pipe(connect.reload());
});
 
gulp.task('watch', function(){
args.watch && gulp.watch([ args.watch ], [ 'html' ]);
});
 
gulp.task('open', function(){
require('child_process').exec('open http://localhost:8080');
});
 
gulp.task('default', ['connect', 'watch', 'open']);

