$(document).ready(function() {
    $("#slider-range-min").slider({
      range: "min",
      step: 100,
      value: 1200,
      min: 0,
      max: 150000,
      slide: function(event, ui) {
        $("#amount").val("$" + ui.value);
      },
      change: function(event,ui) {
        if (ui.value === 0) {
          $("#amount").val("Todavía no lo decido");
        } else if (ui.value === 150000) {
          $("#amount").val("$" + "150000 o más");
        } else {
          $("#amount").val("$" + $("#slider-range-min").slider("value"));
        }
      }
    });
    $("#amount").val("$" + $("#slider-range-min").slider("value"));
  
  });
  
  $(document).ready(function() {
  
    // -- autosize init --
  
    autosize($('textarea'));
  
  });