class CreateGamesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :games_tables do |t|
      t.integer :turn
      t.string :scoreboard
      t.integer :user_id
    end
  end
end
