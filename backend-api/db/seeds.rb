# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

north_america = Territory.create(name: "North America") 
south_america = Territory.create(name: "South America")
australia = Territory.create(name: "Australia")
europe = Territory.create(name: "Europe")
asia = Territory.create(name: "Asia") 
middle_east = Territory.create(name: "Middle East")
