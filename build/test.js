import gulp from "gulp";
import {exec} from "child_process";
import {path, task} from "./const";

const TS = path.SRC + "**/*.ts";

gulp.task(task.TEST, (done) => {
    exec("jasmine-ts 'src/**/*.spec.ts'", (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        done(err);
    });
});

gulp.task(task.TDD, () => {
    let _watchables = [TS];

    return gulp.watch(_watchables, [task.TEST]);
});