/*
Write a function that buids an HTML table with the data below. The table should have four columns:
first name, last name, position, and year. If the player is a Senior, her information should be in bold.
*/

var players = [
  {
    first:'Angela',
    last: 'Smith',
    position: 'Guard',
    year: 'Junior'
  },
    {
    first:'Ashley',
    last: 'Roberts',
    position: 'Guard',
    year: 'Senior'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    year: 'Freshman'
  },
   {
    first:'Catherine',
    last: 'McAllister',
    position: 'Forward',
    year: 'Senior'
  },
   {
    first:'Haley',
    last: 'Bishop',
    position: 'Center',
    year: 'Sophomore'
  },
  {
   first:'Renee',
   last: 'Williams',
   position: 'Guard',
   year: 'Senior'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  year: 'Junior'
  }
];
//Write your function here


//initialize a variable for the HTML content your going to build
var html ='';
//get the empty table content area
var tableContent = document.getElementById('table-content');
var i;



function buildTable(){
  //start with the table header
  document.write("<table>")
  document.write('<tr><th>First</th><th>Last</th><th>Position</th><th>Year</th></tr>')

  /*Now write a for loop to populate the table using the data
  /include logic to make the text bold when the player is a senior.
  Write the loop here*/


  for (row=0; row<players.length; row++){
    document.write("<tr>")
    for (col=1; col<=4; col++){
      document.write ('<td>' + players[row].first + '</td>');
      document.write ('<td>' + players[row].last + '</td>');
      document.write ('<td>' + players[row].position + '</td>');
      document.write ('<td>' + players[row].year + '</td>')
    }
    document.write("</tr>")
  }

  document.write("</table>")



  //*Now, outside of the for loop, but still inside the entire buildTable function,
  //use the tableContent and html variables to display the results in the empty tableArea
tableContent();
html();

 }


buildTable();
