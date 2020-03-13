class Game < ApplicationRecord
    has_many :territories
    belongs_to :user
end