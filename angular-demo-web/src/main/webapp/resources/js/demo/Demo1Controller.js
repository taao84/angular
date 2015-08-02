var demo1Controller = angular.module('demo1App', []);

demo1Controller.controller('PhoneListCtrl', function($scope, $http) {
  $scope.phones = [ {
    'name' : 'Nexus S',
    'snippet' : 'Fast just got faster with Nexus S.'
  }, {
    'name' : 'Motorola XOOM™ with Wi-Fi',
    'snippet' : 'The Next, Next Generation tablet.'
  }, {
    'name' : 'MOTOROLA XOOM™',
    'snippet' : 'The Next, Next Generation tablet.'
  } ];
  
  $scope.name = "Tomas";
  
  $scope.tableWithData = {
    'header' : ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5", "Col 6", "Col 7", "Col 8"], 
    'dataTable' : [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [3, 2, 3, 4, 5, 6, 7, 8], 
      [2, 2, 3, 4, 5, 6, 7, 8], 
      [7, 2, 3, 4, 5, 6, 7, 8], 
      [5, 2, 3, 4, 5, 6, 7, 8], 
      [4, 2, 3, 4, 5, 6, 7, 8], 
      [6, 2, 3, 4, 5, 6, 7, 8], 
      [8, 2, 3, 4, 5, 6, 7, 8] 
    ]
  };
  
  $scope.structuredTableData = {
    'header' : ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5", "Col 6", "Col 7", "Col 8"],
    'orderProperty' : 'col1', 
    'dataTable' : [
      {'col1' : 1, 'col2' : 10,'col3' : 11,'col4' : 12,'col5' : 13,'col6' : 14,'col7' : 15,'col8' : 16},
      {'col1' : 8, 'col2' : 80,'col3' : 10,'col4' : 11,'col5' : 12,'col6' : 13,'col7' : 14,'col8' : 15},
      {'col1' : 6, 'col2' : 16,'col3' : 17,'col4' : 18,'col5' : 19,'col6' : 20,'col7' : 21,'col8' : 22},
      {'col1' : 3, 'col2' : 23,'col3' : 24,'col4' : 25,'col5' : 26,'col6' : 27,'col7' : 28,'col8' : 29},
      {'col1' : 9, 'col2' : 30,'col3' : 31,'col4' : 32,'col5' : 33,'col6' : 34,'col7' : 35,'col8' : 36},
      {'col1' : 2, 'col2' : 40,'col3' : 41,'col4' : 42,'col5' : 43,'col6' : 44,'col7' : 45,'col8' : 46}
    ]
  };
  
  $http.get('http://localhost:8080/angular-demo-impl/rest/hello').success(function(data) {
    $scope.greeting = data;
  });
  
  $http.get('http://localhost:8080/angular-demo-impl/rest/users').success(function(data) {
    $scope.users = data;
  });
});