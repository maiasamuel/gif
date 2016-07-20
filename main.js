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

imgArray[6] = new Image();
imgArray[6].src = 'https://tctechcrunch2011.files.wordpress.com/2015/08/safe_image.gif?w=705';

imgArray[7] = new Image();
imgArray[7].src = 'https://benjaminbenben.com/img/example-trefoil.gif';

imgArray[8] = new Image();
imgArray[8].src = 'https://media.giphy.com/media/FHCHRtwAZgGFq/giphy.gif';

imgArray[9] = new Image();
imgArray[9].src = 'https://media3.giphy.com/media/yXBqba0Zx8S4/giphy.gif';

imgArray[10] = new Image();
imgArray[10].src = 'http://www.thisiscolossal.com/wp-content/uploads/2014/03/140104.gif';

imgArray[11] = new Image();
imgArray[11].src = 'http://static.boredpanda.com/blog/wp-content/uploads/2016/07/totoro-exercising-100-days-of-gifs-cl-terryart-2-578f80ec7f328__605.gif';

imgArray[12] = new Image();
imgArray[12].src = 'http://67.media.tumblr.com/22a4d60464bbfe29923e30794fbd4b99/tumblr_o4u1bvIEn91uluepno1_500.gif';

imgArray[13] = new Image();
imgArray[13].src = 'http://imagesmtv-a.akamaihd.net/uri/mgid:file:http:shared:mtv.com/news/wp-content/uploads/2015/08/GIF-Justin-Crying-1440993005.gif?quality=.8&height=281&width=500';

imgArray[14] = new Image();
imgArray[14].src = 'http://gifdanceparty.giphy.com/assets/dancers/pumpgirl.gif';

imgArray[15] = new Image();
imgArray[15].src = 'http://67.media.tumblr.com/7ef66aa4a96382edbcd9b4a4a08f3a49/tumblr_o5hga6kHkM1v5dqido1_500.gif';

imgArray[16] = new Image();
imgArray[16].src = 'http://66.media.tumblr.com/b54ce91276b1215f6448fa6cd892a264/tumblr_n2nj3tO0Oh1qjk2rvo1_500.gif';

imgArray[17] = new Image();
imgArray[17].src = 'https://upload-assets.vice.com/files/2016/04/29/1461944107Header.gif';

imgArray[18] = new Image();
imgArray[18].src = 'http://67.media.tumblr.com/8fa0624d0849731ede1834e9f195a4aa/tumblr_o0m9seu33J1rwzsbso1_500.gif';

imgArray[19] = new Image();
imgArray[19].src = 'https://s.yimg.com/ny/api/res/1.2/SAtu5r1U_J4ad7yh_PpbDw--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NDc3O2g9MjYx/http://38.media.tumblr.com/ae4a59af7610949e5ca2bc389962c8af/tumblr_inline_o076ltDsUb1s9clfh_500.gif';

imgArray[20] = new Image();
imgArray[20].src = 'https://gif.gifsme.com/gifsme.php?img=http://67.media.tumblr.com/6b205e7e3acaf2edbeecbcee1770c116/tumblr_o2wxuwfc6y1udh5n8o1_500.gif';

imgArray[21] = new Image();
imgArray[21].src = 'https://media.giphy.com/media/l1OFKXTihj41W/giphy.gif';

imgArray[22] = new Image();
imgArray[22].src = 'https://media2.giphy.com/media/fm4WhPMzu9hRK/200.gif';

imgArray[23] = new Image();
imgArray[23].src = 'http://img.wennermedia.com/620-width/nicki.gif';

imgArray[24] = new Image();
imgArray[24].src = 'http://static.vibe.com/files/2015/10/Drake-Shrug-Hotline-Bling-Gif.gif';

imgArray[25] = new Image();
imgArray[25].src = 'http://66.media.tumblr.com/b21a01264513564087c147d8ee77f936/tumblr_o5syfyNLDK1r9mp00o2_r1_500.gif';

imgArray[26] = new Image();
imgArray[26].src = 'https://media.giphy.com/media/l41m6nbYNnIdk6ziE/giphy.gif';


function generate () {
  return Math.floor(Math.random() * imgArray.length);
}

$("button").on('click',
  function() {
    $("#result h1").html(imgArray[generate()])
  })
