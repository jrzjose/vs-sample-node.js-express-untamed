# vs-sample-node.js-express-untamed

A node.js demo created using NTVS, "a plug in that turns visual studio into a Node.js IDE"

## More about NTVS
https://github.com/Microsoft/nodejstools
This is my first practice on Node.js using Visual Studio, perhaps Yeoman would be a better fit but for a developer who spent the last 10 years at least mostly on the .net platform, I feel the future is promising (for me)!

## This project
It is my first try in the wild, the project is composed of a set of fake Rest services mimicking some CRUD operations
and there the reason why I called it vs-sample-node.js-express-untamed
Services are found at contact.js, some work tweaks performed at done at index.jade, layout.jade and a simple script written to test the POST method to create dummy contacts at javascripts folder.

PERFORM
GET to /contact to return the list of dummy contact entries (simple cached in an array)
GET to /contact/n to retrive a contact by id
POST to /contact to add a contact, send the contact data as a JSON object
PUT to /contact/n to update a contact's info, send the contact's id as a parameter and contact's data as a JSON object
DELETE to /contact/n to delete a contact by id.

When you run the project, two dummy contacts will be created, 
if you want to test the POST method, you can use a button I've hooked up using jquery, the button appears in the landing page when you run the project.
You'll also need a REST Client to test PUT and DELETE.

## More
The project template used in this project : Basic Node.js Express 4 Application.
As usual you'll save time and increase productivity using VS.
