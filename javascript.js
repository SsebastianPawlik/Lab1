document.addEventListener("DOMContentLoaded", function() {
    var calendar = document.getElementById("calendar");
    var month = calendar.querySelector(".month");
    var toggleButton = document.getElementById("toggleButton");
  
    function toggleLayout() {
      calendar.classList.toggle("grid");
      calendar.classList.toggle("flex");
    }
  
    toggleButton.addEventListener("click", toggleLayout);
  
    month.addEventListener("click", toggleLayout);
  });
  