class Users::RegistrationsController < Devise::RegistrationsController

def update
    respond_to do |format|
      if @user.update_attributes(user_params)
        format.html { redirect_to root_path, notice: 'User was successfully updated.' }
      else
        format.html { redirect_to root_path, alert: 'User was not updated.' }
      end
    end
  end

	private
  # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:email, :first_name, :last_name, :rsvp_confirmation, :rsvp_count, :donation_amount, :roles => [])
    end

  def resource_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :current_password, :rsvp_confirmation, :rsvp_count, :donation_amount)
  end
  private :resource_params, :user_params
end