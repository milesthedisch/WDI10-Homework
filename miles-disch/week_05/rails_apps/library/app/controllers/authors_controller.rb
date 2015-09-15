class AuthorsController < ApplicationController
  def index
    @authors = Author.all #this uses active record to write sql to get all the authors.
  end

  def show
    @author = Author.find params[:id]
  end

  def edit
    @author = Author.find params[:id]
  end

  def update
    author = Author.find params[:id]
    author.update author_params # is the white listing thing that takes in params that we want
    redirect_to author
  end 

  def new
    @author = Author.new
  end

  def create
    author = Author.create author_params
    redirect_to author # author_path(author.id) 
  end

  def destroy
    author = Author.find params[:id]
    author.destroy
    redirect_to author # author_path(author.id)
  end

  private
  def author_params
    params.require(:author).permit(:name, :nationality, :dob, :image)
  end
end
