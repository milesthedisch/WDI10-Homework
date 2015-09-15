# == Schema Information
#
# Table name: books
#
#  id    :integer          not null, primary key
#  title :text
#  genre :text
#  dop   :date
#  image :text
#

class Book < ActiveRecord::Base	
	belongs_to :author
end
