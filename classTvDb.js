const axios = require("axios");
class tvdb {
	constructor(){
		this.apikey = "GXR3Q3NTMOYBOLWZ";
		this.username = "victor_jaunnol";
		this.userkey = "U1R5EGZ3K877ZJMI";
		this.result = [];
		this.resultSearch = [];
		this.config = {
				headers: { 
					'accept-language': 'pt',
					'Content-Type': 'application/json',
					'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzkwNjUxMTEsImlkIjoiIiwib3JpZ19pYXQiOjE1Mzg5Nzg3MTEsInVzZXJpZCI6NTEyNjQxLCJ1c2VybmFtZSI6InZpY3Rvcl9qYXVubm9sIn0.CVhjzo3GWlTJXfC9cbWCwbVuvfWjFgH9grbljFYYNcn6rJqKGj9NBVWZ5_9Z7m4Db6vAxSGbB1GTd7zf1zkwol0EGt025VIogNsV4sfRgT0XuedEkJ3Oln-v9WXeemaTi-A9s3wQIlHhz3DUgClHucgUYBzF_QTaOpIScaJK-KIa0NwmG8JZ2prWVU0317LwqHb6LBTg4E2iixsLKgJzUad41-lVGhBvFX5K30IM0QWNSnDYniJyf16uwysiBWAhgG_ON5sbsnJxBSYo7ykSmpexXWfE9EJultD0_Vp6vk_5WqeUepfA0XnI4--2iUXX8A6brTBMlSdrM3X6SatPZg`
				}};
		this.getToken();
	}
	getToken(){
		axios.post("https://api.thetvdb.com/login", this)
		.then(resp => {
			this.config = {
				headers: { 
					'accept-language': 'pt',
					'Content-Type': 'application/json',
					'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzkwNjUxMTEsImlkIjoiIiwib3JpZ19pYXQiOjE1Mzg5Nzg3MTEsInVzZXJpZCI6NTEyNjQxLCJ1c2VybmFtZSI6InZpY3Rvcl9qYXVubm9sIn0.CVhjzo3GWlTJXfC9cbWCwbVuvfWjFgH9grbljFYYNcn6rJqKGj9NBVWZ5_9Z7m4Db6vAxSGbB1GTd7zf1zkwol0EGt025VIogNsV4sfRgT0XuedEkJ3Oln-v9WXeemaTi-A9s3wQIlHhz3DUgClHucgUYBzF_QTaOpIScaJK-KIa0NwmG8JZ2prWVU0317LwqHb6LBTg4E2iixsLKgJzUad41-lVGhBvFX5K30IM0QWNSnDYniJyf16uwysiBWAhgG_ON5sbsnJxBSYo7ykSmpexXWfE9EJultD0_Vp6vk_5WqeUepfA0XnI4--2iUXX8A6brTBMlSdrM3X6SatPZg`
				}};
		})
		.catch(error => console.log(`ERRO ${error.response.status}: ${error.response.statusText}.`));
	}
	getLang(){
		axios.get("https://api.thetvdb.com/languages", this.config)
		.then(resp => {
			console.log(resp.data);
		})
		.catch(error => console.log(`ERRO ${error.response.status}: ${error.response.statusText}.`));
	}
	searchSerie(param){
		return axios.get("https://api.thetvdb.com/search/series?name="+param, this.config);
	}
}
let tv = new tvdb();
let rs = async () => {

}
let res = [];
tv.searchSerie("robot").then(data => {
	res.push(data.data.data.map(e => e.status));
}).then(() => console.log(res.shift())).catch(err => console.log(err));
// setInterval(() => console.log(tv.resultSearch), 2000);