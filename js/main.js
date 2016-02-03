//Main file
// function myFunc
// {
// var mydiv = document.getElementById("mydiv");
// mydiv.innerHTML = "Hello World";
// };
// windows.onload = myFunc	();
function initialize()
{
	cities();
};

function cities()
//two arrays for pop and city
{
	var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
}
];

$("mydiv").append("<table>");

$("table").append("<tr>");

$("tr").append("<th>City</th><th>Population</th>");
 $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
};

//call the initialize function when the document has loaded
$(document).ready(initialize);

