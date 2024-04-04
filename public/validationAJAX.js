validation = []
const form = document.forms['jobApp'];
validation[0] = () => {
  var flag = false;
  var first = null;

  if (form['fname'].value.trim() == '') {
    form['fname'].parentNode.classList.add('req');
    if (first == null) first = form['fname'];
    flag = true;

  }
  if (form['lname'].value.trim() == '') {
    form['lname'].parentNode.classList.add('req');
    if (first == null) first = form['lname'];
    flag = true;
  }
  if (form['Designation1'].value.trim() == '') {
    form['Designation1'].parentNode.classList.add('req');
    if (first == null) first = form['Designation1'];
    flag = true;
  }
  if (form['email'].value.trim() == '') {
    form['email'].parentNode.classList.add('req');
    if (first == null) first = form['email'];
    flag = true;
  }
  if (form['Phone'].value.trim() == '') {
    form['Phone'].parentNode.classList.add('req');
    if (first == null) first = form['Phone'];
    flag = true;
  }
  if (form['dob'].value.trim() == '') {
    form['dob'].parentNode.classList.add('req');
    if (first == null) first = form['dob'];
    flag = true;
  }
  if (form['Address1'].value.trim() == '') {
    form['Address1'].parentNode.classList.add('req');
    if (first == null) first = form['Address1'];
    flag = true;
  }
  if (form['Address2'].value.trim() == '') {
    form['Address2'].parentNode.classList.add('req');
    if (first == null) first = form['Address2'];
    flag = true;
  }
  if (form['City'].value.trim() == '') {
    form['City'].parentNode.classList.add('req');
    if (first == null) first = form['City'];
    flag = true;
  }
  if (form['State'].value.trim() == '') {
    form['State'].parentNode.classList.add('req');
    if (first == null) first = form['State'];
    flag = true;
  }
  if (form['zcode'].value.trim() == '') {
    form['zcode'].parentNode.classList.add('req');
    if (first == null) first = form['zcode'];
    flag = true;
  }
  if (form['gender'].value == "") {
    form['gender'][0].parentNode.classList.add('req');
    if (first == null) first = form['gender'];
    flag = true;
  }
  if (form['relation'].value.trim() == '') {
    form['relation'].parentNode.classList.add('req');
    if (first == null) first = form['relation'];
    flag = true;
  }
  if (!isEmail(form['email'].value)) {
    if (form['email'].parentNode.childNodes.length < 2) {
      const span = document.createElement('span');
      let text = "*Invalid EmailID!!"
      span.append(text);
      form['email'].parentNode.appendChild(span);
    }
    form['email'].focus();
    flag = true;
  }
  else {
    if (form['email'].parentNode.childNodes[1]) {
      form['email'].parentNode.childNodes[1].innerText = "";
    }
  }
  if (!isPhone(form['Phone'].value)) {
    if (form['Phone'].parentNode.childNodes.length < 2) {

      const span = document.createElement('span');
      let text = "*Invalid Phone number!!"
      span.append(text);
      form['Phone'].parentNode.appendChild(span);
    }
    form['Phone'].focus();
    flag = true;
  }
  else {
    if (form['Phone'].parentNode.childNodes[1]) {
      form['Phone'].parentNode.childNodes[1].innerText = "";
    }
  }
  if (!isAlpha(form['fname'].value)) {
    if (form['fname'].parentNode.childNodes.length < 2) {

      const span = document.createElement('span');
      let text = "*Only Alphabet is valid!!"
      span.append(text);
      form['fname'].parentNode.appendChild(span);
    }
    form['fname'].focus();
    flag = true;
  }
  else {
    if (form['fname'].parentNode.childNodes[1]) {
      form['fname'].parentNode.childNodes[1].innerText = "";
    }
  }
  if (!isAlpha(form['lname'].value)) {
    if (form['lname'].parentNode.childNodes.length < 2) {
      const span = document.createElement('span');
      let text = "*Only Alphabet is valid!!"
      span.append(text);
      form['lname'].parentNode.appendChild(span);
    }
    form['lname'].focus();
    flag = true;
  }
  else {
    if (form['lname'].parentNode.childNodes[1]) {
      form['lname'].parentNode.childNodes[1].innerText = "";
    }
  }
  if (!isDate(form['dob'].value)) {
    // console.log(form['dob'].parentNode.childNodes.length);
    if (form['dob'].parentNode.childNodes.length < 2) {
      const span = document.createElement('span');
      let text = "*Enter date in dd/mm/yyyy formate!!"
      span.append(text);
      form['dob'].parentNode.appendChild(span);
    }
    // console.log(form['dob'].parentNode.childNodes.length);
    form['dob'].focus();
    flag = true;
  }
  else {
    if (form['dob'].parentNode.childNodes[1]) {
      form['dob'].parentNode.childNodes[1].innerText = "";
    }
  }
  if (flag) {
    errorSolve();
    first.focus();
    return false;
  }
  return true;
}
validation[1] = () => {

  var flag = false;
  var first = null;
  if (form['gBoard'].value == "") {
    form['gBoard'].parentNode.classList.add('req');
    if (first == null) first = form['gBoard'];
    flag = true;
  }
  if (form['PassingY1'].value == "") {
    form['PassingY1'].parentNode.classList.add('req');
    if (first == null) first = form['PassingY1'];
    flag = true;
  }
  if (form['Percentage1'].value == "") {
    form['Percentage1'].parentNode.classList.add('req');
    if (first == null) first = form['Percentage1'];
    flag = true;
  }

  if (form['Board2'].value == "") {
    form['Board2'].parentNode.classList.add('req');
    if (first == null) first = form['Board2'];
    flag = true;
  }
  if (form['PassingY2'].value == "") {
    form['PassingY2'].parentNode.classList.add('req');
    if (first == null) first = form['PassingY2'];
    flag = true;
  }
  if (form['Percentage2'].value == "") {
    form['Percentage2'].parentNode.classList.add('req');
    if (first == null) first = form['Percentage2'];
    flag = true;
  }
  if (form['Course1'].value == "") {
    form['Course1'].parentNode.classList.add('req');
    if (first == null) first = form['Course1'];
    flag = true;
  }
  if (form['University1'].value == "") {
    form['University1'].parentNode.classList.add('req');
    if (first == null) first = form['University1'];
    flag = true;
  }
  if (form['PassingY3'].value == "") {
    form['PassingY3'].parentNode.classList.add('req');
    if (first == null) first = form['PassingY3'];
    flag = true;
  }
  if (form['Percentage3'].value == "") {
    form['Percentage3'].parentNode.classList.add('req');
    if (first == null) first = form['Percentage3'];
    flag = true;
  }
  if (form['Course2'] != undefined) {

    if (((form['University2'].value == "") || (form['PassingY4'].value == "") || (form['Percentage4'].value == "") || (form['Course2'].value == "")) && ((form['University2'].value != "") || (form['PassingY4'].value != "") || (form['Percentage4'].value != "") || (form['Course2'].value != ""))) {
      // console.log('Here')
      if (form['Course2'].value == "") {
        form['Course2'].parentNode.classList.add('req');
        if (first == null) first = form['Course2'];
        flag = true;
      }
      if (form['University2'].value == "") {
        form['University2'].parentNode.classList.add('req');
        if (first == null) first = form['University2'];
        flag = true;
      }
      if (form['PassingY4'].value == "") {
        form['PassingY4'].parentNode.classList.add('req');
        if (first == null) first = form['PassingY4'];
        flag = true;
      }
      if (form['Percentage4'].value == "") {
        form['Percentage4'].parentNode.classList.add('req');
        if (first == null) first = form['Percentage4'];
        flag = true;
      }
    }
  }
  if (flag) {
    errorSolve();
    first.focus();
    return false;
  }
  return true;
}
validation[2] = () => {
  var flag = false;
  var first = null;
  if (form['Company[]'] != undefined && form['Company[]'].length > 1) {

    for (i = 0; i < form['Company[]'].length; i++) {

      if ((form['Company[]'][i].value == "" || form['Designation[]'][i].value == "" || form['From[]'][i].value == "" || form['To[]'][i].value == "") &&
        (form['Company[]'][i].value != "" || form['Designation[]'][i].value != "" || form['From[]'][i].value != "" || form['To[]'][i].value != "")) {
        if (form['Company[]'][i].value == "") {
          form['Company[]'][i].parentNode.classList.add('req');
          if (first == null) first = form['Company[]'][i];
          flag = true;
        }
        if (form['Designation[]'][i].value == "") {
          form['Designation[]'][i].parentNode.classList.add('req');
          if (first == null) first = form['Designation[]'][i];
          flag = true;
        }
        if (form['From[]'][i].value == "") {
          form['From[]'][i].parentNode.classList.add('req');
          if (first == null) first = form['From[]'][i];
          flag = true;
        }
        if (form['To[]'][i].value == "") {
          form['To[]'][i].parentNode.classList.add('req');
          if (first == null) first = form['To[]'][i];
          flag = true;
        }
      }
    }
  }
  else if (form['Company[]'] != undefined) {
    if ((form['Company[]'].value == "" || form['Designation[]'].value == "" || form['From[]'].value == "" || form['To[]'].value == "") &&
      (form['Company[]'].value != "" || form['Designation[]'].value != "" || form['From[]'].value != "" || form['To[]'].value != "")) {
      if (form['Company[]'].value == "") {
        form['Company[]'].parentNode.classList.add('req');
        if (first == null) first = form['Company[]'];
        flag = true;
      }
      if (form['Designation[]'].value == "") {
        form['Designation[]'].parentNode.classList.add('req');
        if (first == null) first = form['Designation[]'];
        flag = true;
      }
      if (form['From[]'].value == "") {
        form['From[]'].parentNode.classList.add('req');
        if (first == null) first = form['From[]'];
        flag = true;
      }
      if (form['To[]'].value == "") {
        form['To[]'].parentNode.classList.add('req');
        if (first == null) first = form['To[]'];
        flag = true;
      }
    }
  }
  if (flag) {
    errorSolve();
    first.focus();
    return false;
  }
  return true;
}
validation[5] = () => {
  var flag = false;
  var first = null;
  if (form['name[]'] != undefined && form['name[]'].length > 1) {
    for (let i = 0; i < form['name[]'].length; i++) {
      if ((form['name[]'][i].value == '' || form['refrePhone[]'][i].value == "" || form['Relation[]'][i].value == "") && (form['name[]'][i].value != '' || form['refrePhone[]'][i].value != "" || form['Relation[]'][i].value != "")) {

        if (form['name[]'][i].value == "") {
          form['name[]'][i].parentNode.classList.add('req')
          if (first == null) first = form['name[]'][i];
          flag = true;
        }
        if (form['refrePhone[]'][i].value == "") {
          form['refrePhone[]'][i].parentNode.classList.add('req')
          if (first == null) first = form['refrePhone[]'][i];
          flag = true;
        }
        if (form['Relation[]'][i].value == "") {
          form['Relation[]'][i].parentNode.classList.add('req')
          if (first == null) first = form['Relation[]'][i];
          flag = true;
        }
      }
    }
  }
  else if (form['name[]'] != undefined) {
    if ((form['name[]'].value == '' || form['refrePhone[]'].value == "" || form['Relation[]'].value == "") && (form['name[]'].value != '' || form['refrePhone[]'].value != "" || form['Relation[]'].value != "")) {

      if (form['name[]'].value == "") {
        form['name[]'].parentNode.classList.add('req')
        if (first == null) first = form['name[]'];
        flag = true;
      }
      if (form['refrePhone[]'].value == "") {
        form['refrePhone[]'].parentNode.classList.add('req')
        if (first == null) first = form['refrePhone[]'];
        flag = true;
      }
      if (form['Relation[]'].value == "") {
        form['Relation[]'].parentNode.classList.add('req')
        if (first == null) first = form['Relation[]'];
        flag = true;
      }
    }

  }
  if (flag) {
    errorSolve();
    first.focus();
    return false;
  }
  return true;
}
validation[6] = () => {
  var flag = false;
  var first = null;
  if (form['preference_location'].value == "") {
    form['preference_location'].parentNode.classList.add('req');
    if (first == null) first = form['preference_location']
    flag = true;
  }
  if (form['notice'].value == "") {
    form['notice'].parentNode.classList.add('req');
    if (first == null) first = form['notice']
    flag = true;
  }
  if (form['ECTC'].value == "") {
    form['ECTC'].parentNode.classList.add('req');
    if (first == null) first = form['ECTC']
    flag = true;
  }
  if (form['CCTC'].value == "") {
    form['CCTC'].parentNode.classList.add('req');
    if (first == null) first = form['CCTC']
    flag = true;
  }
  if (form['department'].value == "") {
    form['department'].parentNode.classList.add('req');
    if (first == null) first = form['department']
    flag = true;
  }
  if (flag) {
    errorSolve();
    first.focus();
    return false;
  }
  return true;
}

