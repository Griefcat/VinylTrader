class UserVinylsController < ApplicationController
    def index
        @user_vinyls = UserVinyls.all
        render json: @user_vinyls 
      end
  
    # get
      def show
        @user_vinyl = UserVinyls.find(params[:id])
        render json: @user_vinyl 
      end
  
    # post
      def create
        @user_vinyl = UserVinyl.new(user_vinyl_params)
          if @user_vinyl.save
            render json: @user_vinyl 
          else 
            render error:  {error: 'Unable to create vinyl'}, status: 400
        end 
      end
  
  #put 
    def update 
      @user_vinyl = UserVinyl.find(params[:id])
        if @user_vinyl
          @user_vinyl.update(user_vinyl_params)
          render json: {message: 'Vinyl Updated'}, status: 200
        else 
          render json: {error: 'Unable to update Vinyl.'}, status: 400
      end 
    end 
  
  #delete 
    def destroy 
      @user_vinyl = UserVinyl.find(params[:id])
        if @user_vinyl
          @user_vinyl.destroy
          render json: {message: 'Vinyl deleted.'}, status: 200
        else 
          render json: {error: 'Unable to delete vinyl.'}, status: 400
        end 
      end 
  
  private 
  
    def user_vinyl_params 
      params.permit(:user_id, :vinyl_id)
    end 
  
  end 
