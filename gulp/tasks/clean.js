(function() {
  'use strict';

  var gulp = require('gulp');
  var del = require('del');
  var paths = require('../../paths');

  gulp.task('clean', function() {
    return del([paths.bundleDest + '/torso-bundle*.js',
                paths.docsApiDest,
                paths.docsApiMdDest,
                paths.docsAnnotatedDest,
                paths.testSandbox]);
  });

})();
