"use strict";
var exec = require('cordova/exec');
var ImageViewer = /** @class */ (function () {
    function ImageViewer() {
    }
    ImageViewer.show = function (url, title, options) {
        if (title === void 0) { title = ''; }
        if (options === void 0) {
            options = {
                share: false,
                closeButton: true,
            };
        }
        if (url && url.trim() == '') {
            // Do nothing
            return;
        }
        var args = [url, title, options.share, options.closeButton];
        exec(function () { }, function () { }, "ImageViewer", "show", args);
    };
    return ImageViewer;
}());

module.exports = ImageViewer;
