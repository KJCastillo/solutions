// Write a function called "greetCustomer".
// Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant.
// Please refer to the customerData object. 
// The greeting should be different, depending on the name on their reservation.

var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
	//create blank greeting variable
	for (let x in customerData){
	  if (!customerData[firstName]){
   //if there is no customer name scenario
	    greeting = 'Welcome! Is this your first time?'
	  } else if (customerData[firstName].visits === 1){
    //if customer has one visit scenario
	    greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`
	  } else if (customerData[firstName].visits >= 2){
    //if customer has more than one visit scenario
	    greeting = `Welcome back, ${firstName}! So glad to see you again!`;
    //note the call for the customer name
	  }
	}
	
  return greeting;
}

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
