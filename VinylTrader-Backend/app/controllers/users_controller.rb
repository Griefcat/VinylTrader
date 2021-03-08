class UsersController < ApplicationController
  def index
    users = User.all
    render json: users 
  end

  def show
    @user = User.find(params[:id])
    render json: UserSerializer.new(@user).serialized_json
  end
end
