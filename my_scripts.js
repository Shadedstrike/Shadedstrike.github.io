$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
});





var id_counter = 1;

function addCard(input_id){
  const parent_id = typeof input_id === 'string' ? input_id : input_id.id;

	console.log('addcard called, calling id= ', input_id);

  //var stringg = id_num.ro
	var new_id = 'card' + id_counter.toString();
	console.log(new_id);

	var newCard = document.createElement('div');
	newCard.classList.add('card');
	newCard.id = new_id;

	var tweet = $(`
	<div id='${new_id}' class='card'>
		<div class='card-body text-dark'>
			<h5 class='card-title'>Sample card! :C</h5>
			<p class='card-text'>sample card text goes here.</p>
		</div>
		<div class='card-footer text-center display-flex'>
			<button type='button'  onclick='addCard(${parent_id})' class='btn btn-primary btn-sm float-left '>+</button>
			<button type='button'  onclick='deleteCard(${new_id})' class='btn btn-danger btn-sm float-right '>x</button>
		</div>
	</div>`);
	tweet.appendTo($(`#${parent_id}`));

//	newCard.innerHTML = "<div class='card-body text-dark'><h5 class='card-title'>help me :C</h5><p class='card-text'>I enjoy working with C++, JS, Python and Ruby.</p></div><div class='card-footer text-center'><button type='button'  onclick='addCard(interest3)' class='btn btn-primary btn-sm float-left '>+</button></div><button type='button'  onclick='deleteCard(interest3)' class='btn btn-primary btn-sm float-right '>x</button></div>";
	//document.getElementById(input_id).appendChild(newCard);


  id_counter++;
}


function deleteCard(card) {
	console.log('deletecard called', card.id);
	const cardToDelete = $(`#${card.id}`);

	cardToDelete.remove();
}
