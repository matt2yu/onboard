class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :linkedin_url
      t.string :twitter_url
      t.string :instagram_url
      t.string :website_url
      t.string :bio
      t.string :job_title
      t.string :avatar
      
      t.timestamps
    end
  end
end