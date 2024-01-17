

class MarvelService { 
	  getResourse=async(url)=> {
		let res = await fetch(url);
		if (!res.ok) { 
			throw new Error(`Could not fetch ${url},status ${res.status}`)
		}
		return await res.json();
	}
	getAllCharacters = () => { 
		return this.getResourse("https://gateway.marvel.com:443/v1/public/characters?apikey=086d0cbebc54f84aaf54ebf4685baf20");
	}
}
export default MarvelService