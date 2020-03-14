class User < ApplicationRecord
    validates :username, uniqueness: true
    has_many :games

    def self.top_users
        users = User.order("final_count ASC").take(3)
    end

end