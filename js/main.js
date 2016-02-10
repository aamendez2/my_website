//initialize the jQueryAjax function when the page loads
function initialize(){
    jQueryAjax();
};
	
	//Create the AJAX function
	function jQueryAjax (){
		//Take in/get the path of the MegaCities.geojson and take in the settings (Datatype and callback success)
		$.ajax("data/MegaCities.geojson",{
				//specify the dataType as the file extenion of MegaCities
				dataType: "json",
				success: callback
		});
	};
	
	//make a callback function and print out the GeoJSON file as plain text
	function callback(data){
		console.log(JSON.stringify(data));
	};
	
	//This shose that the data cannot be accessed outside of the callback function
    console.log(mydata);
	
//call the initialize function to load the webpage
window.onload = initialize();	




//debug stuff

function debugCallback(response){
	
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
};

function debugAjax(){
	
	var mydata;

	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			
				mydata = response;
				
			debugCallback(mydata);
		}
	});

	$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};

$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));