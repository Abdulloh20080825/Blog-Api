require('dotenv');
const express = require('express');
const app = express();
const PORT = 4000 || process.env.PORT;

app.get('/', (req, res) => {
	res.send('Backend is working');
});

app.listen(PORT, () => {
	console.log(`Server has been started on PORT: http://localhost:${PORT}`);
});
