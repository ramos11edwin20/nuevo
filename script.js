document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, options);
  });
  
  // Or with jQuery
  
  $(document).ready(function () {
    $(".carousel").carousel();
  });
  
  var instance = M.Carousel.init({
    fullWidth: true,
    indicators: false,
  });
  
  // Or with jQuery
  
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: false,
  });

  