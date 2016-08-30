import gulp from "gulp";
import { path, task } from "./const";
import {Server} from "karma";

const KARMA_CONFIG = "/Users/markus/Projects/contacts/karma.conf.js";

gulp.task(task.TEST, (done) => {
    new Server({
        configFile: KARMA_CONFIG,
        singleRun: true
    }, function() {done();}).start();
});