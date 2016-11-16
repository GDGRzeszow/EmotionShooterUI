window.Char = (function () {

    var char = function () {
        this.char = "";
        this.color = "#000000";
        this.position = {
            x : Math.random() * window.innerWidth,
            y : Math.random() * window.innerHeight,
        }
        this.fontSize = 5 + Math.round(20 * Math.max(Math.abs(this.position.x - window.innerWidth / 2) / (window.innerWidth / 2), Math.abs(this.position.y - window.innerHeight / 2) / (window.innerHeight / 2)));
        this.changeStateSpeed = 100 + Math.floor(Math.random() * 500);
        this.speedFactor = 1;

        this.changeStateLoop();

    }

    char.prototype.changeStateLoop = function () {
        setTimeout(function () {
            this.changeStateLoop();
            this.changeState();
        }.bind(this), this.changeStateSpeed * this.speedFactor);
    }

    char.prototype.changeState = function () {
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        this.char = characters.charAt(Math.round(Math.random() * characters.length));

        var colors = [
            "#3369E8",
            "#D50F25",
            "#EEB211",
            "#009925"
        ];
        this.color = colors[Math.round(Math.random() * colors.length)];
    }

    char.prototype.changePosition = function () {
        if(this.position.x < -10 || this.position.x > window.innerWidth + 10 || this.position.y < -10 || this.position.y > window.innerHeight + 10) {
            this.position.x = Math.random()*(window.innerWidth);
            this.position.y = Math.random()*(window.innerHeight);
        } else {
            this.position.x = this.position.x + (this.position.x - window.innerWidth / 2) * (0.003 * this.speedFactor);
            this.position.y = this.position.y + (this.position.y - window.innerHeight / 2) * (0.003 * this.speedFactor);
        }

        this.fontSize = 5 + Math.round(30 * Math.max(Math.abs(this.position.x - window.innerWidth / 2) / (window.innerWidth / 2), Math.abs(this.position.y - window.innerHeight / 2) / (window.innerHeight / 2)));
    }

    return char;

})();
