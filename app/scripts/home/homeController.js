'use strict';


app.controller('home', function($http, $scope, movieList, $location){
	this.selectedLang='';
	this.filter = {};
	this.genfilter= {};
	this.showFilter=false;

	this.selectMenu=function(lang){
		this.selectedLang=lang;
	};
	let self=this;
	movieList.getAllMovies().then(function(data){
		self.list = data.list;
		languageList(data.list);
		genreList(data.list);
	});

	this.filterApplied= function(){
		for(var key in self.filter){
			if(self.filter[key]){
				self.showFilter=true;
				break;	
			}else{
				self.showFilter=false;	
			}
		}
	};

	 var languageList= function(data){
	 	var languages=[data[0].language];
	 	data.forEach(function(obj){
	 		if(languages.indexOf(obj.language)===-1){
	 			languages.push(obj.language);
	 		}
	 	});
	 	self.languageFilter=languages;
	};
	var genreList= function(data){
		var genre=[];
		data[0].genre.forEach(function(g){
			genre.push(g);	
		});
	 	data.forEach(function(arr){
	 		arr.genre.forEach(function(arrEle){
	 			if(genre.indexOf(arrEle)===-1){
	 				genre.push(arrEle);
	 			}
	 		});
	 	});
	 	self.genreFilter=genre;
	};
	this.genreFilterApplied=function(){
		let listData=self.list;
		
		let genreKeys=[];
		for(var key in self.genfilter){
			if(self.genfilter[key]){
				genreKeys.push(key);
			}
		}
		console.log(genreKeys);
		var genreFilter = listData.map(function(listObj){
			var flag=0;
			listObj.genre.forEach(function(genre){
				if(genreKeys.indexOf(genre)!==-1){
					flag=1;
				}
			});	
			if(flag===1){
				return listObj;
			}
		});
		//self.list = genreFilter;
		console.log(genreFilter);
	};


	
});

