class Continent < ApplicationRecord
    validates :name, uniqueness: true
    
    
    def self.game_initializer
        northamerica = Continent.create(name: "North America")
        southamerica = Continent.create(name: "South America")
        europe = Continent.create(name: "Europe")
        africa = Continent.create(name: "Africa")
        asia = Continent.create(name: "Asia")
        australia = Continent.create(name: "Australia")
        return Continent.all
    end

    def self.delete_continents
        self.delete_all
    end

end