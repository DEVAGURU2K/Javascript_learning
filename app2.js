var selectedRow = null

console.log("working");
document.getElementById("btn").addEventListener("click",function(e) {
    e.preventDefault();
    validation();
  });

function onFormSubmit() {
    var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        clearForm();
}


function getData()
{
    console.log("ok");
    readFormData();
    // var fname=documet.getElementById("fullname")
    
}
function clearForm(){
    document.getElementById("fullname").value="";
    document.getElementById("birth").value="";
    document.getElementById("mob").value="";
    selectedRow = null;

}
function onEdit(sel){
    selectedRow = sel.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("birth").value = selectedRow.cells[1].innerHTML;
    document.getElementById("mob").value = selectedRow.cells[2].innerHTML;
    console.log("clicked edit button")
    

}

function onDelete(sel){
    if (confirm('Are you sure to delete selected record ?')) {
        row = sel.parentElement.parentElement;
        console.log(row);
        document.getElementById("tview").deleteRow(row.rowIndex);
    }
    console.log("clicked delete button")
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.datebirth;
    selectedRow.cells[2].innerHTML = formData.fmob;
    
}
function readFormData(){
    var formData = [];
    formData["fullName"] = document.getElementById("fullname").value;
    formData["datebirth"] = document.getElementById("birth").value;
    formData["fmob"] = document.getElementById("mob").value;
    // document.getElementById("id2").innerText=formData;
    return formData;
}
function insertNewRecord(formData){
        var ins =document.getElementById("tview").getElementsByTagName("tbody")[0];
        console.log(ins);
        var row = ins.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = formData.fullName;
        cell2.innerHTML = formData.datebirth;
        cell3.innerHTML = formData.fmob;
        cell4.innerHTML=cell4.innerHTML = `<button onClick="onEdit(this)"><u>Edit</u></button>
                                        <button onClick="onDelete(this)"><u>Delete</u></button>`
        clearForm();
        return formData;
    }

   
// function updateRecord(formData) {
  function validation(){
   let  full=document.getElementById("fullname").value;
    let dbirth=document.getElementById("birth").value;
    let dmob=document.getElementById("mob").value;
    var phoneno = /^\d{10}$/;
    if (full ==  ""){
        alert("please fill the name field")

    }
    else if(!Date.parse(dbirth) ){
        alert("please fill the date of birth field")
    }
    else if (dmob == "" ){
        alert("please fill mobile number the field");
        
    }
    else{
        onFormSubmit();
    }
  }  
    
  