# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Vinyl.destroy_all
User.destroy_all

# 'https://media.pitchfork.com/photos/5ab41f308195c0189f1354ee/1:1/w_600/Golden%20hour%20Kacey%20Musgraves.jpg'

puts "Vinyl Seeds"
#URL (for vid), title, thumbnail image, type (category)
vinyl1 = Vinyl.create(image: 'https://media.pitchfork.com/photos/5ab41f308195c0189f1354ee/1:1/w_600/Golden%20hour%20Kacey%20Musgraves.jpg',
                    title: 'Golden Hour',
                    artist: 'Kacey Musgraves',
                    genre: 'country',
                    year: 2018,
                    rare: false )

vinyl2 = Vinyl.create(image: 'https://images-na.ssl-images-amazon.com/images/I/81NSetbGioL._SL1500_.jpg',
                    title: 'Hozier',
                    artist: 'Hozier',
                    genre: 'rock',
                    year: 2014,
                    rare: false )

vinyl3 = Vinyl.create(image: 'https://media.pitchfork.com/photos/5929a5755e6ef95969320ae3/1:1/w_600/48a46623.jpg',
                    title: 'Come on feel the Illinoise',
                    artist: 'Sufjan Stevens',
                    genre: 'folk',
                    year: 2005,
                    rare: false)
                    
vinyl4 = Vinyl.create(image: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-146529-008cf0e73368d0fb58653f707552f40c4e5f16b9.jpg',
                        title: 'Whats Going On',
                        artist: 'Marvin Gaye',
                        genre: 'soul',
                        year: 1971,
                        rare: false )

vinyl5 = Vinyl.create(image: 'https://m.media-amazon.com/images/I/617rSnmzb3L._SS500_.jpg',
                        title: 'Griefcat',
                        artist: 'Griefcat',
                        genre: 'folk',
                        year: 2020,
                        rare: true )
    



puts "Users"
#Make two users, name, password

ben = User.create(username: 'ben123',
                    password: 'ben123')

anne = User.create(username: 'anne123',
                    password: 'anne123')