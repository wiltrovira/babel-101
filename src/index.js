'use strict';

import express from 'express';
import open from 'open';

const port = 3000;
const app = express();

app.get('/', function(request, response){
	response.sendFile('index.html');
});

app.listen(port, function(err){
	if(err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
