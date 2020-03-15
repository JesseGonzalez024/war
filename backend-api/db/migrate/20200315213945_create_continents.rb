class CreateContinents < ActiveRecord::Migration[6.0]
  def change
    create_table :continents do |t|
      t.string :name
      t.integer :user_id
      t.integer :game
    end
  end
end
