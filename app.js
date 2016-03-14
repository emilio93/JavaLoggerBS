/*
    Emilio Rojas
    Version 1.0
    9/2/2016
 */

var LogViewer = angular.module('LogViewer', []);
LogViewer.factory('LogAccess', ['$http', function() {
    var source = {};
    source.getLogList = function() {
        return $http({
            method: 'POST',
            url: 'worker.php',
            data: {request: 'logList'}
        });
    };
    
    source.getLogFile = function(logFile) {
        return $http({
            method: 'POST',
            url: 'worker.php',
            data: {request: 'getLog', logFile: logFile}
        });
    };
}])

LogViewer.controller('LogCtrl', ['$scope', '$http', 'LogAccess' function($scope, $http, LogAccess) {

    // El worker que responde a los requests.
    var url = 'worker.php';

    // La lista de archivos.
    $scope.logs = [];

    // Carga la lista de los archivos.
    $scope.loadLogs = function() {
        LogAccess.getLogList().then(function(response){$scope.logs = response.data;});
    };

    // Carga el archivo seleccionado.
    $scope.selectLog = function() {
        LogAccess.getLogFile($scope.selectedLog).then(function(response){$scope.logInfo = response.data;});
        $scope.loadLogs();
    };

    $scope.loadLogs();
}]);
