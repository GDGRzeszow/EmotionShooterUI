window.DataViewService = (function () {

    var dataViewService = function () {
    	this.image = document.getElementById("photo");
    }

    dataViewService.prototype.setImage = function (url) {
        this.image.src = url;
        document.getElementById("loader").className = "visible";
        document.getElementById("info").className = "";
    }

    dataViewService.prototype.setInfo = function (data) {
        document.getElementById("loader").className = "";
        document.getElementById("info").className = "visible";

         document.getElementById("info-container").innerHTML = this.buildInfo(data);

        console.log(data);

    }

    dataViewService.prototype.buildInfo = function (data) {
    	var info = "";

    	info += '<div class="info-title">angerLikelihood:</div><div class="info-data">' + data.angerLikelihood + '</div>';
    	info += '<div class="info-title">blurredLikelihood:</div><div class="info-data">' + data.blurredLikelihood + '</div>';
    	info += '<div class="info-title">headwearLikelihood:</div><div class="info-data">' + data.headwearLikelihood + '</div>';
    	info += '<div class="info-title">joyLikelihood:</div><div class="info-data">' + data.joyLikelihood + '</div>';
    	info += '<div class="info-title">sorrowLikelihood:</div><div class="info-data">' + data.sorrowLikelihood + '</div>';
    	info += '<div class="info-title">surpriseLikelihood:</div><div class="info-data">' + data.surpriseLikelihood + '</div>';
    	info += '<div class="info-title">underExposedLikelihood:</div><div class="info-data">' + data.underExposedLikelihood + '</div>';

    	return info;

    }

    return new dataViewService();

})();
