//Main file
// function myFunc
// {
// var mydiv = document.getElementById("mydiv");
// mydiv.innerHTML = "Hello World";
// };
// windows.onload = myFunc	();

// function initialize(){
//     cities();
// };


// function cities(){
    
//     var cityPop = [
//         { 
//             city: "Madison",
//             population: 243344
//         },
//         {
//             city: "Sauk City",
//             population: 3472
//         },
//         {
//             city: "New York",
//             population: 8406000
//         },
//         {
//             city: "Tokyo",
//             population: 13230000
//         }
//     ];

    
//     $("#mydiv").append("<table>");
    
//     $("table").append("<tr>");
    
//     $("tr").append("<th>City</th><th>Population</th>");

//     for (var i = 0; i < cityPop.length; i++){
//         //assign longer html strings to a variable
//         var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
//         //add the row's html string to the table
//         $("table").append(rowHtml);
//     };
// };

// $(document).ready(initialize);


///////////////////////////////////////////////////////////////////////
//////////////////// /   /   /   /  /  /  /  /////////////////////////
/////////////////// /   /   /   /  /  /  /  /////////////////////////
////////////////// /   /   /   /  /  /  /  /////////////////////////
///////////////// /   /   /   /  /  /  /  /////////////////////////
//////////////// /   /   /   /  /  /  /  /////////////////////////
/////////////// /   /   /   /  /  /  /  /////////////////////////
////////////// /   /   /   /  /  /  /  /////////////////////////
///////////// /   /   /   /  /  /  /  /////////////////////////
//////////// /   /   /   /  /  /  /  /////////////////////////
/////////// /   /   /   /  /  /  /  /////////////////////////
////////// /   /   /   /  /  /  /  /////////////////////////
///////// /   /   /   /  /  /  /  /////////////////////////
//////// /   /   /   /  /  /  /  /////////////////////////
/////// /   /   /   /  /  /  /  /////////////////////////
////// /   /   /   /  /  /  /  /////////////////////////
///// /   /   /   /  /  /  /  /////////////////////////
//// /   /   /   /  /  /  /  /////////////////////////
/// /   /   /   /  /  /  /  /////////////////////////
// /   /   /   /  /  /  /  /////////////////////////
///////////////////////////////////////////////////

function addColumns(cityPop)
{
    
    $('tr').each(function(i)
    {

    	if (i == 0)
    	{

    		$(this).apend('<th>City Size</th>');
    	} 
    	else 
    	{

    		var citySize;

    		if (cityPop[i-1].population < 100000)
    		{
    			citySize = 'Small';

    		} 
    		else if (cityPop[i-1].population < 500000)
    		{
    			citysize = 'Medium';

    		} 
    		else
    		{
    			citySize = 'Large';
    		}

    		$this.append('<td' + citySize + '</td>');
    	};
    };
};

function addEvents()
{

	$('#table').mouseover(function()
	{
		
		var color = "rgb(";

		for (var i=0; i<3; i++)
		{

			var random = Math.round(Math.random() * 255);

			color += "random";

			if (i<2)
			{
				color += ",";
			
			}
			 else 
			{
				color += ")";
			}
		};

		$(this).css('color', color);
	};

	function clickMe()
	{

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickMe);
};