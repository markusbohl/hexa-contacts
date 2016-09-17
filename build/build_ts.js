import gulp from "gulp";
import ts from "gulp-typescript";
import sourcemaps from "gulp-sourcemaps";
import { path, task } from "./const";

const TS_CONFIG = path.ROOT + "tsconfig.json";

gulp.task(task.BUILD_TS, () => {
    let tsProject = ts.createProject(TS_CONFIG);

    return gulp.src([path.SRC + "/**/*.ts", "!" + path.SRC + "/**/*.spec.ts"])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .js.pipe(sourcemaps.write(".", {
            includeContent: false,
            sourceRoot: "../src/"
        }))
        .pipe(gulp.dest(path.DIST));
});

