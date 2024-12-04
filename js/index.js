var  bookmarkNameinput=document.getElementById('bookmarkName');
var  bookmarkURLinput=document.getElementById('bookmarkURL');
var  submitBtn=document.getElementById('submitBtn');
var tableBody = document.getElementById('tableContent');




var websites;
if( localStorage.sites  !=null  ){
    websites=JSON.parse(localStorage.sites)
}
else{
    websites=[];
}


function addmeil(){
    var newmeil={
        name:bookmarkNameinput.value,
        siturl:bookmarkURLinput.value,
    }


    websites.push(newmeil);
    localStorage.setItem('sites',JSON.stringify(websites))
    console.log(websites);
    clearform()
    showdata()
    
}


function clearform(){
bookmarkNameinput.value=null;
bookmarkURLinput.value=null;

}
function validateInputs() {

    if (bookmarkNameinput.value.trim() === '') {
        bookmarkNameinput.classList.add('is-invalid');
      bookmarkNameinput.classList.remove('is-valid');
    } else {
        bookmarkNameinput.classList.add('is-valid');
        bookmarkNameinput.classList.remove('is-invalid');
    }

     if (bookmarkURLinput.value.trim() === '') {
        bookmarkURLinput.classList.add('is-invalid');
        bookmarkURLinput.classList.remove('is-valid');
    } else {
        bookmarkURLinput.classList.add('is-valid');
        bookmarkURLinput.classList.remove('is-invalid');
    }
}


function  showdata(){
    var tabel='';
for(var i=0;i<websites.length;i++){
    tabel +=`
    
     <tr>
        <td>${i+1}</td>
        <td>${websites[i].name}</td>
        <td> <button  onclick="window.location.href='${websites[i].siturl}'" class="visit"><i class="fa-solid fa-eye"></i>  visit</button></td>
       <td> <button  onclick="deleteData(${i})" class="delete"><i class="fa-solid fa-trash-can"></i>  delete</button></td>

    </tr>
    `
}
document.getElementById('tableContent').innerHTML=tabel;
}
showdata()


function  deleteData(i){
    console.log(i);
    
    websites.splice(i,1);
    localStorage.sites=JSON.stringify(websites);
    showdata()
}


//get add
//create product
//save localstorage
//clear.inputs
//read
//count
//delet
//update
//search
// clean data
