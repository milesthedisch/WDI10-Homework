require 'pry'

class Robot

    attr_accessor :id

    def initialize
        id = Random.rand(100.999)
        letter_id = [*('A'..'Z')].sample(2).join
        @id = letter_id.to_s + id .to_s
    end

    def destroy
    	@id = nil
    end

end

binding.pry