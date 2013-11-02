class MessagesController < ApplicationController
  def new
    @message = Message.new
  end

  def create
    @message = Message.new(params[:message])
       
    if @message.valid?
    	ContactForm.email_form(@message).deliver
        redirect_to root_url, notice: "Invitation request sent! Please wait for your request to be processed."
    else
      	flash.now.alert = "Email could not be sent. Please check your entries."
        render :new
    end

  end
end