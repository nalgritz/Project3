class CreateFeeds < ActiveRecord::Migration
  def change
    create_table :feeds do |t|
      t.string :title
      t.string :url
      t.text :description
      t.string :image_url

      t.timestamps null: false
    end
  end
end
