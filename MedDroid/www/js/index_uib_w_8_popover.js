function uib_w_8_popover_controller($scope, $ionicPopover) {
  $scope.popover = $ionicPopover.fromTemplate($(".uib_w_8").html(), {
    scope: $scope
  });

  $scope.show = function($event) {
    $scope.popover.show($event);
  };
  $scope.close = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
};