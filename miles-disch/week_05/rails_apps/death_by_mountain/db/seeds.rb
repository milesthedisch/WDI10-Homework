# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Mountain.destroy_all

Mountain.create :name => 'Everest', :deaths => 500, :height => 5000
Mountain.create :name => 'K2', :deaths => 900, :height => 4999
Mountain.create :name => 'Annapurna', :deaths => 1000, :height => 300
