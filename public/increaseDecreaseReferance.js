const plus=document.getElementById('plus');
const minus=document.getElementById('minus');

const table=document.getElementById('references');
plus.onclick=()=>{
    let tr=document.createElement('tr');
    var string2=`<td>Name</td>
    <td><input type="text" name="name[]" maxlength="40"></td>
    <td>contact Number</td>
    <td><input type="text" name="refrePhone[]"></td>
    <td>Relation</td>
    <td><input type="text" name="Relation[]"></td>`;
    tr.innerHTML=string2;
    table.appendChild(tr);
    return;
    let td1=document.createElement('td');
    td1.append("Name");
    let td2=document.createElement('td');
    let input=document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('id','name');
    input.setAttribute('name','name');
    // input.setAttribute('placeholder','Enter person name...');
    td2.appendChild(input);
    tr.appendChild(td1);
    tr.appendChild(td2);

    let td3=document.createElement('td');
    td3.append('Contact Number');
    tr.appendChild(td3)
    let td4=document.createElement('td');
    let input2=document.createElement('input');
    input2.setAttribute('type','text');
    input2.setAttribute('id','refrePhone');
    input2.setAttribute('name','refrePhone');
    td4.appendChild(input2);
    tr.appendChild(td4);

    let td5=document.createElement('td');
    td5.append('Relation');
    tr.appendChild(td5)
    let td6=document.createElement('td');
    let input3=document.createElement('input');
    input3.setAttribute('type','text');
    input3.setAttribute('id','Relation');
    input3.setAttribute('name','Relation');
    td6.appendChild(input3);
    tr.appendChild(td6);

    table.appendChild(tr);
}
minus.onclick=()=>{
    if(table.childNodes.length >2){
        console.log(table.lastChild)
        table.lastChild.remove();
    }
    else{
        Swal.fire({
            title: "Stop",
            text: "You can't remove this fields",
            icon: "info",
          });
    }
}