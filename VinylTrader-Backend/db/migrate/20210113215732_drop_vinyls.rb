class DropVinyls < ActiveRecord::Migration[6.0]
  def change
    drop_table :vinyls
  end
end
