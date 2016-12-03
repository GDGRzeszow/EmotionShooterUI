window.DataViewService = (function () {

    var dataViewService = function () {
        this.image = document.getElementById("photo");
    }

    dataViewService.prototype.showLoader = function(){
        document.getElementById("loader").className = "visible";
        document.getElementById("info").className = "";
    }

    dataViewService.prototype.setImage = function (url) {
        this.image.src = url;
    }

    dataViewService.prototype.setInfo = function (data) {
        console.log(data);
        document.getElementById("loader").className = "";
        document.getElementById("info").className = "visible";

        document.getElementById("info-container").innerHTML = this.buildInfo(data);
        // document.getElementById("text-container").innerHTML = this.buildFunText(data);

        console.log(data);

    }

    dataViewService.prototype.buildFunText = function (data) {
        var funText = "";
        funText += '<div class="info-data">' + data.funText + '</div>';
        return funText;
    }

    dataViewService.prototype.buildInfo = function (data) {
        var info = "";
        console.log(data);
        data.emotionsList.forEach(function (emotion, index) {
            console.log(emotion);
            info += '<div class="info-title">' + emotion.name + '</div><div class="info-data"><progress value="' + emotion.level + '" max="5"></progress></div>';
        });
        // info += '<div class="info-title">Zlosc:</div><div class="info-data"><progress value="' + data.anger.level + '" max="5"></progress></div>';
        // info += '<div class="info-title">Radosc:</div><div class="info-data"><progress value="' + data.joy.level + '" max="5"></progress></div>';
        // info += '<div class="info-title">Zatroskanie:</div><div class="info-data"><progress value="' + data.sorrow.level + '" max="5"></progress></div>';
        // info += '<div class="info-title">Zaskoczenie:</div><div class="info-data"><progress value="' + data.suprise.level + '" max="5"></progress></div>';

        // info += '<div class="info-title">Nakrycie glowy:</div><div class="info-data"><progress value="' + data.headwear + '" max="5"></progress></div>';
        // info += '<div class="info-title">Roz:</div><div class="info-data">' + data.blurredLikelihood + '</div>';
        // info += '<div class="info-title">underExposedLikelihood:</div><div class="info-data">' + data.underExposedLikelihood + '</div>';

        return info;
    }

    return new dataViewService();

})();
