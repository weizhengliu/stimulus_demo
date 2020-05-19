Rails.application.routes.draw do
  root 'demos#print'
  get 'print', to: 'demos#print'
  get 'bind', to: 'demos#bind'
  get 'clipboard', to: 'demos#clipboard'
  get 'toggle', to: 'demos#toggle'
  get 'list', to: 'demos#list'
end
