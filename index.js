const path = require('path');
const express = require('express');


const app = express();

app.use('',express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });
});

app.get('/premium', (request, response) => {
	return response.sendFile('premium.html', { root: '.' });
});

app.get('/free', (request, response) => {
	return response.sendFile('free.html', { root: '.' });
});


app.get('/discord', (request, response) => {
	return response.redirect('https://discord.gg/rvBK7jkJPu');
});

app.get('/dc', (request, response) => {
	return response.redirect('https://discord.gg/rvBK7jkJPu');
});

app.get('/error', (request, response) => {
	return response.sendFile('error.html', { root: '.' });
});

const port = '80';
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

