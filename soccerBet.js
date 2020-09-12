//For each line on your ticket, check whether or not the result matches. If it does, you win the amount specified on the ticket for that match. Like this:

//Away:£20
//Home:£10
//Draw:£5
//[1-0, 2-1, 0-1]
//Results in Winnings = £10 (first bet lost, second bet won, third bet lost);

var sum=0;
var ar1=results[0].split('-');
var ar2=results[1].split('-');
var ar3=results[2].split('-');
if(ar1[0]>ar1[1]){
  sum += parseInt(ticket.Home.match(/[0-9]+/g));
}
if(ar2[0]<ar2[1]){
  sum += parseInt(ticket.Away.match(/[0-9]+/g));
}
if(ar3[0]==ar3[1]){
  sum += parseInt(ticket.Draw.match(/[0-9]+/g));
}
return '£'+sum;

//Return your total winning as a string with the £ sign like this: '£100'
