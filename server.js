const express = require('express');
const PORT= process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiroutes/notesRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})