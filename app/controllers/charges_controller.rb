class ChargesController < ApplicationController
	def new
	end

	def create
	  # Amount in cents
	  @amount =  current_user.donation_amount*100

	  customer = Stripe::Customer.create(
	    :email => current_user.email,
	    :card  => params[:stripeToken]
	  )

	  charge = Stripe::Charge.create(
	    :customer    => customer.id,
	    :amount      => @amount,
	    :description => 'Sooter-Cink Wedding | Donor',
	    :currency    => 'usd'
	  )
	respond_to do |format|
	  if params[:action] == "create"
	  	format.html { redirect_to root_path, notice: 'Thank you for your kind donation!' }
	  else
	  	format.html { redirect_to root_path, alert: 'Donation failed. Please try again.' }
	  end
	end

	rescue Stripe::CardError => e
	  flash[:error] = e.message
	  redirect_to root_path
	end

end
