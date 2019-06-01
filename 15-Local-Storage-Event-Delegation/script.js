  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];
  const clearButton = document.querySelector('#clear');
  const selButton = document.querySelector('#select');
  const unSelButton = document.querySelector('#unselect');

  function addItem(e) {
  	// by default page reloading after user submit a form
  	e.preventDefault();
  	const text = (this.querySelector('[name=item]')).value;
  	const item = {
  		text,
  		done:false
  	};

 
  	items.push(item);
  	displayList(items, itemsList);
  	localStorage.setItem('items',JSON.stringify(items));
  	this.reset();
  	
  }
  function displayList( plates = [], platesList){
  	platesList.innerHTML = plates.map((plate,i)=>{
  		return `
  		<li>
  			<input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
  			<label for="item${i}">${plate.text}</label>
  		</li>
  		`
  	}).join(' ');


  }
  function toggleDone(e){
  	if(!e.target.matches('input')) return;
  	
  	const el = e.target
  	const index = el.dataset.index;

  	items[index].done = !items[index].done;
  	localStorage.setItem('items',JSON.stringify(items));
  	displayList(items, itemsList);
  }
  function clearAll(e) {
  	
  	if (items.length>0)	items.splice(0,items.length);
  	displayList(items, itemsList);
  	localStorage.setItem('items',JSON.stringify(items));

  }
  function setAll(value){
  	items.forEach(function(item){
  		item.done = value;
  	});
  	displayList(items, itemsList);
  	localStorage.setItem('items',JSON.stringify(items));
  }

  addItems.addEventListener('submit',addItem);
  itemsList.addEventListener('click', toggleDone);
  clearButton.addEventListener('click', clearAll);
  selButton.addEventListener('click', function(){
  	setAll(true);
  });
  unSelButton.addEventListener('click',function(){
  	setAll(false);
  });
  displayList(items, itemsList);