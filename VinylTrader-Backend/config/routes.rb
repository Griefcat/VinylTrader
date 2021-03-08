Rails.application.routes.draw do
  resources :vinyls 
  resources :users

  post '/newuser', to: 'auth#create'
  post '/vinyls', to: 'vinyls#create'
  delete '/vinyls/:id', to: 'vinyls#destroy'
  get '/vinylsbyuser/:id', to: 'vinyls#get_by_user_id'
  
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
