class GamesController < ApplicationController
    
    def new 
        game = Game.new
        territories = Territory.all
        render json: territories
    end


    def index   
    end

end