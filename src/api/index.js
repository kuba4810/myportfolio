var express = require('express');
var app = express();
const cors = require('cors');

/* Settings */
app.use(express.static('public'));
app.use(cors());
/* ------------------------------- */

app.listen(3000,()=>{
    console.log("App listen on port 5000...");
});