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

                    $(".btn-inverse").on('click',function(){
                        var divToToggle = $( $(this).find("a").attr('href') );
                        $(".simple-form:visible").not(divToToggle).hide();
                        divToToggle.slideToggle("fast");
                      });
                    $("#faq").on('click',function(){
                        $("#faq-field").show();
                        $("#edit-field").hide();
                         return false;
                      });
                    $("#edit").on('click',function(){
                        $("#edit-field").show();
                        $("#faq-field").hide();
                         return false;
                      });
                    $("#confirmation-reset").on('click',function(){
                        $("#confirmation-reset-id").show();
                         return false;
                      });
                    });




