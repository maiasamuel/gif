var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'http://media2.giphy.com/media/ypqHf6pQ5kQEg/giphy.gif';
imgArray[1] = new Image();
imgArray[1].src = 'http://3.bp.blogspot.com/-L3vguDpFoOw/UbA1RoVy-VI/AAAAAAAACn0/GBlLJadWD3Q/s1600/28.+Hot+Water.gif';

imgArray[2] = new Image();
imgArray[2].src = 'http://i.imgur.com/WdD1aLZ.gif';

imgArray[3] = new Image();
imgArray[3].src = 'http://1.bp.blogspot.com/-7M1WA5LBWRc/UbA0liyxXBI/AAAAAAAACmc/fD6lO_tkBz0/s400/16.+Yeh,+banana+is+delicious.gif';

imgArray[4] = new Image();
imgArray[4].src = 'https://67.media.tumblr.com/c107446a59a8d04a4f6a2fd46dd58d87/tumblr_nqgk3m6dCg1txck90o1_500.gif';

imgArray[5] = new Image();
imgArray[5].src = 'https://b2.burst.zone/wp-content/uploads/2013/08/anigif_enhanced-buzz-21056-1369937743-8.gif';


function generate () {
  return Math.floor(Math.random() * imgArray.length);
}

$("button").on('click',
  function() {
    $("#result h1").html(imgArray[generate()])
  })
