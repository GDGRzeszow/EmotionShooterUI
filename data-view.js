window.DataViewService = (function () {

    var dataViewService = function () {

    }

    dataViewService.prototype.setImage = function (url) {
        this.image.src = url;
    }

    return new dataViewService();

})();
