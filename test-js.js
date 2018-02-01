var myLatLng = ("(-34.361576287484176, 150.2435302734375)").split("(")[1]
myLatLng = myLatLng.split(")")[0].split(" ").join("")
console.log(myLatLng)

var data = {"coord":{"lon":23.32,"lat":42.7},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"base":"stations","main":{"temp":279.15,"pressure":1013,"humidity":70,"temp_min":279.15,"temp_max":279.15},"visibility":8000,"wind":{"speed":0.5},"clouds":{"all":8},"dt":1517500800,"sys":{"type":1,"id":5444,"message":0.0035,"country":"BG","sunrise":1517463635,"sunset":1517499640},"id":727011,"name":"Sofia","cod":200}


console.log(data.main.temp-273.15)