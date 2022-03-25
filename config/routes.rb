Rails.application.routes.draw do
  
  namespace :api do
    resources :users
      resources :doctors do
        resources :appointments
      
    end
    get '/:id/doctors', to: 'users#doctors'
    get '/:id/users', to: 'doctors#users'
  end

end