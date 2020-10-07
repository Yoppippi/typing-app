Rails.application.routes.draw do
  root to: 'typing#top'
  get '/typing/normal', to: 'typing#normal'
  get '/typing/secret', to: 'typing#secret'
  get '/typing/ranking', to: 'typing#ranking'
  resources :typing, only: :create
end
