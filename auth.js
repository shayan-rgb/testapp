const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

// The rest of your code...

AWSCognito.config.region = "eu-west-1"; // e.g. us-east-1

let poolData = {
  UserPoolId: "eu-west-1_HjqCixhD6",
  ClientId: "13aqvue1rfc160vrjbreg2aa6c",
};
let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

function signIn() {
  let username = document.getElementById("signInUsername").value;
  let password = document.getElementById("signInPassword").value;

  let authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
    Username: username,
    Password: password,
  });

  let cognitoUser = new AmazonCognitoIdentity.CognitoUser({
    Username: username,
    Pool: userPool,
  });

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (session) {
      console.log("authentication successful", session);
      window.location.href = "dashboard.html"; // Redirect to another HTML page upon successful login
    },
    onFailure: function (err) {
      alert(err.message || JSON.stringify(err));
    },
  });
}
