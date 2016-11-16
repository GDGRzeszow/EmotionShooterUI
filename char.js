window.Char = (function () {

    var char = function () {
        this.char = "";
        this.color = "#000000";
        this.position = {
            x : Math.round(Math.random() * window.innerWidth),
            y : Math.round(Math.random() * window.innerHeight),
        }
    }

    char.prototype.changeState = function () {
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        this.char = characters.charAt(Math.round(Math.random() * characters.length));

        // random kolor
    }

    char.prototype.changePosition = function () {
        
    }

})();
