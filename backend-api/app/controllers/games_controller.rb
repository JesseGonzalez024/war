class GamesController < ApplicationController

    def create
        byebug
        user = User.find_by_username(params[:name])
        # user.update(final_count: params[:turnCount])
        game = Game.new
        game.user_id = user.id
        
       byebug
        
        if game.valid?
            game.save
        end
        
    end

    def update
        byebug
    end

end