var gulp = require("gulp"); // Núcleo do Gulp
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

// variaveis com Local dos Arquivos
var scssLocalBase = './source/scss/*.scss';
var htmlLocalBase = './source/index.html';

// variaveis com Destino dos Arquivos
var scssDestino = './dist/css';
var htmlDestino = './dist';

// Minificacao
var minificacao = {	outputStyle: 'compressed' }

// Tarefa -- Compilar de SCSS para CSS e Mover
gulp.task('sass', function () {
	return gulp.src(scssLocalBase)
	.pipe(sass(minificacao).on('error', sass.logError))
    .pipe(gulp.dest(scssDestino))
});

// Tarefa -- Minificar e Mover HTML
gulp.task('html', function() {
  return gulp.src(htmlLocalBase)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(htmlDestino));
});

// Tarefa watch irá escutar as mudanças
gulp.task('ver', function (){
	gulp.watch('./source/scss/*.scss', ['sass']);
	gulp.watch('./source/index.html', ['html']);
});