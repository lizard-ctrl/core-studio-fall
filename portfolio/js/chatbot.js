var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyadhhZ8Bspu44CM'}).base('appw0kt5djs5WaaBP');

base('Table 1').find('recjsieGVWBF14fcz', function(err, record) {
    var titleValue = document.getElementById("title");
    titleValue.innerHTML = record.get("Name");
    console.log(record.get('Name'));
    
    var roleValue = document.getElementById("role");
    roleValue.innerHTML = record.get("Role");
    console.log(record.get('Role'));

    var descValue = document.getElementById("desc");
    descValue.innerHTML = record.get("longdesc");
    console.log(record.get('longdesc'));
    
    var descValue2 = document.getElementById("desc2");
    descValue2.innerHTML = record.get("longdesc2");
    console.log(record.get('longdesc2'));


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