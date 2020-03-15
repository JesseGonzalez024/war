class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.integer :scoreboard
      t.integer :turn_number
      t.string :user_id
    end
  end
end