const plus1 = document.getElementById('plus1');
const minus1 = document.getElementById('minus1');

const table1 = document.getElementById('experience');
plus1.onclick = () => {

  let tr = document.createElement('tr');
  var string = `<th>Company Name</th>
    <td><input type="text" placeholder="ex:eSparkBiz" Name="Company[]"></td>
    <th>Designation</th>
    <td><input type="text" placeholder="ex:Product Manager" name="Designation[]" id="Designation"></td>
    <th>From</th>
    <td><input type="text" placeholder="ex:DD/MM/YYYY" name="From[]" id="From"></td>
    <th>To</th>
    <td><input type="text" placeholder="ex:DD/MM/YYYY" name="To[]" id="To" ></td>`
  tr.innerHTML = string;
  table1.appendChild(tr);
  return;
  let td1 = document.createElement('th');
  td1.append("Company Name");
  let td2 = document.createElement('td');
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'Company');
  input.setAttribute('name', 'Company');
  input.setAttribute('placeholder', 'ex:eSparkBiz');
  td2.appendChild(input);
  tr.appendChild(td1);
  tr.appendChild(td2);

  let td3 = document.createElement('th');
  td3.append('Designation');
  tr.appendChild(td3)
  let td4 = document.createElement('td');
  let input2 = document.createElement('input');
  input2.setAttribute('type', 'text');
  input2.setAttribute('id', 'Designation');
  input2.setAttribute('name', 'Designation');
  input2.setAttribute('placeholder', 'ex:Product Manager');

  td4.appendChild(input2);
  tr.appendChild(td4);

  let td5 = document.createElement('th');
  td5.append('From');
  tr.appendChild(td5)
  let td6 = document.createElement('td');
  let input3 = document.createElement('input');
  input3.setAttribute('type', 'text');
  input3.setAttribute('id', 'From');
  input3.setAttribute('name', 'From');
  input3.setAttribute('placeholder', 'ex:DD/MM/YYYY');

  td6.appendChild(input3);
  tr.appendChild(td6);

  let td7 = document.createElement('th');
  td7.append('To');
  tr.appendChild(td7)
  let td8 = document.createElement('td');
  let input4 = document.createElement('input');
  input4.setAttribute('type', 'text');
  input4.setAttribute('id', 'To');
  input4.setAttribute('name', 'To');
  input4.setAttribute('placeholder', 'ex:DD/MM/YYYY');

  td8.appendChild(input4);
  tr.appendChild(td8);

  table1.appendChild(tr);
}
minus1.onclick = () => {
  console.log(table1.childNodes)
  if (table1.childNodes.length > 2) {
    table1.lastChild.remove();
  }
  else {
    Swal.fire({
      title: "Stop",
      text: "You can't remove this fields",
      icon: "info",
    });
  }
}