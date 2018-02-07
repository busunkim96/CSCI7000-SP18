$(document).ready(function () {
  $("#cotent_dialer").show();
  $("#content_list").hide();
  $("#content_add_contact").hide();
  $("#content_test_gestures").hide();
  document.getElementById("tab1").style.backgroundColor = "white";
  document.getElementById("tab2").style.backgroundColor = "";
  document.getElementById("tab3").style.backgroundColor = "";
  document.getElementById("tab4").style.backgroundColor = "";
})

$("#tab1").click(function(){
  $("#content_dialer").show();
  $("#content_list").hide();
  $("#content_add_contact").hide();
  $("#content_test_gestures").hide();
  document.getElementById("tab1").style.backgroundColor = "white";
  document.getElementById("tab2").style.backgroundColor = "";
  document.getElementById("tab3").style.backgroundColor = "";
  document.getElementById("tab4").style.backgroundColor = "";

})

$("#tab2").click(function(){
  $("#content_dialer").hide();
  $("#content_list").show();
  $("#content_add_contact").hide();
  $("#content_test_gestures").hide();
  document.getElementById("tab1").style.backgroundColor = "";
  document.getElementById("tab2").style.backgroundColor = "white";
  document.getElementById("tab3").style.backgroundColor = "";
  document.getElementById("tab4").style.backgroundColor = "";

})

$("#tab3").click(function(){
  $("#content_dialer").hide();
  $("#content_list").hide();
  $("#content_add_contact").show();
  $("#content_test_gestures").hide();
  document.getElementById("tab1").style.backgroundColor = "";
  document.getElementById("tab2").style.backgroundColor = "";
  document.getElementById("tab3").style.backgroundColor = "white";
  document.getElementById("tab4").style.backgroundColor = "";
})

$("#tab4").click(function(){
  $("#content_dialer").hide();
  $("#content_list").hide();
  $("#content_add_contact").hide();
  $("#content_test_gestures").show();
  document.getElementById("tab1").style.backgroundColor = "";
  document.getElementById("tab2").style.backgroundColor = "";
  document.getElementById("tab3").style.backgroundColor = "";
  document.getElementById("tab4").style.backgroundColor = "white";
})


// https://stackoverflow.com/questions/1402698/binding-arrow-keys-in-js-jquery
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left

        break;

        case 39: // right
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
