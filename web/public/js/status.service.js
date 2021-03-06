//------------------------------------------------------------------------------
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//------------------------------------------------------------------------------
(function () {
  function StatusService($http, $q) {
    console.log("Initializing StatusService...");

    return {
      status: function () {
        var deferred = $q.defer();
        $http.get("/api/status").then(function(response) { return response.data; }).then(function (data) {
          deferred.resolve(data);
        }).catch(function () {
          deferred.reject();
        });
        return deferred.promise;
      }
    };
  }

  angular.module('app')
    .service('StatusService', ['$http', '$q', StatusService]);
}());
