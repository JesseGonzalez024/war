class UsersController < ApplicationController

    def index
        users = User.top_users
        render json: users
    end

    def new
        # After a game is successfuly completed, a user can input their username
    end

    def create
        binding.pry
        # Username is stored in database along with the number of tries
    end
    
end