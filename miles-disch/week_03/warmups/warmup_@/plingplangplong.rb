# Write a program that converts a number to a string per the following rules:

# If the number contains 3 as a prime factor, output 'Pling'. If the number contains 5 as a prime factor, output 'Plang'. If the number contains 7 as a prime factor, output 'Plong'.

# If the number does not contain 3, 5, or 7 as a prime factor, simply return the string representation of the number itself.

def convert ( num )
	str = ""
	#  The << are the same as +=
	str << "Pling" if num % 3 == 0 
	str << "Plang" if num % 5 == 0
	str << "Plong" if num % 7 == 0 
	return str unless str.empty?
	num.to_iw 
end  

puts convert( 105 )

print "Whats your number!"
num = gets.to_i