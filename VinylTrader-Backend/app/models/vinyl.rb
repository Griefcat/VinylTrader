class Vinyl < ApplicationRecord
    has_many :usersvinyls
    has_many :users, through: :uservinyls 
end
