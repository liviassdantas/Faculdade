//Feito por Livia Dantas e Andreza Moreira - 14/03/2019
//Modulo
var combusModulo = angular.module('combusApp', []);

//Controler 
combusModulo.controller('combusController', function($scope) {
    $scope.exibeResultados = false;
    
    //Função para calcular o IMC do usuário
    $scope.calcular = function (){
        //Calcular o IMC
        var calculaGasolina = $scope.gasolina * 0.7;
        var alcool = $scope.alcool;
        
        if (calculaGasolina > alcool){
            $scope.solucao = "Álcool";
        } 
        if (calculaGasolina < alcool){
            $scope.solucao = "Gasolina";
        }
        // else{
        //     $scope.solucao = "Indiferente. Escolha o que te agrada mais!";
        // }
        
        $scope.exibeResultados = true;
    }
    
    //Função para esconder os resultados
    $scope.esconderCalc = function (){
        $scope.exibeResultados = false;
    }
    
});
