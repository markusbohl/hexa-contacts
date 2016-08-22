import gulp from "gulp";
import del from "del";
import { path, task } from "./const";

gulp.task(task.CLEAN_DIST, () => del.sync([path.DIST]));