class ContinentsController < ApplicationController
    
    def index
        continents = Continent.game_initializer 
        render json: continents.shuffle
    end



end