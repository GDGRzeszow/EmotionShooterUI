window.BackgroundService = (function(Char) {

    var backgroundService = function (id) {

    }

    backgroundService.prototype.init = function (id) {

        this.generateChars();

        this.c = document.getElementById(id);
        this.c.height = window.innerHeight;
        this.c.width = window.innerWidth;
        this.ctx = this.c.getContext("2d");

        setInterval(this.$frame.bind(this),30);

    }

    backgroundService.prototype.generateChars = function () {
        this.chars = [];
        for(var i =0; i< 200;i++){
            var char = new Char();
            this.chars.push(char);
        }
    }

    backgroundService.prototype.$frame = function () {
        this.ctx.fillStyle='rgba(255,255,255,1)';
        this.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
        for(var i = 0; i < this.chars.length;i++){
            this.chars[i].changePosition();
            this.ctx.fillStyle = this.chars[i].color;
            this.ctx.font = this.chars[i].fontSize + "px Arial";
            this.ctx.fillText(this.chars[i].char, this.chars[i].position.x, this.chars[i].position.y);
        }
    }

    backgroundService.prototype.start = function () {
        console.log('start');
        this.chars[0].run();
        // for(var i = 0; i < this.chars.length;i++){
        //     this.chars[i].run();
        // }
    }

    backgroundService.prototype.stop = function () {
        console.log('stop');
        this.chars[0].slowDown();
        // for(var i = 0; i < this.chars.length;i++){
        //     this.chars[i].slowDown();
        // }
    }

    return new backgroundService();

})(Char);
