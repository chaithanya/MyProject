var gulp = require('gulp');
gutil = require('gulp-util');
var war = require('gulp-war');
zip = require('gulp-zip');
const concat = require('gulp-concat');
const browsersync = require('browser-sync').create();
 
var devMode = false;
 
// gulp.task('default', function() {
//   return gutil.log('Gulp is running!')
// });
 
// gulp.task('second', function() {
//   console.log('second task');
// });
 
// gulp.task('start', function(){
//       devMode = true;
//       gulp.start(['default','second']);
// })
 
// gulp.task('html', function(){
//       gulp.src('src/app/*.html')
//       .pipe(gulp.dest('dist'))
//       .pipe(browsersync.reload({
//                 stream: true
//             }))
// });
var exec = require('child_process').exec;
 
gulp.task('build', function (cb) {
  //exec('ng build --prod', function (err, stdout, stderr) {
    exec('ng build --prod --base-href=/myApp/', {maxBuffer: 1024 * 500},
 function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})
 
gulp.task('war', function () {
    gulp.src('dist/*.*')
        .pipe(war({
            welcome: 'index.html',
            displayName: 'Grunt WAR',
        }))
        .pipe(zip('myApp.war'))
        .pipe(gulp.dest('dist'));
})
