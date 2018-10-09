const axios = require("axios");
// let infoLogin = { "apikey"  : "GXR3Q3NTMOYBOLWZ", "username": "victor_jaunnol", "userkey" : "U1R5EGZ3K877ZJMI" };
// let config = { headers: {
// 	'Content-Type': 'application/json',
// 	'Authorization': "getToken"
// }};


let token;
axios.post("https://api.thetvdb.com/login", infoLogin, config)
.then(resp => {
	config.headers['Authorization'] = "bearer " + resp.data.token;
	config.header = JSON.stringify(config.headers);
	console.log(infoLogin, config);
	axios.get("https://api.thetvdb.com/languages", null, config)
	.then(resp => console.log(resp)).catch(e => console.log(`LANG::ERRO ${e.response.status}: ${e.response.statusText}.`));
})
.catch((e) => console.log(`LOGIN::ERRO ${e.response.status}: ${e.response.statusText}.`));