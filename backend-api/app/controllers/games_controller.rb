class GamesController < ApplicationController

    def create
        
        user = User.find_by_username(params[:name])
        user.update(final_count: parms[:turnCount])
        game = Game.new
        game.user_id = user.id
        
        if game.valid?
            game.save
        end
        
    end

end