# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create!(first_name: "test1", last_name: "lname")
User.create!(first_name: "test1", last_name: "lname")
User.create!(first_name: "test1", last_name: "lname")
User.create!(first_name: "test1", last_name: "lname")
User.create!(
  first_name: "John", 
  last_name: "Smith", 
  avatar: "https://assets.onboard.io/assets/a/5/5/fswnuakkcn.jpg",
  linkedin_url: "https://www.linkedin.com/company/onboardio/",
  twitter_url: "https://www.twitter.com/onboardio/",
  instagram_url: "https://www.instagram.com/onboardio/",
  website_url: "https://onboard.io",
  bio: "This is my tagline.",
  job_title: "Title"
)

