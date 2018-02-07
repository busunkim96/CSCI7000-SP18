/*
Script to handle gestures in gestures area

downX = 0
downY = 0

on mouse down:
	downX = current X position
	downY = current Y position

on mouse up:
	upX = current X position
	upY = current Y position

	if upX < downX:
		output "swipe left"
	else if upX > downX:
		output "swipe right"
	else if upX == downX:
		output "mouse up"
*/

downX = 0;
downY = 0;

$("#gesture_area").mousedown(function(event){
  document.getElementById('gesture_output').value = "mouse down";
  downX = event.pageX;
  downY = event.pageY;
})

$("#gesture_area").mouseup(function(event){
  upX = event.pageX;
  upY = event.pageY;

  if (upX < downX){
    document.getElementById('gesture_output').value = "swipe left";
  }

  else if (upX > downX){
    document.getElementById('gesture_output').value = "swipe right";
  }

  else{
    document.getElementById('gesture_output').value = "mouse up";
  }
})
