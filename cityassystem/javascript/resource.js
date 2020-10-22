var Airtable = require('airtable');

// Select base
var base = new Airtable({apiKey: 'key3kQAZHgzH6SAix'}).base('app550IXVpQURH61D');


// A function that writes a memory record into the html
base('Imported table').select({
  // Selecting the first 3 records in Grid view:
  maxRecords:4,
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  records.forEach(function(record) {
      console.log('Retrieved', record.get('NAME'));
      
  });
 


  var containerElement = document.querySelector('.list');


  base('Imported table').select({
    sort: [{field: "ID", direction: "desc"}],
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    // Iterate over records

  
    records.forEach(function(record) {
      // Create a div to contain content for this record
      var element = document.createElement('div');
  
      // Add classes to record element
      element.classList.add('NAME');
      element.classList.add('additional-NAME');
  
      // Add a special cl
  
      // Add heading element to record element
      
  
      // Create a paragraph element
      var paragraph = document.createElement('p');
  
      // Populate paragraph element html
      paragraph.innerHTML = record.get('NAME') + " " + record.get('PHONE');
  
      // Add paragraph element to record element
      element.appendChild(paragraph);
  
      // Add record element to container element
      containerElement.appendChild(element);
    });
  
    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
  
  }, function done(err) {
    if (err) { console.error(err); return; }
  });



  
});