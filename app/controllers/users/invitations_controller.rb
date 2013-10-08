class Users::InvitationsController < Devise::InvitationsController
	
  private
  	def update_resource_params
      params.require(:user).permit(:email, :first_name, :last_name, :rsvp_confirmation, :rsvp_count, :donation_amount, :invitation_token, :password, :password_confirmation, :roles => [])
    end
end