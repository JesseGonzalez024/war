class GamesController < ApplicationController
    
    def new 
        # Method is fetched by JS upon "new game" event
        # Renders territories and commences game instance. 
        render json: territories
    end

    def create
        # Creates a user instance by requesting for the unique username.
        # Saves the username and creates a new territory
        # Only after game completion is the instance of the game saved.
        # Math.floor(Math.random() * 10)
    end

end