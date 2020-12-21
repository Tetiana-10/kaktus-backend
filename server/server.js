// require express and other modules
const express = require('express');
const app = express();
// Express Body Parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set Static File Directory
app.use(express.static(__dirname + '/public'));
app.use(function (req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/************
 * DATABASE *
 ************/

const db = require('./models');

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to kaktus api!',
    documentationUrl: '', //leave this also blank for the first exercise
    baseUrl: '', //leave this blank for the first exercise
    endpoints: [
      {method: 'GET', path: '/api', description: 'Describes all available endpoints'},
      {method: 'GET', path: '/api/profile', description: 'Data about me'},
      {method: 'GET', path: '/api/settings/', description: 'Get your settings information'},
      {method: 'POST', path: '/api/settings/', description: 'Insert new settings information'},
      {method: 'PUT', path: '/api/settings/', description: 'Update settings information, based on id'},
      {method: 'DELETE', path: '/api/settings/', description: 'Delete settings information, based on id'},
      // TODO: Write other API end-points description here like above
    ]
  })
});

app.get('/api/profile', (req, res) => {
  res.json({
    'name': 'John',
    'homeCountry': 'Winterfell',
    'degreeProgram': 'Night\'s Watch',//informatics or CSE.. etc
    'email': 'john@got.com',
    'deployedURLLink': '',//leave this blank for the first exercise
    'apiDocumentationURL': '', //leave this also blank for the first exercise
    'currentCity': 'The Wall',
    'hobbies': ['Fight White Walkers']

  });
});
var temperature = 0;

app.get('/default', (req, res) => {
  /*
   * use the books model and query to mongo database to get all objects
   */
    //res.json(40);
    res.json(temperature);
});

app.post('/default', (req, res) => {
  /*
   * use the books model and query to mongo database to get all objects
   */
    temperature = Number(req.body.tesmerature);
    res.json(req.body);
});




/*
 * Get All books information
 */
app.get('/api/settings/', (req, res) => {
  /*
   * use the books model and query to mongo database to get all objects
   */
  db.settings.find({}, function (err, settings) {
    if (err) throw err;
    /*
     * return the object as array of json values
     */
    res.json(settings);
  });
});
/*
 * Add a book information into database
 */
app.post('/api/settings/', (req, res) => {
  /*
   * New Book information in req.body
   */
  console.log(req.body);
  /*
   * use the books model and create a new object
   * with the information in req.body
   */
  db.settings.create(req.body, (err, newSetting) => {
    if (err) throw err;
    /*
     * return the new book information object as json
     */
    res.json(newSetting);
  });
});

/*
 * Update a book information based upon the specified ID
 */
app.put('/api/settings/:id', (req, res) => {
  /*
   * Get the book ID and new information of book from the request parameters
   */
  const settingId = req.params.id;
  const settingNewData = req.body;
  console.log(`book ID = ${bookId} \n Book Data = ${bookNewData}`);
  /*
   * use the books model and find using the bookId and update the book information
   */
  db.books.findOneAndUpdate({_id: bookId}, bookNewData, {new: true},
                            (err, updatedBookInfo) => {
    if (err) throw err;
    /*
     * Send the updated book information as a JSON object
     */
    res.json(updatedBookInfo);
  });
});
/*
 * Delete a book based upon the specified ID
 */
app.delete('/api/settings/:id', (req, res) => {
  /*
   * Get the book ID of book from the request parameters
   */
  const bookId = req.params.id;
  /*
   * use the books model and find using the bookId and delete the book
   */
  db.books.findOneAndRemove({_id: bookId}, (err, deletedBook) => {
    if (err) throw err;
    /*
     * Send the deleted book information as a JSON object
     */
    res.json(deletedBook);
  });
});
// TODO:  Add API end point /api/exercise2
/**********
 * SERVER *
 **********/

// listen on the port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
