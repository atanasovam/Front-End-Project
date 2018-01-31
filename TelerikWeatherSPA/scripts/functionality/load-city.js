/* globals data */
(function () {
    var createCityInfoBox = function (cityCurrClimat) {

        var $cityInfo = $("<div/>")
            .addClass("container")
            .append(
                $("<p/>")
                .addClass("temperature col-xs-6")
            )
            .append(
                $("<p/>")
                .addClass("wind col-xs-6")
            )
            .append(
                $("<p/>")
                .addClass("humidity col-xs-6")
            )
            .append(
                $("<p/>")
                .addClass("direct col-xs-6")
            )
            .append(
                $("<p/>")
                .addClass("pressure col-xs-6")
            )
            .append(
                $("<p/>")
                .addClass("cloud col-xs-6")
            )
            .append(
                $("<p/>")
                .addClass("weather col-xs-6")
            )
            .append(
                $("<p/>")
                .addClass("desc col-xs-6")
            )
            .append(
                $("<img/>")
            );

        (function () {
            //  var info = JSON.parse(cityCurrClimat);

            +cityCurrClimat["list"][0]["weather"][0]["icon"] + ".jpg";
            $cityInfo.find(".temperature")
                .html("Temperature: " + cityCurrClimat["list"][0]["main"]["temp_kf"] + "&deg;C");
            $cityInfo.find(".humidity")
                .html("Humidity: " + cityCurrClimat["list"][0]["main"]["humidity"] + "%");
            $cityInfo.find(".weather")
                .html("Weather: " + cityCurrClimat["list"][0]["weather"][0]["main"]);
            $cityInfo.find("img")
                .attr("src", "../../styles/images/" +
                    cityCurrClimat["list"][0]["weather"][0]["icon"] + ".png");
            $cityInfo.find(".pressure")
                .html("Pressure: " + cityCurrClimat["list"][0]["main"]["pressure"] + " hPa");
            $cityInfo.find(".wind")
                .html("Wind speed: " + cityCurrClimat["list"][0]["wind"]["speed"] + " m/s");
            $cityInfo.find(".direct")
                .html("Wind direction: " + cityCurrClimat["list"][0]["wind"]["deg"] + " degrees");
                $cityInfo.find(".cloud")
                .html("Cloudiness: " + cityCurrClimat["list"][0]["clouds"]["all"] + "%");
                $cityInfo.find(".desc")
                .html("Description: " + cityCurrClimat["list"][0]["weather"][0]["description"]);
        })();

        return $cityInfo;
    };

    $(function () {
        var currJSON = {
            "cod": "200",
            "message": 0.0029,
            "cnt": 37,
            "list": [{
                "dt": 1517302800,
                "main": {
                    "temp": 281.34,
                    "temp_min": 276.812,
                    "temp_max": 281.34,
                    "pressure": 940.85,
                    "sea_level": 1039.89,
                    "grnd_level": 940.85,
                    "humidity": 89,
                    "temp_kf": 4.53
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.51,
                    "deg": 228.501
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-01-30 09:00:00"
            }, {
                "dt": 1517313600,
                "main": {
                    "temp": 283.69,
                    "temp_min": 280.673,
                    "temp_max": 283.69,
                    "pressure": 941.12,
                    "sea_level": 1039.45,
                    "grnd_level": 941.12,
                    "humidity": 89,
                    "temp_kf": 3.02
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.69,
                    "deg": 294
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-01-30 12:00:00"
            }, {
                "dt": 1517324400,
                "main": {
                    "temp": 279.49,
                    "temp_min": 277.982,
                    "temp_max": 279.49,
                    "pressure": 941.99,
                    "sea_level": 1040.84,
                    "grnd_level": 941.99,
                    "humidity": 87,
                    "temp_kf": 1.51
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.66,
                    "deg": 279.504
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-01-30 15:00:00"
            }, {
                "dt": 1517335200,
                "main": {
                    "temp": 270.848,
                    "temp_min": 270.848,
                    "temp_max": 270.848,
                    "pressure": 943.39,
                    "sea_level": 1043.39,
                    "grnd_level": 943.39,
                    "humidity": 96,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.51,
                    "deg": 268.503
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-01-30 18:00:00"
            }, {
                "dt": 1517346000,
                "main": {
                    "temp": 267.271,
                    "temp_min": 267.271,
                    "temp_max": 267.271,
                    "pressure": 943.32,
                    "sea_level": 1044.07,
                    "grnd_level": 943.32,
                    "humidity": 92,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.12,
                    "deg": 255.003
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-01-30 21:00:00"
            }, {
                "dt": 1517356800,
                "main": {
                    "temp": 263.429,
                    "temp_min": 263.429,
                    "temp_max": 263.429,
                    "pressure": 942.68,
                    "sea_level": 1043.94,
                    "grnd_level": 942.68,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.51,
                    "deg": 262.003
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-01-31 00:00:00"
            }, {
                "dt": 1517367600,
                "main": {
                    "temp": 260.972,
                    "temp_min": 260.972,
                    "temp_max": 260.972,
                    "pressure": 941.91,
                    "sea_level": 1043.29,
                    "grnd_level": 941.91,
                    "humidity": 75,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.17,
                    "deg": 264.001
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-01-31 03:00:00"
            }, {
                "dt": 1517378400,
                "main": {
                    "temp": 259.946,
                    "temp_min": 259.946,
                    "temp_max": 259.946,
                    "pressure": 941.32,
                    "sea_level": 1042.87,
                    "grnd_level": 941.32,
                    "humidity": 75,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 0.96,
                    "deg": 240.004
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-01-31 06:00:00"
            }, {
                "dt": 1517389200,
                "main": {
                    "temp": 274.435,
                    "temp_min": 274.435,
                    "temp_max": 274.435,
                    "pressure": 940.59,
                    "sea_level": 1041.2,
                    "grnd_level": 940.59,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.77,
                    "deg": 210.504
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-01-31 09:00:00"
            }, {
                "dt": 1517400000,
                "main": {
                    "temp": 278.572,
                    "temp_min": 278.572,
                    "temp_max": 278.572,
                    "pressure": 938.64,
                    "sea_level": 1037.79,
                    "grnd_level": 938.64,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.47,
                    "deg": 226.504
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-01-31 12:00:00"
            }, {
                "dt": 1517410800,
                "main": {
                    "temp": 275.618,
                    "temp_min": 275.618,
                    "temp_max": 275.618,
                    "pressure": 937.08,
                    "sea_level": 1036.33,
                    "grnd_level": 937.08,
                    "humidity": 96,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.06,
                    "deg": 163.5
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-01-31 15:00:00"
            }, {
                "dt": 1517421600,
                "main": {
                    "temp": 266.625,
                    "temp_min": 266.625,
                    "temp_max": 266.625,
                    "pressure": 936.17,
                    "sea_level": 1036.31,
                    "grnd_level": 936.17,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 1.11,
                    "deg": 164.5
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-01-31 18:00:00"
            }, {
                "dt": 1517432400,
                "main": {
                    "temp": 264.584,
                    "temp_min": 264.584,
                    "temp_max": 264.584,
                    "pressure": 935.3,
                    "sea_level": 1035.9,
                    "grnd_level": 935.3,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }],
                "clouds": {
                    "all": 12
                },
                "wind": {
                    "speed": 1.13,
                    "deg": 167.002
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-01-31 21:00:00"
            }, {
                "dt": 1517443200,
                "main": {
                    "temp": 262.279,
                    "temp_min": 262.279,
                    "temp_max": 262.279,
                    "pressure": 934.03,
                    "sea_level": 1034.87,
                    "grnd_level": 934.03,
                    "humidity": 78,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.12,
                    "deg": 175.5
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-02-01 00:00:00"
            }, {
                "dt": 1517454000,
                "main": {
                    "temp": 261.286,
                    "temp_min": 261.286,
                    "temp_max": 261.286,
                    "pressure": 932.5,
                    "sea_level": 1033.56,
                    "grnd_level": 932.5,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.17,
                    "deg": 198.002
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-02-01 03:00:00"
            }, {
                "dt": 1517464800,
                "main": {
                    "temp": 262.032,
                    "temp_min": 262.032,
                    "temp_max": 262.032,
                    "pressure": 931.98,
                    "sea_level": 1033.03,
                    "grnd_level": 931.98,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 1.16,
                    "deg": 205.003
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-02-01 06:00:00"
            }, {
                "dt": 1517475600,
                "main": {
                    "temp": 272.498,
                    "temp_min": 272.498,
                    "temp_max": 272.498,
                    "pressure": 931.45,
                    "sea_level": 1031.38,
                    "grnd_level": 931.45,
                    "humidity": 94,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 1.66,
                    "deg": 222.002
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-02-01 09:00:00"
            }, {
                "dt": 1517486400,
                "main": {
                    "temp": 276.962,
                    "temp_min": 276.962,
                    "temp_max": 276.962,
                    "pressure": 930.13,
                    "sea_level": 1028.37,
                    "grnd_level": 930.13,
                    "humidity": 90,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.62,
                    "deg": 243.501
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-02-01 12:00:00"
            }, {
                "dt": 1517497200,
                "main": {
                    "temp": 275.333,
                    "temp_min": 275.333,
                    "temp_max": 275.333,
                    "pressure": 928.94,
                    "sea_level": 1027.12,
                    "grnd_level": 928.94,
                    "humidity": 93,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.42,
                    "deg": 225.503
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-02-01 15:00:00"
            }, {
                "dt": 1517508000,
                "main": {
                    "temp": 266.149,
                    "temp_min": 266.149,
                    "temp_max": 266.149,
                    "pressure": 928.56,
                    "sea_level": 1027.44,
                    "grnd_level": 928.56,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.52,
                    "deg": 209.503
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-02-01 18:00:00"
            }, {
                "dt": 1517518800,
                "main": {
                    "temp": 264.157,
                    "temp_min": 264.157,
                    "temp_max": 264.157,
                    "pressure": 928.5,
                    "sea_level": 1027.62,
                    "grnd_level": 928.5,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }],
                "clouds": {
                    "all": 32
                },
                "wind": {
                    "speed": 1.36,
                    "deg": 204.508
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-02-01 21:00:00"
            }, {
                "dt": 1517529600,
                "main": {
                    "temp": 265.34,
                    "temp_min": 265.34,
                    "temp_max": 265.34,
                    "pressure": 927.98,
                    "sea_level": 1027.21,
                    "grnd_level": 927.98,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 1.46,
                    "deg": 202.001
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-02-02 00:00:00"
            }, {
                "dt": 1517540400,
                "main": {
                    "temp": 267.682,
                    "temp_min": 267.682,
                    "temp_max": 267.682,
                    "pressure": 927.57,
                    "sea_level": 1026.6,
                    "grnd_level": 927.57,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 1.92,
                    "deg": 202
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-02-02 03:00:00"
            }, {
                "dt": 1517551200,
                "main": {
                    "temp": 270.312,
                    "temp_min": 270.312,
                    "temp_max": 270.312,
                    "pressure": 927.42,
                    "sea_level": 1026.4,
                    "grnd_level": 927.42,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 2.86,
                    "deg": 204.502
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-02-02 06:00:00"
            }, {
                "dt": 1517562000,
                "main": {
                    "temp": 278.151,
                    "temp_min": 278.151,
                    "temp_max": 278.151,
                    "pressure": 926.88,
                    "sea_level": 1024.8,
                    "grnd_level": 926.88,
                    "humidity": 78,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }],
                "clouds": {
                    "all": 56
                },
                "wind": {
                    "speed": 3.92,
                    "deg": 205.505
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-02-02 09:00:00"
            }, {
                "dt": 1517572800,
                "main": {
                    "temp": 281.229,
                    "temp_min": 281.229,
                    "temp_max": 281.229,
                    "pressure": 924.6,
                    "sea_level": 1021.56,
                    "grnd_level": 924.6,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }],
                "clouds": {
                    "all": 36
                },
                "wind": {
                    "speed": 5.11,
                    "deg": 208
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-02-02 12:00:00"
            }, {
                "dt": 1517583600,
                "main": {
                    "temp": 280.441,
                    "temp_min": 280.441,
                    "temp_max": 280.441,
                    "pressure": 923.18,
                    "sea_level": 1020.24,
                    "grnd_level": 923.18,
                    "humidity": 78,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 4.91,
                    "deg": 210.5
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-02-02 15:00:00"
            }, {
                "dt": 1517594400,
                "main": {
                    "temp": 278.557,
                    "temp_min": 278.557,
                    "temp_max": 278.557,
                    "pressure": 921.94,
                    "sea_level": 1019.13,
                    "grnd_level": 921.94,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }],
                "clouds": {
                    "all": 44
                },
                "wind": {
                    "speed": 4.26,
                    "deg": 198.504
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-02-02 18:00:00"
            }, {
                "dt": 1517605200,
                "main": {
                    "temp": 279.291,
                    "temp_min": 279.291,
                    "temp_max": 279.291,
                    "pressure": 919.83,
                    "sea_level": 1017.02,
                    "grnd_level": 919.83,
                    "humidity": 78,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 5.11,
                    "deg": 199.501
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-02-02 21:00:00"
            }, {
                "dt": 1517616000,
                "main": {
                    "temp": 278.806,
                    "temp_min": 278.806,
                    "temp_max": 278.806,
                    "pressure": 918.03,
                    "sea_level": 1014.78,
                    "grnd_level": 918.03,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }],
                "clouds": {
                    "all": 44
                },
                "wind": {
                    "speed": 4.12,
                    "deg": 195.001
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-02-03 00:00:00"
            }, {
                "dt": 1517626800,
                "main": {
                    "temp": 278.391,
                    "temp_min": 278.391,
                    "temp_max": 278.391,
                    "pressure": 916.19,
                    "sea_level": 1012.62,
                    "grnd_level": 916.19,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }],
                "clouds": {
                    "all": 36
                },
                "wind": {
                    "speed": 4.36,
                    "deg": 199.5
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-02-03 03:00:00"
            }, {
                "dt": 1517637600,
                "main": {
                    "temp": 276.142,
                    "temp_min": 276.142,
                    "temp_max": 276.142,
                    "pressure": 915.68,
                    "sea_level": 1012.23,
                    "grnd_level": 915.68,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 1.76,
                    "deg": 204.501
                },
                "rain": {
                    "3h": 0.05
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-02-03 06:00:00"
            }, {
                "dt": 1517648400,
                "main": {
                    "temp": 279.038,
                    "temp_min": 279.038,
                    "temp_max": 279.038,
                    "pressure": 914.99,
                    "sea_level": 1011.92,
                    "grnd_level": 914.99,
                    "humidity": 97,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.22,
                    "deg": 350.001
                },
                "rain": {
                    "3h": 0.4875
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-02-03 09:00:00"
            }, {
                "dt": 1517659200,
                "main": {
                    "temp": 276.746,
                    "temp_min": 276.746,
                    "temp_max": 276.746,
                    "pressure": 914.17,
                    "sea_level": 1011.44,
                    "grnd_level": 914.17,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.72,
                    "deg": 323.501
                },
                "rain": {
                    "3h": 4.7125
                },
                "snow": {
                    "3h": 0.265
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-02-03 12:00:00"
            }, {
                "dt": 1517670000,
                "main": {
                    "temp": 273.534,
                    "temp_min": 273.534,
                    "temp_max": 273.534,
                    "pressure": 915.52,
                    "sea_level": 1013.2,
                    "grnd_level": 915.52,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.87,
                    "deg": 296.507
                },
                "rain": {
                    "3h": 2.9625
                },
                "snow": {
                    "3h": 6.115
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-02-03 15:00:00"
            }, {
                "dt": 1517680800,
                "main": {
                    "temp": 272.029,
                    "temp_min": 272.029,
                    "temp_max": 272.029,
                    "pressure": 915.63,
                    "sea_level": 1014.04,
                    "grnd_level": 915.63,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 601,
                    "main": "Snow",
                    "description": "snow",
                    "icon": "13n"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.92,
                    "deg": 276.508
                },
                "rain": {},
                "snow": {
                    "3h": 1.585
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-02-03 18:00:00"
            }, {
                "dt": 1517691600,
                "main": {
                    "temp": 270.453,
                    "temp_min": 270.453,
                    "temp_max": 270.453,
                    "pressure": 915.37,
                    "sea_level": 1014.01,
                    "grnd_level": 915.37,
                    "humidity": 99,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 601,
                    "main": "Snow",
                    "description": "snow",
                    "icon": "13n"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 3.3,
                    "deg": 277.501
                },
                "rain": {},
                "snow": {
                    "3h": 1.725
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-02-03 21:00:00"
            }],
            "city": {
                "id": 727011,
                "name": "Sofia",
                "coord": {
                    "lat": 42.6975,
                    "lon": 23.3242
                },
                "country": "BG"
            }
        };

        (function () {
            var $cityInfoBox = createCityInfoBox(currJSON);
            $("#curr-weather").html($cityInfoBox);
        })();
    });

})();