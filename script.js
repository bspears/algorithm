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
  var i = 0;
  var interval = setInterval(loop, 1000);

 function loop() {
   $('li').each(function() {
     if(Number($(this).text()) < Number($(this).prev().text())) {
       $('li').removeClass('swap');
       $(this).addClass('swap');
       $(this).insertBefore($(this).prev())
     }
   }) 
   i++;       
   if (i == $('li').length) {
     clearInterval(interval);
   }
 }
}

$('#sort').on('click', sort);






