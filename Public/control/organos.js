$description = $(".description");

  $('.st0').hover(function() {
    
    $(this).attr("class", "enabled st0");
    $description.addClass('active');
    $description.html($(this).attr('id'));
  }, function() {
    $description.removeClass('active');
  });

  $('.point').hover(function() {
    
    $(this).attr("class", "enabled point");
    $description.addClass('active');
    $description.html($(this).attr('id'));
  }, function() {
    $description.removeClass('active');
  });

  $('.line').hover(function() {
    
    $(this).attr("class", "enabled line stroke ");
    $description.addClass('active');
    $description.html($(this).attr('id'));
  }, function() {
    $description.removeClass('active');
  });

$(document).on('mousemove', function(e){
  
  $description.css({
    left:  e.pageX,
    top:   e.pageY - 70
  });
  
});