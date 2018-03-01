class Activity{

	constructor(activity){
		this.text = activity;
	}

	getHtml(className){
		let result = `
			<li class="list-group-item" data-name="${this.text}">
			<div class="row">
				<div class="col-12 col-xl-6">
					<span>${this.text}</span>
				</div>
				`;

		if(className == '.list') {
			result += `
				<div class="col-12 col-xl-6">
					<button class="btn moveUp"><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
		      <button class="btn moveDown"><i class="fa fa-arrow-down" aria-hidden="true"></i></button>
					<button class="btn remove"><i class="fa fa-trash" aria-hidden="true"></i></button>
					<button class="btn donebtn"><i class="fa fa-check" aria-hidden="true"></i></button>
				</div>`
			;
		}

		else {
			result +=
			`<div class="col-12 col-xl-6">
				<button class="btn remove2"><i class="fa fa-trash" aria-hidden="true"></i></button>
				<button class="btn back"><i class="fa fa-repeat" aria-hidden="true"></i></button>
			</div>`
			;
		}

		result += `</div></li>`;

		return result;
	}
}
