(function (BackgroundService, WebsocketService, DataViewService) {

    window.addEventListener("keyup", function (event) {
        console.log(event.keyCode);
        if (event.keyCode == 27) {
            DataViewService.setDefault();
        }
    })

    BackgroundService.init("background");

    WebsocketService.connect('ws://localhost:8080/api/ws');

    WebsocketService.on(WebsocketService.EVENT.PHOTO, function (data) {
        BackgroundService.start();
        DataViewService.showLoader();
    });

    WebsocketService.on(WebsocketService.EVENT.INFO, function (data) {
        DataViewService.setImage(data.photoUrl);
        setTimeout(function () {
            BackgroundService.stop();
        }, 5000);
        setTimeout(function () {
            DataViewService.setInfo(data);
        }, 8000);
    });

    //   setTimeout(function () {
    //   	WebsocketService.connection.send(JSON.stringify({
    //   		photoUrl : "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-141092249-1500x1000.jpg"
    //   	}));
    //   }, 1500);

    //   setTimeout(function () {
    //   	WebsocketService.connection.send(JSON.stringify({
    //   		photoUrl : "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-141092249-1500x1000.jpg"
    //   	}));
    //   }, 20000);

    //   setTimeout(function () {
    //   	WebsocketService.connection.send(JSON.stringify({

    // "faceAnnotation": [
    //   {
    //     "angerLikelihood": "UNLIKELY",
    //     "blurredLikelihood": "VERY_UNLIKELY",
    //     "boundingPoly": {
    //       "vertices": [
    //         {
    //           "x": 220,
    //           "y": 472
    //         },
    //         {
    //           "x": 1577,
    //           "y": 472
    //         },
    //         {
    //           "x": 1577,
    //           "y": 2051
    //         },
    //         {
    //           "x": 220,
    //           "y": 2051
    //         }
    //       ]
    //     },
    //     "detectionConfidence": 0.99712044,
    //     "fdBoundingPoly": {
    //       "vertices": [
    //         {
    //           "x": 458,
    //           "y": 886
    //         },
    //         {
    //           "x": 1438,
    //           "y": 886
    //         },
    //         {
    //           "x": 1438,
    //           "y": 1866
    //         },
    //         {
    //           "x": 458,
    //           "y": 1866
    //         }
    //       ]
    //     },
    //     "headwearLikelihood": "VERY_UNLIKELY",
    //     "joyLikelihood": "VERY_UNLIKELY",
    //     "landmarkingConfidence": 0.64483845,
    //     "landmarks": [
    //       {
    //         "position": {
    //           "x": 757.2645,
    //           "y": 1191.4395,
    //           "z": -0.0032785411
    //         },
    //         "type": "LEFT_EYE"
    //       },
    //       {
    //         "position": {
    //           "x": 1145.7605,
    //           "y": 1203.8054,
    //           "z": 50.342476
    //         },
    //         "type": "RIGHT_EYE"
    //       },
    //       {
    //         "position": {
    //           "x": 615.9835,
    //           "y": 1088.7119,
    //           "z": 16.634348
    //         },
    //         "type": "LEFT_OF_LEFT_EYEBROW"
    //       },
    //       {
    //         "position": {
    //           "x": 872.7335,
    //           "y": 1101.899,
    //           "z": -70.15628
    //         },
    //         "type": "RIGHT_OF_LEFT_EYEBROW"
    //       },
    //       {
    //         "position": {
    //           "x": 1070.3147,
    //           "y": 1110.2664,
    //           "z": -44.794785
    //         },
    //         "type": "LEFT_OF_RIGHT_EYEBROW"
    //       },
    //       {
    //         "position": {
    //           "x": 1296.7721,
    //           "y": 1117.5413,
    //           "z": 103.88299
    //         },
    //         "type": "RIGHT_OF_RIGHT_EYEBROW"
    //       },
    //       {
    //         "position": {
    //           "x": 967.23035,
    //           "y": 1182.3767,
    //           "z": -61.293915
    //         },
    //         "type": "MIDPOINT_BETWEEN_EYES"
    //       },
    //       {
    //         "position": {
    //           "x": 984.87524,
    //           "y": 1424.6199,
    //           "z": -171.74231
    //         },
    //         "type": "NOSE_TIP"
    //       },
    //       {
    //         "position": {
    //           "x": 953.8969,
    //           "y": 1595.2361,
    //           "z": -70.07626
    //         },
    //         "type": "UPPER_LIP"
    //       },
    //       {
    //         "position": {
    //           "x": 930.97,
    //           "y": 1699.5195,
    //           "z": -37.919594
    //         },
    //         "type": "LOWER_LIP"
    //       },
    //       {
    //         "position": {
    //           "x": 746.39874,
    //           "y": 1621.6204,
    //           "z": 26.732582
    //         },
    //         "type": "MOUTH_LEFT"
    //       },
    //       {
    //         "position": {
    //           "x": 1119.8848,
    //           "y": 1639.6023,
    //           "z": 68.064354
    //         },
    //         "type": "MOUTH_RIGHT"
    //       },
    //       {
    //         "position": {
    //           "x": 937.6926,
    //           "y": 1636.4845,
    //           "z": -38.469666
    //         },
    //         "type": "MOUTH_CENTER"
    //       },
    //       {
    //         "position": {
    //           "x": 1084.4456,
    //           "y": 1472.3474,
    //           "z": 6.8698096
    //         },
    //         "type": "NOSE_BOTTOM_RIGHT"
    //       },
    //       {
    //         "position": {
    //           "x": 840.9779,
    //           "y": 1465.0449,
    //           "z": -27.513975
    //         },
    //         "type": "NOSE_BOTTOM_LEFT"
    //       },
    //       {
    //         "position": {
    //           "x": 969.7209,
    //           "y": 1497.3252,
    //           "z": -75.7327
    //         },
    //         "type": "NOSE_BOTTOM_CENTER"
    //       },
    //       {
    //         "position": {
    //           "x": 757.7943,
    //           "y": 1165.4509,
    //           "z": -28.894354
    //         },
    //         "type": "LEFT_EYE_TOP_BOUNDARY"
    //       },
    //       {
    //         "position": {
    //           "x": 833.8413,
    //           "y": 1198.4583,
    //           "z": 11.745871
    //         },
    //         "type": "LEFT_EYE_RIGHT_CORNER"
    //       },
    //       {
    //         "position": {
    //           "x": 750.99927,
    //           "y": 1222.6003,
    //           "z": -2.8635929
    //         },
    //         "type": "LEFT_EYE_BOTTOM_BOUNDARY"
    //       },
    //       {
    //         "position": {
    //           "x": 666.88464,
    //           "y": 1189.6958,
    //           "z": 26.817755
    //         },
    //         "type": "LEFT_EYE_LEFT_CORNER"
    //       },
    //       {
    //         "position": {
    //           "x": 748.2221,
    //           "y": 1192.8802,
    //           "z": -11.995442
    //         },
    //         "type": "LEFT_EYE_PUPIL"
    //       },
    //       {
    //         "position": {
    //           "x": 1164.804,
    //           "y": 1182.5071,
    //           "z": 23.376041
    //         },
    //         "type": "RIGHT_EYE_TOP_BOUNDARY"
    //       },
    //       {
    //         "position": {
    //           "x": 1238.502,
    //           "y": 1210.0514,
    //           "z": 100.29304
    //         },
    //         "type": "RIGHT_EYE_RIGHT_CORNER"
    //       },
    //       {
    //         "position": {
    //           "x": 1154.3931,
    //           "y": 1236.5684,
    //           "z": 48.9677
    //         },
    //         "type": "RIGHT_EYE_BOTTOM_BOUNDARY"
    //       },
    //       {
    //         "position": {
    //           "x": 1075.3716,
    //           "y": 1211.5941,
    //           "z": 42.77354
    //         },
    //         "type": "RIGHT_EYE_LEFT_CORNER"
    //       },
    //       {
    //         "position": {
    //           "x": 1166.2931,
    //           "y": 1210.3699,
    //           "z": 41.435486
    //         },
    //         "type": "RIGHT_EYE_PUPIL"
    //       },
    //       {
    //         "position": {
    //           "x": 749.1167,
    //           "y": 1046.2056,
    //           "z": -56.156227
    //         },
    //         "type": "LEFT_EYEBROW_UPPER_MIDPOINT"
    //       },
    //       {
    //         "position": {
    //           "x": 1190.9885,
    //           "y": 1064.8555,
    //           "z": 0.4921171
    //         },
    //         "type": "RIGHT_EYEBROW_UPPER_MIDPOINT"
    //       },
    //       {
    //         "position": {
    //           "x": 420.96048,
    //           "y": 1362.2004,
    //           "z": 477.12128
    //         },
    //         "type": "LEFT_EAR_TRAGION"
    //       },
    //       {
    //         "position": {
    //           "x": 1346.6228,
    //           "y": 1401.5234,
    //           "z": 595.98303
    //         },
    //         "type": "RIGHT_EAR_TRAGION"
    //       },
    //       {
    //         "position": {
    //           "x": 974.0512,
    //           "y": 1101.509,
    //           "z": -73.31541
    //         },
    //         "type": "FOREHEAD_GLABELLA"
    //       },
    //       {
    //         "position": {
    //           "x": 927.33716,
    //           "y": 1899.4395,
    //           "z": 27.049164
    //         },
    //         "type": "CHIN_GNATHION"
    //       },
    //       {
    //         "position": {
    //           "x": 474.65808,
    //           "y": 1633.0153,
    //           "z": 326.0429
    //         },
    //         "type": "CHIN_LEFT_GONION"
    //       },
    //       {
    //         "position": {
    //           "x": 1310.7874,
    //           "y": 1668.7554,
    //           "z": 433.29672
    //         },
    //         "type": "CHIN_RIGHT_GONION"
    //       }
    //     ],
    //     "panAngle": 7.308705,
    //     "rollAngle": 2.6618774,
    //     "sorrowLikelihood": "VERY_UNLIKELY",
    //     "surpriseLikelihood": "VERY_UNLIKELY",
    //     "tiltAngle": -1.9719617,
    //     "underExposedLikelihood": "VERY_UNLIKELY"
    //   }]}));
    //   }, 2000);

})(BackgroundService, WebsocketService, DataViewService);
