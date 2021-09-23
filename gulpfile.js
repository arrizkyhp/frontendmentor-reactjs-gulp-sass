const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");

function buildStyle() {
  return src("./src/assets/scss/style.scss", { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(prefix("last 2 versions"))
    .pipe(dest("src/assets/css", { sourcemaps: "." }));
}

function watchTask() {
  watch(["./src/assets/scss/**/*.scss"], buildStyle);
}

exports.default = series(buildStyle, watchTask);
