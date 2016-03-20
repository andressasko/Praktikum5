function randoM(){
var items = document.querySelectorAll('.bead');
var itemsCollection = [];

for(var i = 0, l = items.length; i < l; i++) {
	itemsCollection.push(items[i]);
	
	items[i].addEventListener('click', function() {
		if (this.classList.contains('left')) {
			this.classList.remove('left')
		} else if (!this.classList.contains('left')) {
			this.classList.add('left')
		}
	})}
}
window.onload = randoM();
