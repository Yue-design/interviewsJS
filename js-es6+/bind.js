/*
bind

returns a new function, allowing you to pass in an array and any number of arguments
*/

var employee = {firstName: 'John', lastName: 'Smith'};

function invite(greeting1, greeting2) {
  console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName + ', ' + greeting2);
}

var inviteEmployee = invite.bind(employee);
inviteEmployee('Hello', 'How are you?');