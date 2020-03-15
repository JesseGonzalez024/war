class Game < ApplicationRecord
    has_many :continents
    has_many :troops, through: :continents 
    belongs_to :user


    def end_turn
        # After the user selects an end turn option, the turn count goes up by one. And each territory is given additional tropps.
    end





end