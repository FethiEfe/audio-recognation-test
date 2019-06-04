const express = require("express");
const app = express();
var multer = require('multer')
var cors = require('cors');

var storage = multer.diskStorage({
    destination: './files',
    filename(req, file, cb) {
        cb(null, `${new Date()}-${file.originalname}`);
    
    }
});

var upload = multer({storage});


const rc = require("./req_controller");

const SERVER_PORT = 4000
app.use(express.json());
app.use(cors())

app.post('/api/audd', upload.single('file'), rc.getAudd);

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));