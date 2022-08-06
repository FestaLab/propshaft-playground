Rails.application.routes.draw do
  get "homes/show"
  root "homes#show"
end
