"use strict";
var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var fs = require("fs");
var path = require("path");
var filePath = path.join(__dirname, "../assets/projects/projectsData.json");
var rawData = fs.readFileSync(filePath, "utf-8");
var projects = JSON.parse(rawData);
var projectsWithIds = projects.map(function (project) {
    return __assign(__assign({}, project), {
        id: project.id || (0, uuid_1.v4)(),
    });
});
fs.writeFileSync(filePath, JSON.stringify(projectsWithIds, null, 2));
console.log("UUIDs added to projects successfully.");
