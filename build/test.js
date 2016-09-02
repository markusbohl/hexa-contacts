import gulp from "gulp";
import { path, task } from "./const";
import {Server} from "karma";

const KARMA_CONFIG = path.ROOT + "/karma.conf.js";

gulp.task(task.TEST, (done) => {
    new Server({
        configFile: KARMA_CONFIG,
        singleRun: true
    }, function() {done();}).start();
});

gulp.task(task.TDD, (done) => {
    new Server({
        configFile: KARMA_CONFIG,
        singleRun: false,
        autoWatch: true
    }, function() {done();}).start();
});