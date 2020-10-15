var Airtable = require('airtable');

// Select base
var base = new Airtable({apiKey: 'key3kQAZHgzH6SAix'}).base('app550IXVpQURH61D');

// A function that writes a memory record into the html
base('Imported table').select({
  // Selecting the first 3 records in Grid view:
  maxRecords: 3,
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  records.forEach(function(record) {
      console.log('Retrieved', record.get('NAME'));
  });
  var addMemoryHtml = function(record, selector) {
    var header = document.querySelector(selector + ' h3');
  
    header.innerHTML = 'NAME' + record.id;
  
    var paragraph = document.querySelector(selector + ' p');
  
    paragraph.innerHTML = record.fields.Description;
  }
  
  // Select memory 1 with find()
  base('NAME').find('4c4a6a0d-2a41-4ec1-a0ee-71349d7e5547', function(err, record) {
    if (err) { console.error(err); return; }
  
    addMemoryHtml(record, '.first-memory');
  });
  
  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});


