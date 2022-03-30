Rails.application.routes.draw do
  
  namespace :api do
    resources :users
      resources :doctors do
        resources :appointments
        get '/unenrolled', to: 'appointments#unenrolledPatients'
      get '/enrolled', to: 'appointments#enrolledPatients'
    end
    get '/:id/doctors', to: 'users#doctors'
    get '/:id/users', to: 'doctors#users'
  end

end