var gulp = require('gulp');//本地安装gulp所用到的地方
var minifyHtml = require("gulp-minify-html");//加入相应依赖
var minifycss = require('gulp-clean-css');
var gulp = require('gulp');
var minifyjs = require("gulp-uglify");
var concat = require('gulp-concat');
var spritesmith = require('gulp.spritesmith');














//html压缩
	gulp.task('htmltask', function () {  //htmltask为自定义的任务名称
    	gulp.src('*.html') // 要压缩的html文件
   		.pipe(minifyHtml())  //压缩，和上面定义的依赖名相同
   		.pipe(gulp.dest('dist'))//压缩到哪
	});
	

gulp.task('csstask', function () { 
    	gulp.src('./css/*.css') 
   		.pipe(minifycss())  
   		.pipe(gulp.dest('./dist/css'))
	});


gulp.task('jstask', function () { 
    	gulp.src('./js/*.js') 
   		.pipe(minifyjs())  
   		.pipe(concat('all.js'))
   		.pipe(gulp.dest('./dist/js'))
	});


gulp.task('sprite',function(){
  gulp.src(['./img/*.png']) 
  .pipe(spritesmith({
    imgName:'sprite.png', 
    cssName:'sprite.css'   }))
  .pipe(gulp.dest('./dist/sprites'));
});
gulp.task('watch', function () {
    				gulp.watch('*.html', ['htmltask']); //监听文件名  任务名
    		    	gulp.watch('css/*.css', ['csstask']);
gulp.watch('js/*.js', ['jstask']);
			});
