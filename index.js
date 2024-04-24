const express = require('express')
const app = express()
const jokeAPI = require('joke-sdk')
const port = 5000
const j = jokeAPI


app.get('/',(req,res)=>{
    res.render("index.ejs")
})

app.get('/getRandomJoke', (req, res) => {
    jokeAPI.getRandomJoke()
      .then(j => res.send(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
          <title>Joxx</title>
      </head>
      <body class=" bg-blue-950">
          

      <div class="flex justify-center py-56 items-center">
      <div class="max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow-5xl dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${j.setup}</h5>
          </a>
          <p class="mb-3 font-normal text-xl text-blue-200">${j.punchline}</p>
          <div class="py-6">
          <a href="https://joxx.onrender.com/getRandomJoke" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Generate One More
          </a>
          </div>
          <a href="https://joxx.onrender.com" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Go Back
      </a>
      </div>
      </div>
      
      </body>
      </html>`))
      .catch(e => res.status(500).send(`Error: ${e.message}`));
  });
  
  app.get('/getRandomDadJoke', (req, res) => {
    jokeAPI.getRandomDadJoke()
      .then(dj => res.send(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
          <title>Joxx</title>
      </head>
      <body class=" bg-blue-950">
          

      <div class="flex justify-center py-56 items-center">
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <h5 class="mb-2 text-2xl font-bold pb-6 tracking-tight text-gray-900 dark:text-white">${dj.joke}</h5>
          </a>
          <div class="py-6">
          <a href="https://joxx.onrender.com/getRandomDadJoke" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Generate One More Dad Joke
          </a>
          </div>
          <a href="https://joxx.onrender.com" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Go Back
      </a>
      </div>
      </div>
      
      </body>
      </html>`))
      .catch(e => res.status(500).send(`Error: ${e.message}`));
  });

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
