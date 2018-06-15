eventsApp.controller('EditEventController', 
    function EditEventController($scope){
        $scope.saveEvent = function(event, newEventForm) {
            window.alert(event.name);
            
        };
        $scope.cancelEvent = function(){
            window.alert("cancel");
            window.location = './EventDetails.html';
        };
});