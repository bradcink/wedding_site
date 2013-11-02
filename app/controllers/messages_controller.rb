class MessagesController < ApplicationController
  def new
    @message = Message.new
  end

  def create
    @message = Message.new(params[:message])
       
    if @message.valid?
    	ContactForm.email_form(@message).deliver
        redirect_to root_url, notice: "Invitation request sent!"
    else
      	flash.now.alert = "Invitation failed. Please try again."
        render :new
    end

  end
end