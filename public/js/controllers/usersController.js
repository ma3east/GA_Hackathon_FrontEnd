angular
  .module("eventMatchApp")
  .controller("usersController", UserController);

  UserController.$inject = ['User', 'CurrentUser']  
  function UserController(User, CurrentUser){
    var self = this;

    init();

    function init() {
      self.currentUser = CurrentUser.check()
      self.all = [];
      self.user = {};
    }

    self.login = function () {
      User.login(self.user, login);
    }
    function login(response) {
      self.currentUser = CurrentUser.login(response.token);
      init()
    }
    
    self.signup = function () {
      User.signup(self.user, login);
    }
    
    self.logout = function () {
      self.currentUser = CurrentUser.logout();
      init()
    } 

    return self; 
}  