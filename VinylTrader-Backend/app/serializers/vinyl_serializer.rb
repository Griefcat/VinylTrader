class VinylSerializer
  include FastJsonapi::ObjectSerializer
  attributes :image, :title, :artist, :genre, :year, :rare
end
