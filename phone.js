$(document).ready(function () {
  $("#cotent_dialer").show();
  $("#content_list").hide();
  $("#content_add_contact").hide();
  document.getElementById("tab1").style.backgroundColor = "white";
  document.getElementById("tab2").style.backgroundColor = "";
  document.getElementById("tab3").style.backgroundColor = "";
})

$("#tab1").click(function(){
  $("#content_dialer").show();
  $("#content_list").hide();
  $("#content_add_contact").hide();
  document.getElementById("tab1").style.backgroundColor = "white";
  document.getElementById("tab2").style.backgroundColor = "";
  document.getElementById("tab3").style.backgroundColor = "";

})

$("#tab2").click(function(){
  $("#content_dialer").hide();
  $("#content_list").show();
  $("#content_add_contact").hide();
  document.getElementById("tab1").style.backgroundColor = "";
  document.getElementById("tab2").style.backgroundColor = "white";
  document.getElementById("tab3").style.backgroundColor = "";

})

$("#tab3").click(function(){
  $("#content_dialer").hide();
  $("#content_list").hide();
  $("#content_add_contact").show();
  document.getElementById("tab1").style.backgroundColor = "";
  document.getElementById("tab2").style.backgroundColor = "";
  document.getElementById("tab3").style.backgroundColor = "white";
})


$("#dialer_1").click(function(){
  document.getElementById('dialer').value = document.getElementById('dialer').value + "1";
})

$("#dialer_2").click(function(){
  document.getElementById('dialer').value = document.getElementById('dialer').value + "2";
})

$("#dialer_3").click(function(){
  document.getElementById('dialer').value = document.getElementById('dialer').value + "3";
})

$("#dialer_4").click(function(){
  document.getElementById('dialer').value = document.getElementById('dialer').value + "4";
})

$("#dialer_5").click(function(){
  document.getElementById('dialer').value = document.getElementById('dialer').value + "5";
})

$("#dialer_6").click(function(){
  document.getElementById('dialer').value = document.getElementById('dialer').value + "6";
})

$("#dialer_7").click(function(){
  document.getElementById('dialer').value = document.getElementById('dialer').value + "7";
})

$("#dialer_8").click(function(){
  document.getElementById('dialer').value = document.getElementById('dialer').value + "8";
})

$("#dialer_9").click(function(){
  document.getElementById('dialer').value = document.getElementById('dialer').value + "9";
})

$("#dialer_star").click(function(){
  document.getElementById('dialer').value = document.getElementById('dialer').value.concat("*");
})

$("#dialer_0").click(function(){
  document.getElementById('dialer').value = document.getElementById('dialer').value + "0";
})

$("#dialer_pound").click(function(){
  document.getElementById('dialer').value = document.getElementById('dialer').value.concat("#");
})

$("#dialer_clear").click(function(){
  document.getElementById('dialer').value = "";
})
