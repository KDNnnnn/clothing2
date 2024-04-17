const express = require('express');
const app = express();
const PORT = 3001;


const optionsData = [
    { website: 'Google' },
    { website: 'From friends or family' }
    
];


app.get('/3000', (req, res) => {
    res.json(optionsData);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


