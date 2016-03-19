/*
    Emilio Rojas
    Version 1.1
    9/2/2016

    changelog
    1.0
        -versión inicial.
    1.1
        -se elimina dependencia $http del controlador LogCtrl.
        -se devuelce source en el factory LogAccess.
 */
var LogViewer = angular.module('LogViewer', []);

LogViewer.factory('LogAccess', ['$http', function() {
    var source = {};
    var url = 'worker.php';
    var method = 'POST';
    source.getLogList = function() {
        return $http({
            method: method,
            url: url,
            data: {request: 'logList'}
        });
    };

    source.getLogFile = function(logFile) {
        return $http({
            method: method,
            url: url,
            data: {request: 'getLog', logFile: logFile}
        });
    };
    return source;
}]);

LogViewer.controller('LogCtrl', ['$scope', 'LogAccess' function($scope, LogAccess) {

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

    // Se cargan los archivos al iniciarse el controlador.
    $scope.loadLogs();
}]);
