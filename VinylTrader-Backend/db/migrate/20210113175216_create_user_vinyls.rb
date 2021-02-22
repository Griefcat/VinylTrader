class CreateUserVinyls < ActiveRecord::Migration[6.0]
  def change
    create_table :user_vinyls do |t|
      t.integer :user_id
      t.integer :vinyl_id

      t.timestamps
    end
  end
end
