$(document).ready(function() {
  // skill bar
  $('.skillbar').each(function(){
    $(this).find('.skillbar-bar').animate({
      width:$(this).attr('data-percent')
    }, 6000)
  })

  // experience tabs
  $('div.tabs h3').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('div.tabs h3').removeClass('current');
    $('.tab-content').removeClass('current').slideUp(1000);

    $(this).addClass('current');
    $("#"+tab_id).addClass('current').slideDown(1000);
  })
});