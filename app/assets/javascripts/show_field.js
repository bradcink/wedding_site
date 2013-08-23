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