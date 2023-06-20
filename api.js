var dboperations = require('./dboperations');
var Store = require('./store');
var Staff = require('./staff');
var user = require('./user');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var sql = require('mssql');
const config = require('./dbconfig');
const cors = require('cors');


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Thay đổi '*' bằng nguồn gốc mong muốn hoặc cấu hình một cách tùy chỉnh
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/api', router);
app.use(cors());

// GET STORE //
router.route('/store').get(async (request, response) => {
    dboperations.getStore().then ( result => {
        response.status(200).json(result);
        console.log(result);
    })
});

router.route('/store/:id').get(async (request, response) => {
    dboperations.getStoreID(request.params.id).then ( result => {
        response.status(200).json(result);
        console.log(result);
    })
});

// UPDATE STORE //
router.route('/store/:id').put(async (request, response) => {
    try {
        dboperations.updateStore(request.params.id, request.body).then(result => {
            response.status(200).json(result);
        });
    } catch (err) {
        console.error(err);
        response.sendStatus(403);
    }
});

// ADD STORE //
router.route('/store').post(async (request, response) => {
    try {
        let store = { ...request.body }
        dboperations.addStore(store).then(result => {
            response.status(200).json(result);
        });
    } catch (err) {
        console.error(err);
        response.sendStatus(403);
    }
});

//DELETE STORE //
router.route('/store/:id').delete((request,response) => {
    dboperations.deleteStore(request.params.id).then(result => {
        response.status(200).json(result);
    })
})





var port = process.env.PORT || 8090;
app.listen(port, function() {
    console.log('Server is running on http://localhost:' + port);
  });