import gulp from "gulp";
import { path, task } from "./const";

const TS = path.SRC + "**/*.ts";

gulp.task(task.WATCH, [task.BUILD_TS], () => {
    let _watchables = [TS];

    let watcher = gulp.watch(_watchables, [task.BUILD_TS]);
    watcher.on("change", function(event) {
        console.log("File " + event.path + " was " + event.type);
    });

    return watcher;
});