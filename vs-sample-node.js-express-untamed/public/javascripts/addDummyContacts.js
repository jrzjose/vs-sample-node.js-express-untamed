function addDummyContact() {
    var contact = { "id" : new Date().getUTCMilliseconds(), "title" : "test3", "firstName" : "test3", "lastName" : "test3", "suffix" : "mr", "emailAddress" : "demo@email.com", "phone" : "222-222-2224" };
    $.ajax({
        type: "POST",
        url: "/contact/",			
        data: JSON.stringify(contact),
        contentType: "application/json",
        dataType: "json",
        success: function (data) { console.log(data); },
        failure: function (errMsg) {
            console.log(errMsg);
        }
    });
}