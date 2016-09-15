angular.module('userProfiles')
.controller('profileCtrl', function( $scope ) {
	$scope.currentUser = userInfo.currentUser;
	$scope.friends = userInfo.friends;
});
