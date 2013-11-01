class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def index
    authorize! :index, @user, :message => 'Not authorized as an administrator.'
    @users = User.all
    respond_to do |format|
      format.html
      format.xls
    end
  end

  def show
  end

  def new
    @user = User.new
  end

  def edit
  end

  def create
    authorize! :create, @user, :message => 'Not authorized as an administrator.'

    @user = User.new(user_params)
    respond_to do |format|
      if @user.save
        format.html { redirect_to root_path, notice: 'User was successfully created.' }
      else
        format.html { redirect_to root_path, alert: 'User was not created. Please try again.' } 
      end
    end
  end

  def update
    authorize! :update, @user, :message => 'Not authorized as an administrator.'
    respond_to do |format|

      if @user.update_attributes(user_params)
        format.html { redirect_to root_path, notice: 'User was successfully updated.' }
      else
        format.html { redirect_to root_path, alert: 'User was unsuccessfully updated. Please try again.' }
      end
    end
  end

  def destroy
    authorize! :destroy, @user, :message => 'Not authorized as an administrator.'

    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url }
    end
  end

  def batch_invite
    #Validate the user_emails field isn't blank and emails are valid
    params[:user_emails].split(",").each do |email|
      User.invite!(:email => email)
    end
    redirect_to root_path, notice: 'You just added a shite ton of people!'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:email, :first_name, :last_name, :rsvp_confirmation, :rsvp_count, :donation_amount, :roles => [])
    end
end
