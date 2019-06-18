const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const ul = document.querySelector('#bands');
function addElementsFromArr(arr, targetElement){
	arr.forEach( item => {
		const newLi = document.createElement('li');
		newLi.innerHTML = item;
		targetElement.appendChild(newLi);
	})
}

function compareArr(oldArr, newArr){
	newArr = newArr.map(item => {
		oldArr.forEach(oldItem =>{
			if(oldItem.indexOf(item)>0) {
				item = oldItem;
			}
			

		})

		return item;
	})
	
	return newArr;
}


function getArrWithoutArticles(arr, ...articles){
	
	const newArr = arr.map(item => {
		
			articles.forEach(article => {
				item = item.replace(`${article} `,"");
			})
		
			return item;
		
	})
	return newArr;
	
}

// addElementsFromArr(bands, ul);

addElementsFromArr(compareArr(bands, getArrWithoutArticles(bands, "A","An","The").sort()), ul)