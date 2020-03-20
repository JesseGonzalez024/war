class GamesController < ApplicationController

    def create
        byebug

        user = User.find_by_username(params[:name])
        game = Game.create(user_id: user.id)
    end

    def update
        
    end

end