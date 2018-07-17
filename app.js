var app=angular.module("myApp", []);
app.controller("myctr", function($scope)
{
    $scope.removeUser=function(user)
    {
        var removedUser=$scope.users.indexOf(user);
        $scope.users.splice(removedUser,1);
    }
    $scope.addUsers=function(){
        $scope.users.push({
            name:$scope.newName,
            age:$scope.newAge,
            salary:$scope.newSalary,
            company:$scope.newCompany,

        })
    }
    $scope.users=[
        {
            name:"Rashmi",
            age :29,
            salary:100000,
            company:"Infosys"
        },
        {
            name:"Rani",
            age :25,
            salary:50000,
            company:"TCS"
        },
        {
            name:"Vani",
            age :30,
            salary:60000,
            company:"Wipro"
        }
    ]
})