Rails.application.routes.draw do
  get 'books/index'

  get 'books/show'

  get 'books/edit'

  get 'books/destroy'

  get 'books/new'

  get 'books/update'

  # get 'authors/index'
  # get 'authors/show'
  # get 'authors/edit'
  # get 'authors/update'
  # get 'authors/new'
  # get 'authors/create'
  # get 'authors/destroy'

  # delete all the get reqs! Use resources.

  resources :authors, :books

end
