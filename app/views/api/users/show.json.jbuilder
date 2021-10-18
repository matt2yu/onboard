json.extract! @user, :id, :avatar, :first_name, :last_name, :created_at

json.name do 
  @user.first_name + @user.last_name
end

json.profile do
  json.extract! @user, :linkedin_url, :twitter_url, :instagram_url, :website_url, :bio, :job_title
end
puts @user
