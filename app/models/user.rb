class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include User::AuthDefinitions
  include User::Roles

  has_many :identities


  field :email, type: String
  field :image, type: String
  field :first_name, type: String
  field :last_name, type: String
  field :roles_mask, type: Integer
  field :rsvp_confirmation, type: Integer
  field :rsvp_count, type: Integer
  field :donation_amount, type: Integer
  
  validates_presence_of :email, :first_name, :last_name

  def full_name
    "#{first_name} #{last_name}"
  end

  def rsvp_not_confirmed?
    rsvp_confirmation == 2
  end

  def self.to_csv(options = {})
    CSV.generate(options) do |csv|
      csv << column_names
      all.each do |user|
        csv << user.attributes.values_at(*column_names)
      end
    end
  end

end
