class UsersController < ApplicationController

    def index
        users = User.top_users
        render json: users
    end

    def create
        # byebug
        user = User.find_or_create_by(username: params[:name])
        
        if user.valid?
            # Add Serializer for user 
            # render json: user
        else
            render json: {message: "Error could not save username to database."}, status: 400
        end
    end

    def update

        # byebug
    end

end