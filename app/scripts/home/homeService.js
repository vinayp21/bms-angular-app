'use strict';

var app= angular.module('bmsAngularApp');

app.service('movieList', function($http, $q){

	
		this.getAllMovies= function(){
			var def = $q.defer();
			 $http.get('http://localhost:9000/data/movies.json').then(function(data){
				def.resolve(data.data);
			});
			 return def.promise;
		};

		this.getMovieInfoById= function(id){
			var def = $q.defer();
			 $http.get('http://localhost:9000/data/movies.json').then(function(data){
			 	var movieInfo={};
			 	data.data.list.forEach(function(d){
			 		if(d.movieId==id){
			 			movieInfo=d;
			 		}
			 	});
				def.resolve(movieInfo);
			});
			 return def.promise;	
		}

	

});


	
