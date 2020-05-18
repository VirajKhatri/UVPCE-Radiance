function myMap() 
	{
	var uluru = {lat: 23.528486, lng: 72.458511};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
	}