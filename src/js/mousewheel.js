import $ from 'jquery';
import 'jquery-mousewheel';
import move from './move';

module.exports = function () {
    var mouseWheelLast = 0;
    var mouseWheelInterval = 25;
    var mouseWheelSize = 100;
    var mouseWheelCount = 1;
    var mouseWheelTimer;

    $(window).on("mousewheel", function (e) {
        if (Date.now() <= mouseWheelLast + mouseWheelInterval) {
            clearTimeout(mouseWheelTimer);
            mouseWheelCount++;
        }
        mouseWheelTimer = setTimeout(function() {
            if (document.body.className.indexOf('show-cover') > -1 && e.deltaY < 0) {
                document.body.classList.remove('show-cover');
                move.to(0);
                return false;
            }
            var orientation = (e.deltaY > 0) ? 1 : -1;
            var deltaY = orientation * mouseWheelSize * Math.min(mouseWheelCount, 5);
            var scrollLeft = parseInt(document.getElementById('board').style.left, 10) || 0;
            var offset = scrollLeft + deltaY;
            mouseWheelCount = 1;
            move.to(offset);
        }, mouseWheelInterval);
        mouseWheelLast = Date.now();
        e.preventDefault();
    });
};
