const express = require('express');
const PORT = 4000;
const app = express();
let absolutePath = __dirname.replace(/(?:\\)?\\/g, "/").split('/');
absolutePath.pop();
absolutePath = absolutePath.join('/');
const bodyParser = require('body-parser');

/* use public folder for css files */
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get("/app", (req, res) => {
  res.sendFile(absolutePath+'/App/App.html');
})

/* start server */
app.listen(PORT, () => {
    console.log(`Server started on port ::${PORT}:: at http://localhost:${PORT}`);
});