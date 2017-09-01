'use strict';


app.controller('show', function($location, movieList,booking){

	var id=$location.$$path.toString().split("/");
	var self=this;
	movieList.getMovieInfoById(id[2]).then(function(info){
		self.movieInfo=info;
	});	

	this.bookShow= function(movieId,theater,shows){
		booking.setmovieDetails(movieId,theater,shows);
		$location.path("/booking/"+movieId+"/"+theater);
	};


});