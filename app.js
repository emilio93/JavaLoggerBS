/*
    Emilio Rojas
    Version 1.0
    9/2/2016
 */

var LogViewer = angular.module('LogViewer', []);

LogViewer.controller('LogCtrl', ['$scope', '$http', function($scope, $http) {

    // El worker que responde a los requests.
    var url = 'worker.php';

    // La lista de archivos.
    $scope.logs = [];

    // El contenido del archivo cargado.
    $scope.xml = '';

    // Carga la lista de los archivos.
    $scope.loadLogs = function() {
        var smt;
        $http.post(url, {'request': 'logList'})
        .then( function(response) { $scope.logs = response.data; });
    }

    // Carga el archivo seleccionado.
    $scope.selectLog = function() {
        $http.post(url, {'request': 'getLog', 'logFile': $scope.selectedLog})
        .then( function(response){ $scope.logInfo = response.data; });
        $scope.loadLogs();
    }

    $scope.loadLogs();
}]);
