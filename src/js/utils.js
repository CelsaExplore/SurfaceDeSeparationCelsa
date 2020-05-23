var utils = {

    cleanText: function (text) {
        if (!text) {
            return '';
        } else {
            return text.replace(/ :/g, '&nbsp;:')
                .replace(/« /g, '«&nbsp;')
                .replace(/ »/g, '&nbsp;»');
        }
    }
};
module.exports = utils;
