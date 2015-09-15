class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
    	t.text :title
    	t.text :genre
    	t.date :dop
    	t.text :image
    end
  end
end
