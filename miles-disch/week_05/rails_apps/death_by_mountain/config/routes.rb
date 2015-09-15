Rails.application.routes.draw do
  root :to => 'mountains#index'
  get '/mountains' => 'mountains#index'
  get '/mountains/new' => 'mountains#new'
  post '/mountains' => 'mountains#create'
  
end
