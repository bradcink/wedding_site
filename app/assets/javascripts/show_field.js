$(document).ready(function(){
                    $("input[name='user[rsvp_confirmation]']").click(function(){
                    if($(this).val() == "1") {
                      $("#number_attending").slideDown("fast");
                        }
                    else{
                      $("#number_attending").slideUp("fast");
                        }
                      });
                    });

$(document).ready(function(){
$(".btn-inverse").click(function(){
    var divToToggle = $( $(this).find("a").attr('href') );
    $(".simple-form:visible").not(divToToggle).hide();
    divToToggle.slideToggle("fast");
  });
});


