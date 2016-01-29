

angular.module("myApp",[])

angular.module("myApp")
	.controller("appController", ['$scope', function($scope){
		$scope.date = 29
		$scope.makeDate = function($var){
			if ($var + 1 >=31){
				return $var = 1
			}
			else { return $var += 1}
		}

		$scope.manyDays = [
			{ 	date:$scope.date,
				time:"",
				toDo:[],
			},
			{ 	date:"30",
				time:"",
				toDo:[],
			},
			{ 	date:"31",
				time:"",
				toDo:[],
			},
			{ 	date:"1",
				time:"",
				toDo:[],
			},
			{ 	date:"2",
				time:"",
				toDo:[],
			},
			{ 	date:"3",
				time:"",
				toDo:[],
			},
			{ 	date:"4",
				time:"",
				toDo:[],
			},
			{ 	date:"5",
				time:"",
				toDo:[],
			},
		]
		// $scope.show = false
		
		$scope.moDaze = function($event){
			console.log("Stops copies me!")
			$scope.manyDays.push( {
				date: "",
				time: "",
				toDo: [],
			})	

			console.log($scope.manyDays)
		}

		$scope.popIn = function(days) {
			console.log("you're a clicker")
			days.showMe = true;
			}

		$scope.loadEvents =function(event, days){
			if (event.which === 13){
				days.showMe= false
				days.toDo.push(days.mytoDo)
				days.mytoDo=""
				console.log(days.toDo)
				console.log("That's my eye!")
			}
		}

	
	}])