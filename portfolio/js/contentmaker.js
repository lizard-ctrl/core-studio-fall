var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyadhhZ8Bspu44CM'}).base('appw0kt5djs5WaaBP');

base('Table 1').find('rec8KSNDosC0AvoPf', function(err, record) {
    var titleValue = document.getElementById("title");
    titleValue.innerHTML = record.get("Name");
    console.log(record.get('Name'));
    
    var roleValue = document.getElementById("role");
    roleValue.innerHTML = record.get("Role");
    console.log(record.get('Role'));

    var descValue = document.getElementById("desc");
    descValue.innerHTML = record.get("longdesc");
    console.log(record.get('longdesc'));



    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});


  function pic1() {
    var x = document.getElementById("pic1");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function pic2() {
    var x = document.getElementById("pic2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function pic3() {
    var x = document.getElementById("pic3");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  