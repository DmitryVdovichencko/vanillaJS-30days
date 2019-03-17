const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data))

function filterArr(str, cities){
	return cities.filter(place => {
		const regExp = new RegExp(str, 'gi');
  		return place.city.match(regExp)||place.state.match(regExp)
	})
}
const searchInput = document.querySelector('.search'), suggestions = document.querySelector('.suggestions');
function highlight(strQuery,strResult){
	const query = new RegExp(strQuery, 'gi');
	return strResult.replace(query,`<span class='hl'>${strQuery}</span>`)
}
function displayResults(){
	
	const matchArr = filterArr(this.value,cities);
	
	const html = matchArr.map(item=>{
		const formatPopulation = (population)=> population.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		const city = highlight(this.value,item.city), state = highlight(this.value,item.state);
		
		
		return `<li>
			<span class="city">${city}, ${state}</span>
			<span class="population">${formatPopulation(item.population) }</span>
		</li>`

		
	}).join('');
	
	suggestions.innerHTML = html;
}
searchInput.addEventListener('change',displayResults);
searchInput.addEventListener('keyup',displayResults);


	
	




