
let citrusArray,nutArray = []

$('.treeType').on('click', selected);

function selected(){
    $(this).toggleClass('selected');


}
function initMap(){
  var options = {
    zoom:8,
    center:{lat:42,lng:70}
  }

  var map = new
  google.maps.Map(document.getElementById('map'), options);
}
// api
// async defer src=""
// learn api's for google maps /// googleApi vs programmableWeb
