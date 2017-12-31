/**
 * Created by Shambhu on 4/4/2017.
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
gulp.task('default', function () {

    nodemon({
        script: 'app.js'
        , ext: 'js html'
        , env: { 'port':9000 }
        , ignore:['./node_modules/**']
    })
        .on('restart',function(){
            console.log("Restarting the server");
        });


})