class VinylsController < ApplicationController
  # get
    def index
      @vinyls = Vinyl.all
      render json: @vinyls 
    end

  # get
    def show
      @vinyl = Vinyl.find(params[:id])
      render json: @vinyl 
    end

  # post
    def create
      @vinyl = Vinyl.new(vinyl_params)
        if @vinyl.save
          render json: @vinyl 
        else 
          render error:  {error: 'Unable to create vinyl'}, status: 400
      end 
    end

#put 
  def update 
    @vinyl = Vinyl.find(params[:id])
      if @vinyl
        @vinyl.update(vinyl_params)
        render json: {message: 'Vinyl Updated'}, status: 200
      else 
        render json: {error: 'Unable to update Vinyl.'}, status: 400
    end 
  end 

#delete 
  def destroy 
    @vinyl = Vinyl.find(params[:id])
      if @vinyl
        @vinyl.destroy
        render json: {message: 'Vinyl deleted.'}, status: 200
      else 
        render json: {error: 'Unable to delete vinyl.'}, status: 400
      end 
    end 

private 

  def vinyl_params 
    params.permit(:image, :title, :artist, :genre, :year, :rare)
  end 

end 

