class User < ApplicationRecord
    validates :username, uniqueness: true
    validates :final_count, numericality: { only_integer: true }, allow_blank: true
    has_many :games

    def self.top_users
        users = User.where("final_count NOT null").order("final_count ASC").take(3)
    end

end
