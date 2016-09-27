angular.module('shoppingCart.ctrl',[]).controller('productsController',['$scope','$http','$location', function($scope,$http,$location){
  
  $scope.productList = [];
  $scope.showAll = function(product){
    console.log(product);
    $scope.fullDescription = product;
    console.log($scope.fullDescription)
  }
//  
//  $scope.pTitle = '';
//  $scope.pDesc = '';
//  $scope.pPrice = 0;
  
  $http.get('code/data/products.json')
    .success(function(response){
      console.log(response)
      $scope.productList = $scope.productList.concat(response);
      console.log($scope.productList)
    })
  
  
  
  $scope.addItem = function(){
    let newProduct = {
      'id' : $scope.productList.length,
      'title': $scope.pTitle,
      'description': $scope.pTitle,
      'price':parseFloat($scope.pPrice)
    }
    
    $scope.productList.push(newProduct);
  }
}]);