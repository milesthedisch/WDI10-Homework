def nuc = 
	{
	DNA: ["A","C","G","T"],
	RNA: ["A","C","G","U"],
	}
end

#Recieve a string and a single char
def count ( nucleotide, strand )
	strand.upcase.count( nucleotide )
end

def nucleotide_counts ( strand )
	{
		:A => count("A", strand),
		:C => count("C", strand),
		:T => count("T", strand)
		:G => count("G", strand)
	}
end 

puts count("A","AATA")
