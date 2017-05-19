app.factory('myFactory', function($http, $q){
    var obj = {}
    obj.callServer = function(){
        var deferred = $q.defer();
        $http.get('server/server.json').then(function(data){
            deferred.resolve(data);
        }), function(error){
            deferred.reject(error);
        }
        return deferred.promise;
    }
    return obj;
})