$('#description').hide();

var Thing = function() {
  this.type = Math.floor(Math.random() * 10);
  $('#things').append('<li>'+ this.type + '</li>');
};

var makeThing = function() {
  new Thing();
};

$('#create').on('click', makeThing);

var indx = 1;
var i = 0;

var sort = function(stuff) {
  $('#description').show('slow');
  var last = $('li').eq(indx).prevUntil($('li').eq()<= $('li').eq(indx)).last();

  stuff.removeClass('swap')
  
  if(Number(stuff.eq(indx).text()) < Number(stuff.eq(indx-1).text())) { 

    stuff.eq(indx).hide(8).fadeIn(1000).addClass('swap');  
    stuff.eq(indx).insertBefore(last);
    i++;
  } 
  indx++;

  if (i <= stuff.length) {
          setTimeout(sort, 1000, stuff);
        }    
};

$('#sort').on('click', function(){
  sort($('li'))
});






