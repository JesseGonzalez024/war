class UsersController < ApplicationController

    def index
        users = User.top_users
        render json: users
    end

    def create
        user = User.find_or_create_by(username: params[:name])
        
        if user.valid?
            render json: user
        else
            render json: {message: "Error could not save username to database."}, status: 400
        end
    end

    def update
        user = User.find_by_id(params[:id])
        
        if user.final_count != nil
            user.update
        else
            render json: {message: "Error could not save username to database."}, status: 400
        end
    end

end