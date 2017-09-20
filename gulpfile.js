var gulp = require('gulp');
var del = require('del');
var src = 'src/';
var dist = 'dist/';
var exec = require('child_process').exec;

gulp.task('clean', function() {
    del(dist);
});

gulp.task('watch', function() {
    gulp.watch(src + '**/*.ts', ['build']);
    gulp.watch(src + '**/*.{html,htm,css}', ['build']);
});

gulp.task('default', ['build', 'watch']);
gulp.task('build', function (cb) {
    exec('ng build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})