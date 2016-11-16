window.BackgroundService = (function(Char) {

    var backgroundService = function (id) {

    }

    backgroundService.prototype.init = function (id) {
        this.c = document.getElementById(id);

        this.c.height = window.innerHeight;
        this.c.width = window.innerWidth;

        this.ctx = this.c.getContext("2d");
        this.ctx.moveTo(0,0);
        this.ctx.lineTo(200,100);
        this.ctx.stroke();

    }

    backgroundService.prototype.generateChars = function () {

    }

    return new backgroundService();

})(Char);
