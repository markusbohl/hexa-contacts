import gulp from "gulp";
import ts from "gulp-typescript";
import { path, task } from "./const";

const TS_CONFIG = path.ROOT + "tsconfig.json";

gulp.task(task.BUILD_TS, () => {
    let tsProject = ts.createProject(TS_CONFIG);

    return gulp.src([path.SRC + "/**/*.ts", "!" + path.SRC + "/**/*.spec.ts"])
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest(path.DIST));
});

