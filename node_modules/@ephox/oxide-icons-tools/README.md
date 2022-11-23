# Various gulp plugins for Oxide icon packs

## oxide-icon-packager
A very opinionated plugin which packages svgs in different formats and pipe them through with a predefined directory structure.
```
gulp.task('icon-packager', function () {
  return gulp.src('src/svg/*.svg')
    .pipe(iconPackager({
      // [Required] Name of the icon pack.
      name: 'default',

      // Logs a diff with @tinymce/oxide-icons-default. Requires that the module is made available.
      diffDefault: true,

      // Icons to ignore when producing a diff. Used in combination with "diffDefault"
      diffIgnore: ['accessibility-check'],

      // Override SVGO options (will be merged with default SVGO options). Use "svgo: false" to completely disable SVGO
      svgo: { floatPrecision: 2 }
    }))
    .pipe(gulp.dest('dist'));
});
```