function isEmail(email) {
  return email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
}
function isPhone(Phone) {
  return Phone.match(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/);
}
function isAlpha(name) {
  return name.match(/^[a-zA-Z]+$/);
}
function isDate(date) {
  return date.match(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/);
}

function errorSolve() {
  const require = document.getElementsByClassName('req');
  for (req of require) {
    // console.log(req);
    req.childNodes[0].addEventListener('change', (e) => {
      if (e.target.parentNode.classList.contains('req')) {
        e.target.parentNode.classList.remove('req');
      }
    })
    if (req.childNodes[2]) {
      req.childNodes[2].addEventListener('change', (e) => {
        if (e.target.parentNode.classList.contains('req')) {
          e.target.parentNode.classList.remove('req');
        }
      })
    }
  }
}
validation[3] = () => {
  return true;
}
validation[4] = () => {
  return true;
}
var From1 = document.forms['jobApp'];
Form1 = From1 || null;
if (Form1) {

  From1['language[]'][0].addEventListener('change', () => {
    if (From1['language[]'][0].checked) {
      // From1['language[]'][0].parentNode.nextSibling.nextSibling.childNodes[0].disabled=false;
      // From1['hindi[]'].map(e=>{
      //     e.disabled=true;
      // })
      From1['hindi[]'].forEach(element => {
        element.disabled = false;
      });
    }
    else {
      From1['hindi[]'].forEach(element => {
        element.disabled = true;
        element.checked = false;
      });
    }
    // From1['language[]'][0].parentNode.;
  })
  From1['language[]'][2].addEventListener('change', () => {
    if (From1['language[]'][2].checked) {
      // From1['language[]'][0].parentNode.nextSibling.nextSibling.childNodes[0].disabled=false;
      // From1['hindi[]'].map(e=>{
      //     e.disabled=true;
      // })
      From1['english[]'].forEach(element => {
        element.disabled = false;
      });
    }
    else {
      From1['english[]'].forEach(element => {
        element.disabled = true;
        element.checked = false;
      });
    }
    // From1['language[]'][0].parentNode.;
  })
  From1['language[]'][1].addEventListener('change', () => {
    if (From1['language[]'][1].checked) {
      // From1['language[]'][0].parentNode.nextSibling.nextSibling.childNodes[0].disabled=false;
      // From1['hindi[]'].map(e=>{
      //     e.disabled=true;
      // })
      From1['gujarati[]'].forEach(element => {
        element.disabled = false;
      });
    }
    else {
      From1['gujarati[]'].forEach(element => {
        element.disabled = true;
        element.checked = false;
      });
    }
    // From1['language[]'][0].parentNode.;
  })

  From1['technologies[]'][0].addEventListener('change', () => {
    if (From1['technologies[]'][0].checked) {

      From1['php'].forEach(element => {
        element.disabled = false;
      });
    }
    else {
      From1['php'].forEach(element => {
        element.disabled = true;
        element.checked = false;
      });
    }
  })
  From1['technologies[]'][1].addEventListener('change', () => {
    if (From1['technologies[]'][1].checked) {

      From1['mysql'].forEach(element => {
        element.disabled = false;
      });
    }
    else {
      From1['mysql'].forEach(element => {
        element.disabled = true;
        element.checked = false;
      });
    }
  })
  From1['technologies[]'][2].addEventListener('change', () => {
    if (From1['technologies[]'][2].checked) {

      From1['laravel'].forEach(element => {
        element.disabled = false;
      });
    }
    else {
      From1['laravel'].forEach(element => {
        element.disabled = true;
        element.checked = false;
      });
    }
  })
  From1['technologies[]'][3].addEventListener('change', () => {
    if (From1['technologies[]'][3].checked) {

      From1['Oracle'].forEach(element => {
        element.disabled = false;
      });
    }
    else {
      From1['Oracle'].forEach(element => {
        element.disabled = true;
        element.checked = false;
      });
    }
  })

}