//top 5
const nodeArr = [
	{	
		title: "Liri Node App",
		description: "Application that allows you to buy and sell items on a command line",
		code: "https://github.com/Code4GG/liri-node-app"
	},
	{	
		title: "Node Hangman",
		description: "Command line Hangman",
		code: "https://github.com/Code4GG/node-hangMan"
	},
	{
		title: "Eat-Da-Burger(handlebars)",
		description: "You can add a burger into the database and eat it which is displyed through handlebars",
		code: "https://github.com/Code4GG/burger"
	},
	{
		title: "Friend Finder",
		description: "Matches you up with a friend based on what you scored on a general personality test",
		code: "https://github.com/Code4GG/friendFinder"
	},
	{
		title: "Hot Resturant",
		description: "Allows you to place a reservation and determines weather you are on the waiting list or not based on how many reservations in the db",
		code: "https://github.com/Code4GG/HotRestaurant"
	},
	{
		title: "bAmazon",
		description: "Interacts with a database that lets users/employers buy/restock through a database",
		code: "https://github.com/Code4GG/bAmazon"
	}
];

const jsArr = [
	{
		title: "Camping Project",
		description:"Site that allows you to view each camp site across america based on state and shows you information and trails of that place, along with a map of the location. It also has a modal display of to dos and a section for non profits.",
		code: "https://github.com/Code4GG/CampingProject"
	},
	{
		title: "Gif Tastic",
		description: "App that interacts with the giphy api and allows you to type in an animal to display",
		code: "https://github.com/Code4GG/GifTastic"
	},
	{
		title: "GOT Trivia",
		description: "Game of thrones trivia using gifs to respond if the user guessed correctly or not",
		code:"https://github.com/Code4GG/TriviaGame"
	},
	{
		title: "Developer Hangman",
		description: "Using events keys to track if the user guesses the letters correctly",
		code: "https://github.com/Code4GG/Hangman"
	},
	{
		title: "Array Cardio",
		description: "Excersize using filter, map, sort to interact with an array",
		code: "https://github.com/Code4GG/arrayCardio/blob/master/javascript/array.js"
	},
];

// const sqlArr = [
// 	{
// 		title: "Eat-Da-Burger(handlebars)",
// 		description: "You can add a burger into the database and eat it which is displyed through handlebars",
// 		code: "https://github.com/Code4GG/burger"
// 	},
// 	{
// 		title: "Friend Finder",
// 		description: "Matches you up with a friend based on what you scored on a general personality test",
// 		code: "https://github.com/Code4GG/friendFinder"
// 	},
// 	{
// 		title: "Hot Resturant",
// 		description: "Allows you to place a reservation and determines weather you are on the waiting list or not based on how many reservations in the db",
// 		code: "https://github.com/Code4GG/HotRestaurant"
// 	},
// 	{
// 		title: "bAmazon",
// 		description: "Interacts with a database that lets users/employers buy/restock through a database",
// 		code: "https://github.com/Code4GG/bAmazon"
// 	},
// ]

const phpArr = [
	{
		title: "PhP Weather Scraper",
		description: "Uses Open weather api to display weather in any location",
		code: "https://github.com/Code4GG/php-weatherScraper"
	},
	{
		title: "PhP Contact Form",
		description: "Sends an email with the user comment to the address provided",
		code: "https://github.com/Code4GG/php-contactForm/tree/master/public_html"
	}
];

const cssArr = [
	{
		title: "Bootstrap app landing page",
		description: "Using Bootstrap to come up with a nice theme",
		code: "https://github.com/Code4GG/bootstrap-app-landingpage"
	},
	{
		title: "CSS variables",
		description: "Integrades css variables to play with an image",
		code: "https://github.com/Code4GG/cssVariables"
	},
	{
		title: "BBC mockup",
		description: "Webpage that has an amazing layout",
		code: "https://github.com/Code4GG/BBChomepageMockup"
	},
	{
		title: "Responsive Portfolio",
		description: "Portfolio edited to work with Responsiveness",
		code: "https://github.com/Code4GG/Responsive-Portfolio"
	},
	{
		title: "Basic Portfolio Hw",
		description: "First ever webview made",
		code: "https://github.com/Code4GG/Basic-Portfolio-hw"
	}	
];


$("#node").on("click", function(){
	$('.list-group').html("");
    nodeFolder();
  });

$("#js").on("click", function(){
	$('.list-group').html("");
    jsFolder();
  });

$("#php").on("click", function(){
	$('.list-group').html("");
    phpFolder();
  });

$("#css").on("click", function(){
	$('.list-group').html("");
    cssFolder();
  })

function nodeFolder(){

	for (let i = 0; i < nodeArr.length; i++){
		$('.list-group').append('<li class="list-group-item" style="margin: 10px; width: 1000px;"><h5 class="card-title">' + nodeArr[i].title + '</h5>' +
			    '<p class="card-text">' + nodeArr[i].description + '</p>' +
			    '<a href="' + nodeArr[i].code +  '" class="btn btn-primary">View Code</a></li>').css('width', '18rem');
	}	
}

function jsFolder(){

	for (let i = 0; i < jsArr.length; i++){
		$('.list-group').append('<li class="list-group-item" style="margin: 10px; width: 1000px;"><h5 class="card-title">' + jsArr[i].title + '</h5>' +
			    '<p class="card-text">' + jsArr[i].description + '</p>' +
			    '<a href="' + jsArr[i].code +  '" class="btn btn-primary">View Code</a></li>').css('width', '18rem');
	}	
}

function phpFolder(){

	for (let i = 0; i < phpArr.length; i++){
		$('.list-group').append('<li class="list-group-item" style="margin: 10px; width: 1000px;"><h5 class="card-title">' + phpArr[i].title + '</h5>' +
			    '<p class="card-text">' + phpArr[i].description + '</p>' +
			    '<a href="' + phpArr[i].code +  '" class="btn btn-primary">View Code</a></li>').css('width', '18rem');
	}	
}
function cssFolder(){

	for (let i = 0; i < cssArr.length; i++){
		$('.list-group').append('<li class="list-group-item" style="margin: 10px; width: 1000px;"><h5 class="card-title">' + cssArr[i].title + '</h5>' +
			    '<p class="card-text">' + cssArr[i].description + '</p>' +
			    '<a href="' + cssArr[i].code +  '" class="btn btn-primary">View Code</a></li>').css('width', '18rem');
	}	
}