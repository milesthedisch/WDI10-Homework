class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def show
    @book = Book.find params[:id]
  end

  def edit
    @book = Book.find params[:id]
  end

  def destroy
    book = book.find params[:id]
    book.destroy
    redirect_to books_path 
  end

  def new
    @book = Book.new
  end

  def update
    book = Book.find params[:id]
    book.update book_params
    redirect_to book
  end

  def create
    book = Book.create book_params
    redirect_to book
  end

  private 
  def book_params
    params.require(:book).permit(:title, :genre, :dop, :image, :author_id)
  end

end
