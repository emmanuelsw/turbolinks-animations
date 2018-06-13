Rails.application.routes.draw do
  root 'home#index'
  get 'home/index'
  get 'home/products'
end
