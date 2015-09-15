require 'pry'

class SpaceAge

	def initialize seconds
		@seconds = seconds
		@years_on_earth = seconds / 31557600
	end

	def years_on_planet( planet_name )	
		raito = orbital_periods[ planet_name ]
		year_on_other_planet = @years_on_earth / ratio
	end

	def orbital_periods
		{
			:mercury => 0.2408467,
			:venus => 0.61519726,
			:mars => 1.8808158,
			:jupiter => 11.862615,
			:saturn => 29.447498,
			:uranus => 84.016846,
			:neptune => 164.79132
		}
	end

	def year_on_all_planets
		all_orbital_periods = orbital_periods
		all_orbital_periods.each do |planet, ratio|
			all_orbital_periods[ planet ] = (@years_on_earth / ratio).round(2) 
		end
	end


end 

	larry = SpaceAge.new( 1000000 )
	larry.year_on_all_planets
	binding.pry