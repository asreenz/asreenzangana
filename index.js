var qDuration=600; 
var qCounter=0; 
function quake() 
{ 
  // the horizontal displacement 
  var deltaX=1; 
  // make sure the browser support the moveBy method 
  if (window.moveBy) 
  { 
    for (qCounter=0; qCounter<qDuration; qCounter++) 
    { 
      // shake left 
      if ((qCounter%4)==0) 
      { 
        window.moveBy(deltaX, 0); 
      } 
      // shake right 
      else if ((qCounter%4)==2) 
      { 
        window.moveBy(-deltaX, 0); 
      } 
      // speed up or slow down every X cycles 
      if ((qCounter%30)==0) 
      { 
        // speed up halfway 
        if (qCounter<qDuration/2) 
        { 
          deltaX++; 
        } 
        // slow down after halfway of the duration 
        else 
        { 
          deltaX--; 
        } 
      } 
    } 
    } 
} 
// SHAKE AN IMAGE OR ELEMENT HEHEHEEHEHEHEH

var shakingElements = [];

var shake = function (element, magnitude = 16, angular = false) {
  //First set the initial tilt angle to the right (+1) 
  var tiltAngle = 1;

  //A counter to count the number of shakes
  var counter = 1;

  //The total number of shakes (there will be 1 shake per frame)
  var numberOfShakes = 15;

  //Capture the element's position and angle so you can
  //restore them after the shaking has finished
  var startX = 0,
      startY = 0,
      startAngle = 0;

  // Divide the magnitude into 10 units so that you can 
  // reduce the amount of shake by 10 percent each frame
  var magnitudeUnit = magnitude / numberOfShakes;

  //The `randomInt` helper function
  var randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  //Add the element to the `shakingElements` array if it
  //isn't already there
  if(shakingElements.indexOf(element) === -1) {
    //console.log("added")
    shakingElements.push(element);

    //Add an `updateShake` method to the element.
    //The `updateShake` method will be called each frame
    //in the game loop. The shake effect type can be either
    //up and down (x/y shaking) or angular (rotational shaking).
    if(angular) {
      angularShake();
    } else {
      upAndDownShake();
    }
  }

  //The `upAndDownShake` function
  function upAndDownShake() {

    //Shake the element while the `counter` is less than 
    //the `numberOfShakes`
    if (counter < numberOfShakes) {

      //Reset the element's position at the start of each shake
      element.style.transform = 'translate(' + startX + 'px, ' + startY + 'px)';

      //Reduce the magnitude
      magnitude -= magnitudeUnit;

      //Randomly change the element's position
      var randomX = randomInt(-magnitude, magnitude);
      var randomY = randomInt(-magnitude, magnitude);

      element.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';

      //Add 1 to the counter
      counter += 1;

      requestAnimationFrame(upAndDownShake);
    }

    //When the shaking is finished, restore the element to its original 
    //position and remove it from the `shakingElements` array
    if (counter >= numberOfShakes) {
      element.style.transform = 'translate(' + startX + ', ' + startY + ')';
      shakingElements.splice(shakingElements.indexOf(element), 1);
    }
  }

  //The `angularShake` function
  function angularShake() {
    if (counter < numberOfShakes) {
      console.log(tiltAngle);
      //Reset the element's rotation
      element.style.transform = 'rotate(' + startAngle + 'deg)';

      //Reduce the magnitude
      magnitude -= magnitudeUnit;

      //Rotate the element left or right, depending on the direction,
      //by an amount in radians that matches the magnitude
      var angle = Number(magnitude * tiltAngle).toFixed(2);
      console.log(angle);
      element.style.transform = 'rotate(' + angle + 'deg)';
      counter += 1;

      //Reverse the tilt angle so that the element is tilted
      //in the opposite direction for the next shake
      tiltAngle *= -1;

      requestAnimationFrame(angularShake);
    }

    //When the shaking is finished, reset the element's angle and
    //remove it from the `shakingElements` array
    if (counter >= numberOfShakes) {
      element.style.transform = 'rotate(' + startAngle + 'deg)';
      shakingElements.splice(shakingElements.indexOf(element), 1);
      //console.log("removed")
    }
  }

};

document.querySelector('#me-home').addEventListener('mouseenter', (e) => {
  shake(e.currentTarget);
});





// CHANGE COLOR OF BACKGROUND WHEN HOVERING OVER ELEMENT EEEEEE

document.getElementById('me-home').addEventListener('mouseover', changeColor);

function changeColor() {
    document.body.style.backgroundColor = "red";
    return false;
}
document.getElementById('me-home').addEventListener('mouseleave', changeColorBack);

function changeColorBack() {
    document.body.style.backgroundColor = "#2E01EE";
    return false;
}


$(".nav-about").on({
    mouseenter: function () {
        $(".nav-about").css("font-size", "4rem");
    },
    mouseleave: function () {
        $(".nav-about").css("font-size", "1rem");
    }
});
$(".nav-work").on({
    mouseenter: function () {
        $(".nav-work").css("font-size", "4rem");
    },
    mouseleave: function () {
        $(".nav-work").css("font-size", "1rem");
    }
});
$(".nav-play").on({
    mouseenter: function () {
        $(".nav-play").css("font-size", "4rem");
    },
    mouseleave: function () {
        $(".nav-play").css("font-size", "1rem");
    }
});

var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) { $('video', this).get(0).play(); }
function hideVideo(e) { $('video', this).get(0).pause(); }