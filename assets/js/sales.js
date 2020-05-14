var acc = $('.sales');

  acc.each(function() {
    $(this).click(function() {
      $(this).toggleClass('inactivePanel');
      var panel = $(this).next();
      panel.slideToggle(400);
    });
  });

 acc[0].click();
 acc[1].click();
 acc[2].click();
 acc[3].click();
 acc-[4].click();
 acc[5].click();
 acc[6].click();
 acc[7].click();
 acc[8].click();
 acc[9].click();
  