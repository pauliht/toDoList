class App{

	constructor(){
		this.eventClick();

		this.todo = new List('.list');
		this.done = new List('.done-list');

		JSON._load('todo')
			.then((data) => {
			  this.todo = data.stuff;
			  this.todo.render();
			})
			.catch((errorMessage) => {
				console.log(errorMessage);
			});

		JSON._load('done-list')
			.then((data) => {
			  this.done = data.stuff;
			  this.done.render();
			})
			.catch((errorMessage) => {
				console.log(errorMessage);
			});
	}


	eventClick(){
		let that = this;

		function add(){
			let text = $('#input').val();
			if (text != '') {
				that.todo.add(text);
				$('#input').val('');
			}
		}


		$('#add').click(function(){
			add();
		});


		$('#input').on('keyup', function(event){
			if (event.key == 'Enter'){
				add();
			}
		});


		$(document).on('click','.moveUp',function(){
			let text = $(this).closest('li').data('name');
			$('#input').val('');
			that.todo.moveUp(text);
		});


		$(document).on('click','.moveDown',function(){
			let text = $(this).closest('li').data('name');
			$('#input').val('');
			that.todo.moveDown(text)
		});


		$(document).on('click', '.remove', function(){
			let text = $(this).closest('li').data('name');
			that.todo.removeName(text);
		});


		$(document).on('click', '.remove2', function(){
			let text = $(this).closest('li').data('name');
			that.done.removeName(text);
		});


		$(document).on('click','.donebtn',function(){
			let text = $(this).closest('li').data('name');
			$('#input').val('');
			that.todo.addToDone(text);
		});


		$(document).on('click','.back',function(){
			let text = $(this).closest('li').data('name');
			that.done.removeName(text);
			that.todo.add(text);
		});
	}
}