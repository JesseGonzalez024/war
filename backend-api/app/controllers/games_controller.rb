class GamesController < ApplicationController
    
    def new 
        # Upon new game button clicked. a fetch option is initiated and creates a new game instance.
        # Upon game instance created a 
       continents = Continent.game_initializer 
       render json: continents
    end

    def create
        # Creates a user instance by requesting for the unique username.
        # Saves the username and creates a new territory
        # Only after game completion is the instance of the game saved.
        # Math.floor(Math.random() * 10)
        # Game is only saved after completion
    end

end