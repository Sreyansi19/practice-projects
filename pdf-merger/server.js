const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
const {mergePdfs}= require('./merge')
const upload = multer({ dest: 'uploads/' }) //creates a upload folder to upload and store the json files of the uploaded files
app.use('/static',express.static('public'))
const port = 3000


app.get('/', (req, res) => {
  // res.send('Hello World2hello!')     //changing it will not reflect on the browser directly, we nned to restart the server 
   res.sendFile(path.join(__dirname, 'templates/index.html'))
})
app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
  console.log(req.files)
  await mergePdfs(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path) // Use req.files instead of req.file
  );
  // res.send({data: req.files})   //return the file to the browser and also uploads the file in the uploads folder
  res.redirect("http://localhost:3000/static/merged.pdf")

  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})                           //got it from the multer middleware in express.js
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
