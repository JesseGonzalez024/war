class UsersController < ApplicationController

    def index
        users = User.top_users
        render json: users
    end

    def create
        user = User.new(username: params[:name])
        if user.valid?
            user.save
        end
    end

    def update
       binding.pry 
    end

end