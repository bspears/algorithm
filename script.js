$('#description').hide();

var Thing = function() {
  this.type = Math.floor(Math.random() * 10);
  $('#things').append('<li>'+ this.type + '</li>');
};

var makeThing = function() {
  new Thing();
};

$('#create').on('click', makeThing);

var sort = function() {
  $('#description').show('slow');
  var run = $('li').length;
  var i = 0;
  var interval = setInterval(loop, 1000);


  function loop() {
    var start = 1;
    $('li').each(function() {
      if(Number($('li').eq(start).text()) < Number($('li').eq(start).prev().text())) {
          
        $('li').removeClass('swap')
        $('li').eq(start).hide(8).fadeIn(1000).addClass('swap')  
        $('li').eq(start).insertBefore($('li').eq(start).prev())
      }
      start++;
    }) 
    i++;       
    if (i == $('li').length) {
    clearInterval(interval);
    }
  }
}

$('#sort').on('click', sort);






