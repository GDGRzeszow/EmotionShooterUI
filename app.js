(function (BackgroundService, WebsocketService, DataViewService) {

    BackgroundService.init("background");

    WebsocketService.on("image", function (data) {
        DataView.setImage(data);
        BackgroundService.stop("background");
    });

    WebsocketService.on("info", function (data) {
        DataView.setInfo(data.photoUrl);
        BackgroundService.start("background");
    });

})(BackgroundService, WebsocketService, DataViewService);
