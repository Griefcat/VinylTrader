class CreateVinyls < ActiveRecord::Migration[6.0]
  def change
    create_table :vinyls do |t|
      t.string :image
      t.string :title
      t.string :artist
      t.string :genre
      t.integer :year
      t.boolean :rare

      t.timestamps
    end
  end
end
