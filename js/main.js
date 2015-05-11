$(document).ready(function() {
  //$('h1').funText(100, 'reverseCandy');
  console.log( $('.parallax').length ); // doesn't load outside of the loop, because it hasn't loaded the rest of the html/css yet

  //any var declared in here can't be accessed by the console outside of this loop. Make damned sure the variales you need are defined outside the on-load function.
  
  //parallax
  var moveBill = function () {
    //$('.parallax').css('background-position', $(window).scrollTop() * 0.5);
    //move bill at half the rate of the window scrolling, to the right
    $('.parallax').css('background-position-y', $(window).scrollTop() * -0.5);
  }
  $(window).on('scroll', moveBill);


  var bubbleMade = 0;
  var addBubble = function(event) {
    //console.log(event.pageX, event.pageY);
    var $bubble = $('<div class="bubble"></div>');
    var $spread = $('<div class="spread"></div>');
    var $bubbleRim = $('<div class="bubbleRim"></div>');
    var $bubbleFore = $('<div class="bubbleFore"></div>');

    var size = (Math.random() * (150)) + 75;
    var radX = (Math.random()-.5) * 150;
    var radY = (Math.random()-.5) * 150;
    // $bubble.css('top', event.pageY);
    // $bubble.css('left', event.pageX);

    var posY = event.pageY - (size/2) + radY;
    var posX = event.pageX - (size/2) + radX;
    var bigY = posY - 99;
    var bigX = posX - 99;
    
    $spread.css({
      top: posY + 17,
      left: posX + 17,
      width: size - 34,
      height: size - 34,
    });

    $bubble.css({
      top: posY,
      left: posX,
      width: size,
      height: size,
    });

    $bubbleRim.css({
      top: .035 * size,
      left: .035 * size,
      width: (0.85 * size),
      height: (0.85 * size),
    });

    $bubbleFore.css({
      top: .05 * size,
      left: .05 * size,
      width: (0.9 * size),
      height: (0.9 * size),
    });

    //the function to slow down the drops, and append them to the page in an inky way
    if ( bubbleMade % 9 === 0 ) {
      //$('body').append($bubble, $bubbleRim, $bubbleFore)
      $('body').append($bubble);
      $('.parallax').prepend($spread);
      $('.bubble').last().append($bubbleRim);
      $('.bubble').last().append($bubbleFore);
    }

    bubbleMade += 1;

    // $bubble.fadeOut(function () {
    //   $(this).remove();
    // });
    setTimeout(function () {
      $bubble.fadeOut( 2000, function () {
        $(this).remove();
      });
    }, 100)


    //change top and left to their respective values outside of the timout/animation function, then call them in so that the circles can expand correctly
    setTimeout(function () {
      $spread.animate( {height: '300px', width: '300px', top: bigY, left: bigX }, 8000, function () {
        $(this).remove();
      });
    }, 100)
    

  }
  $(window).on('mousemove',addBubble);

});