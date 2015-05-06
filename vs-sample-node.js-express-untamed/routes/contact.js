var express = require('express');
var router = express.Router();

var contacts = function () {
    var contacts = [];
    
    function init() {  // just some dummy data
        contacts.push({
            id : "1", title : "test", firstName : "test", lastName : "test", suffix : "mr", emailAddress : "demo@email.com", phone : "222-222-2222"
        });
        contacts.push({
            id : "2", title : "test2", firstName : "test2", lastName : "test2", suffix : "mr", emailAddress : "demo@email.com", phone : "222-222-2223"
        });
    }
    
    function ops(id, cb) {
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].id == id) {
                var result = cb(i);
                return result;
            }
        }
        return null; //dont judge me for this, it is just a mickey mouse demo
    }
    
    var create = function (contact) {
        contacts.push(contact);
        return contact;
    }
    
    var getContact = function (id) {
        return ops(id, function (index) { return contacts[index]; });
    }
    
    var getContacts = function () {
        return contacts;
    }
    
    var update = function (id, contact) {
        return ops(id, function (index) { return contacts[index] = contact; });
    }
    
    var del = function (id) {
        return ops(id, function (index) { return contacts[index] = {}; });
    }
    
    init();
    
    return {
        create : create,
        getContact : getContact,
        getContacts : getContacts,
        update : update,
        del : del
    }
}();



/* GET contacts. */
router.get('/', function (req, res) { //read
    var result = contacts.getContacts();
    res.send(result);
})
.get('/:n', function (req, res) { //read
    var result = contacts.getContact(req.params.n);
    res.send(result);
})
.post('/', function (req, res) {//create    
    var result = contacts.create(req.body);
    res.json(result);
})
.put('/:n', function (req, res) {//update
    var result = contacts.update(req.params.n, req.body);
    res.json(result);
})
.delete('/:n', function (req, res) {//delete
    var result = contacts.del(req.params.n);
    res.json(result);
})

module.exports = router;