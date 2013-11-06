$(document).ready(function(){
                    $("input[name='user[rsvp_confirmation]']").on('click',function(){
                    if($(this).val() == "1") {
                      $("#number_attending").slideDown("fast");
                        }
                    else{
                      $("#number_attending").slideUp("fast");
                        }
                      });
                    $("input[name='user[rsvp_confirmation]']").on('click',function(){
                    if($(this).val() == "1") {
                      $("#number_attending-edit").slideDown("fast");
                        }
                    else{
                      $("#number_attending-edit").slideUp("fast");
                        }
                      });

                    $(".btn-inverse-no-data").on('click',function(){
                        var divToToggle = $( $(this).attr('href') );
                        $(".simple-form:visible").not(divToToggle).hide();
                        divToToggle.slideToggle("fast")
                        return false;
                      });

                    $("#faq").on('click',function(){
                        $("#faq-field").slideToggle("fast");
                        $("html, body").animate({scrollTop: $("#faq-field").offset().top});
                         return false;
                      });
                    $("#edit").on('click',function(){
                        $("#edit-field").slideToggle("fast");
                        $("html, body").animate({scrollTop: $("#edit-field").offset().top});
                        $("#add-user-field").hide()
                         return false;
                      });
                    $("#add-user").on('click',function(){
                        $("#add-user-field").slideToggle("fast");
                        $("html, body").animate({scrollTop: $("#add-user-field").offset().top});
                        $("#edit-field").hide();
                         return false;
                      });
                    $("#next-button").click(function(){
                        $("#donation").submit();
                        $("#donate-form").show();
                        $("#submit-payment-prep").show();
                        $("#amount-form").hide();
                         return false;
                      });
                    $("#back-button").on('click',function(){
                        $("#donate-form").show();
                        $("#amount-form").show();
                        $("#submit-payment-prep").hide();
                         return false;
                      });
                    $("#password-reset").on('click',function(){
                        $("#password-reset-id").show();
                         return false;
                      });
                    });




