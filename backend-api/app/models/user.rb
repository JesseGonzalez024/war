class User < ApplicationRecord
    validates :username, uniqueness: true
    validates :final_count, numericality: { only_integer: true }
    has_many :games
    has_many :continents, through: :games


    def self.top_users
        users = User.order("final_count ASC").take(3)
    end

end