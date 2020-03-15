class Continent < ApplicationRecord

  def self.game_initializer
        array = []
        northamerica = Continent.new(name: "North America")
        array.push(northamerica)
        southamerica = Continent.new(name: "South America")
        array.push(southamerica)
        europe = Continent.new(name: "Europe")
        array.push(europe)
        africa = Continent.new(name: "Africa")
        array.push(africa)
        asia = Continent.new(name: "Asia")
        array.push(asia)
        australia = Continent.new(name: "Australia")
        array.push(australia)
        return array
    end

    def self.delete_continents
        self.delete_all
    end
end