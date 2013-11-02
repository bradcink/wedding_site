module MessagesHelper

  def message_name
    :message
  end
 
  def message
    @message ||= Message.new
  end
 
  def devise_mapping
    @devise_mapping ||= Devise.mappings[:message]
  end
  
end
