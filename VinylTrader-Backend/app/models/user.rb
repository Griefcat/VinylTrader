class User < ApplicationRecord
    has_many :user_vinyls
    has_many :vinyls, through: :user_vinyls 

end
