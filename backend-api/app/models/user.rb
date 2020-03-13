class User < ApplicationRecord
    has_many :games
    has_many :territories, through: :game
end