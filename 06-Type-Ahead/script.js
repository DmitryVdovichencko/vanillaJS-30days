const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let promise = fetch(endpoint);
const cities = [];
const toggleChildsClass=(parent,className) => {
	let elems=parent.children;
	elems = Array.prototype.slice.call(elems);
	elems.forEach(function(item, i, arr) {
  item.classList.toggle(className);
});
	console.log(elems);
}
const addElemsFromArr = (parent, arr, tagName){
	const newEl = document.createElement(tagName);
	arr.forEach(function(item, i, arr){
		const textElem = document.createTextNode(item)
		parent.appendChild(newEl).innerHTML(item)
	});
}
console.log(promise);
promise
	.then(blob => blob.json())
	.then(data => cities.push(...data))
	.then(toggleChildsClass(document.querySelector(".suggestions"),"hide"));


