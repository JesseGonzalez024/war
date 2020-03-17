class UsersController < ApplicationController

    def index
        users = User.top_users
        render json: users
    end

    def create
        byebug
        # Username is stored in database along with the number of tries
    end

end