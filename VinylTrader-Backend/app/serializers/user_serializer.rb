class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username 
  has_many :vinyls, through: :user_vinyls
end
