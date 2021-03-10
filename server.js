// Require Node's http module and assign it to a variable
const http = require('http')

// Create a new server that just says "Hi!!" at every route
const server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end('<h1>Welcome!</h1> User :)')
  } else if (request.url === '/random-joke') {
    response.end('<h1>Welcome!</h1><p><a href="/">Home</a></p>' + jokes())
  } else if (request.url === '/cuteness') {
    response.end('<h1>Welcome!</h1><p><a href="/">Home</a></p><img src="https://images.wsj.net/im-140534?width=1260&size=custom_559x397" alt="Doggy!">')
  } else {
    response.end('<h1>Uh oh!</h1><h2>Page Not Found</h2><p>The URL <code>' + request.url + '</code> does not exist, would you like to go <a href="/">home</a>?</p><p>Or you could just watch one of my favorite videos :)</p><video width="500" height="500" autoplay><source src="/video.mp4" type="video/mp4">No video :/</video>')
  }
})

// Allow Environment Variable to choose a port
const port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')

// Random Joke
const jokes = function () {
  const randomNumber = Math.floor(Math.random() * Math.floor(3))

  if (randomNumber === 1) {
    return '<b>Knock knock</b> <br> <i>Who is there?</i> <br> <b>Wood pecker.</b> <br> <i>Wood pecker who?</i> <br> <b>Knock, knock</b>'
  } else if (randomNumber === 2) {
    return '<b>What is red and juicy and round</b> <br> <i>A lemon disguised as a strawberry</i>'
  } else {
    return '<b>I had a dream where an evil queen forced me to eat a gigantic marshmallow.</b> <br> <i>When I woke up, my pillow was gone.</i>'
  }
}
