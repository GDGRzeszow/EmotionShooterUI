window.WebsocketService = (function () {

    var websocketService = function () {
        this.EVENT = {
            PHOTO: 'photo',
            INFO: 'info'
        }
    }

    websocketService.prototype.connect = function (url) {

        this.listeners = {};

        this.connection = new WebSocket(url);
        this.connection.onmessage = function (evt) {
            var data = JSON.parse(evt.data);
            if (data.processing) {
                this.event(this.EVENT.PHOTO, data);
            } else if (data.faceAnnotation[0]) {
                this.event(this.EVENT.INFO, data);
            }
        }.bind(this);

        this.connection.onopen = function () {
            setInterval(this.heartbeat.bind(this), 60000);
        }.bind(this);


    }

    websocketService.prototype.heartbeat = function () {
        // Interwał do podtrzymywania połączenia z serwerem
        this.connection.send("Heart beat!");
    }

    websocketService.prototype.on = function (eventName, callback) {
        this.listeners[eventName] = callback;
    }

    websocketService.prototype.event = function (event, data) {
        this.listeners[event](data)
    }

    return new websocketService();

})();
