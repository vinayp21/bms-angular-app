'use strict';
app.service('booking', function(){
	this.bookingMovie={};
	var self=this;
	this.setmovieDetails=function(movieId,theater,shows){
		self.bookingMovie={
			movieId:movieId,
			theaterId:theater,
			shows:shows
		};
	};
	
});