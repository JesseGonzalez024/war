class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :scoreboard
      t.integer :turn_number
      t.integer :user_id
    end
  end
end
