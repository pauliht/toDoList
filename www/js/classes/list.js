class List{

	constructor(className){
		this.className = className;
		this.activities = [];
	}

	render(){
		$(this.className).empty();
		for(let todo of this.activities){
			$(this.className).append(todo.getHtml(this.className));
		}
		if (this.className == '.done-list') {
			this.save('done-list');
		}
		else {
			this.save('todo');
		}
	}

	add(activityText){
		this.activities.push(new Activity(activityText));
		this.render();
	}

	moveDown(activityText){
		let index = this.activities.findIndex((activity) => activity.text == activityText);
		if(index + 1 < this.activities.length){
			this.activities[index] = this.activities[index + 1];
			this.activities[index + 1]= new Activity(activityText);
			this.render();
		}
	}

	moveUp(activityText){
		let index = this.activities.findIndex((activity) => activity.text == activityText);
		if(index > 0){
			this.activities[index] = this.activities[index - 1];
			this.activities[index - 1]= new Activity(activityText);
			this.render();
		}
	}

	removeIndex(index){
		if(index >= 0){
			this.activities.splice(index, 1);
			this.render();
		}
	}

	removeName(activityText){
		let index = this.activities.findIndex((activity) => activity.text == activityText);
		this.removeIndex(index);
	}

	addToDone(activityText){
		this.removeName(activityText);
		app.done.add(activityText);
	}

	save(nameOfFile){
		JSON._save(nameOfFile, {stuff: this});
	}
}
