// Google Maps stuff
function myMap() {
  var centerLatLng = new google.maps.LatLng(10.4241718,-75.5493329);
  var mapProp= {
      center: centerLatLng,
      zoom: 15,
  };

  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var marker = new google.maps.Marker({
    position: centerLatLng,
    map: map,
    title: 'Hello World!'
  });

}

// <select> navigation
var navSelects = document.querySelectorAll('.navSelect');
navSelects.forEach(function(navSelect) {
  navSelect.addEventListener('change', function() {
    var selectedValue = navSelect.options[navSelect.selectedIndex].value;
    if (selectedValue) {
      console.log('You selected ' + selectedValue);
      document.location = selectedValue;
    } else {
      console.log('Oops, you can\'t go there yet!');
    }
  });
});

// image slider
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
