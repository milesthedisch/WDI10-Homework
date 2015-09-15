Author.destroy_all

Author.create(:name => 'Isaac Asimov', :nationality => "Russian", :dob => "1920-01-02", :image => "https://upload.wikimedia.org/wikipedia/commons/3/34/Isaac.Asimov01.jpg")

Book.destroy_all

Book.create(:title => 'Foundation', :genre => "Sci-Fi", :dop => "1951", :image => "http://www.sfreviews.com/graphics/Isaac%20Asimov_1951_Foundation.jpg" )

Book.create(:title => 'Foundation and Empire', :genre => "Sci-Fi", :dop => "1952", :image => "http://www.isfdb.org/wiki/images/5/57/FNDTNNDMPL0000.jpg" )