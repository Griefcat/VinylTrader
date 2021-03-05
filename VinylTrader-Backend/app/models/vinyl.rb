class Vinyl < ApplicationRecord
    has_many :user_vinyls
    has_many :users, through: :user_vinyls 
end
