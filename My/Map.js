function myMap() 
	{
	var mapOptions = {
		center: new google.maps.LatLng(23.528486, 72.458511),
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.HYBRID
		}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
	var marker = new google.maps.Marker(
	{
		position: new google.maps.LatLan(23.528486, 72.458511),
		map: myMap,
		title: "U. V. Patel College of Engineering"
	});
	google.maps.event.addDomListener(window, 'load', myMap);
	}