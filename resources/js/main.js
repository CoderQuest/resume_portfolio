$(document).ready(function() {
  // skill bar
  $('.skillbar').each(function(){
    $(this).find('.skillbar-bar').animate({
      width:$(this).attr('data-percent')
    }, 6000)
  })

  // experience tabs
  $('div.tabs h6').click(function(){
    var tab_id = $(this).attr('data-tab');

    if ($(this).hasClass('current')) {
      setTimeout(function(){
        $('div.tabs h6').removeClass('current');  
      }, 500);

      $('.tab-content').removeClass('current').slideUp(500);
    } else {
      setTimeout(function(){
        $('div.tabs h6').removeClass('current');       
      }, 100)
      
      $('.tab-content').removeClass('current').slideUp(500);

      var self = $(this); 
      // $(this).addClass('current');
      setTimeout(function(){
        self.addClass('current');
        $("#"+tab_id).addClass('current').slideDown(500);
      }, 100);
      
    }
  })
});