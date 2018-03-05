const nodeArr = [
	{	
		title: "Liri Node App",
		description: "Application that allows you to buy and sell items on a command line"
	},
	{	
		title: "Node Hangman",
		description: "Command line Hangman"
	},
	{	
		title: "Hot Resturant",
		description: "App that allows you to place a reservation at a resturant and if it exceeds 5 people you will be placed on the waiting list"
	}
]

$("#node").on("click", function(){
    // $('#projectContainer').html("");
    nodeFolder();
  })

function nodeFolder(){
	for (let i = 0; i < nodeArr.length; i++){
		$('#proCards').html('<div class="card" style="width: 18rem;">');
		$('.card').html('<div class="card-body">');
		$('.card-body').html('<h5 class="card-title">' + nodeArr[i].title + '</h5>' +
			    '<p class="card-text">' + nodeArr[i].description + '</p>' +
			    '<a href="#" class="btn btn-primary">View Code</a>');
	}
	
}