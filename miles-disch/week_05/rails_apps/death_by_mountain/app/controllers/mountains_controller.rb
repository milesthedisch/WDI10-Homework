class MountainsController < ApplicationController
	skip_before_filter :verify_authenticity_token
	def index
		@mountains = Mountain.all
	end
	def new
	end
	def create
		mountain = Mountain.create mountain_params
		redirect_to mountain_path
	end
	private
	
end
