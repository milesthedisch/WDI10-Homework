require 'pry'
class Scrabble

	attr_accessor :word,

	def initialize( word )
		@word = word.downcase
		score
	end

	def score 
		sum = 0 
		@words.chars.ecah do |char|
			sum += scores[ char ]
		end
		puts "The score for #{ @word } is #{ sum }" 



end

scrabble_word = Scrabble.new 'cabbage'