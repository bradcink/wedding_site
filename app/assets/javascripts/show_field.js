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
					$('#sign-in-button').click(function() {
					$('#sign-in-form').toggle();
					});
                    });

$(document).ready(function(){
					$('#sign-up-button').click(function() {
					$('#sign-up-form').toggle();
					});
                    });