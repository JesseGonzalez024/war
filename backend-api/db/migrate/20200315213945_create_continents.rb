class CreateContinents < ActiveRecord::Migration[6.0]
  def change
    create_table :continents do |t|
      t.string :name
    end
  end
end
