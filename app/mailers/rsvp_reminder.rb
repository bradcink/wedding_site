class ContactForm < ActionMailer::Base
  default from: "sooter.cink.wedding@gmail.com"
  default to: "bradcink@me.com"

  def email_form(message)
          @message = message
          mail subject: "#{message.name} would like an invitation to Sooter-Cink Wedding"
  end
end