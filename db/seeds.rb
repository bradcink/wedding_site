# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

admin = User.new(
  email: 'bradcink@auburn.edu',
  first_name: 'Brad', 
  last_name: 'Cink', 
  roles: ['admin', 'moderator', 'user'], 
  password: ENV["ADMIN_PASSWORD"],
  password_confirmation: ENV["ADMIN_PASSWORD"],
  rsvp_confirmation: '1',
  rsvp_count: '0'
)
admin.save!