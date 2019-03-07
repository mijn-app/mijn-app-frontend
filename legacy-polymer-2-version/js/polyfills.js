Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [
        (dd > 9 ? '' : '0') + dd,
        (mm > 9 ? '' : '0') + mm,
        this.getFullYear(),
    ].join('-');
};

function getTypeOfVariable(val) {
    return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
