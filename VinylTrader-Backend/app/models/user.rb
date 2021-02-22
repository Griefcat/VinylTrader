class User < ApplicationRecord
    has_many :uservinyls
    has_many :vinyls, through: :uservinyls 

end
