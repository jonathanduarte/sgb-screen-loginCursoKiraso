'use strict';

angular.module('sgb-screen-loginKiraso', ['megazord'])
    .controller('sgb-screen-loginKiraso-controller', ['$scope', '_router', '_screen', '_screenParams', '$ionicPopup',function ($scope, _router, _screen, _screenParams,$ionicPopup) {
        _screen.initialize($scope, _screenParams);

        $scope.params = _screenParams;

        $scope.clearFields= function(){
            $scope.login = {
                usename : "",
                password: ""
            }
        }

        $scope.$on('$ionicView.beforeEnter', function(){
            $scope.clearFields()
        })

        $scope.goTo = function(){
            if(($scope.login.username != $scope.params.usernameValidation) ||
                ($scope.login.password != $scope.params.passwordValidation)){
                    var alerPopupPromise = $ionicPopup.alert({
                        title: 'Usuario o Contraseña Invalida',
                        template: 'Al tercer intento errado su clave sera bloqueada',
                        okText: 'Cerrar' && $scope.clearFields(),
                        okType: 'button-calm',
                        cssClass:'animated'
                    })
                }
                else{
                    _router.fireEvent({
                        name: 'goTo',
                    });
                }
        }

    }]);
