
const componyName = document.getElementById('compony-name')
const pitch = document.getElementById('pitch')
const startingNumber = document.getElementById('s-number')
const runningTurn = document.getElementById('r-number')
const wireNumber = document.getElementById('w-number')
const sladNo = document.getElementById('slad')
const submitBtn = document.getElementById('submit-btn')
const clearBtn = document.getElementById('clear-btn')
const table = document.getElementById('table')
const tableBody = document.getElementById('table-body')
const tableHead = document.getElementById('thead')
const form = document.getElementById('form')
const data = localStorage.getItem('formData')
var inputText = document.querySelectorAll("input[type=text]")
const donwloadBtn = document.getElementById('download-btn')


let formDataArray = data ? JSON.parse(data) : []
if(formDataArray.length > 0){
    tableHead.classList.remove('hide')
}

submitBtn.addEventListener('click' , getFormdata)
clearBtn.addEventListener('click' , clearTable)
donwloadBtn.addEventListener('click' , download)
document.addEventListener('click', function(e){
    clearItemHtml(e.target.id)
})        
   function getFormdata(){
        const formObj = {
                        id:Math.floor(Math.random() * 100) ,
                      componyName :  componyName.value,
                      pitch :  pitch.value,
                      startingNumber :  startingNumber.value,
                      runningTurn :  runningTurn.value,
                      wireNumber :  wireNumber.value,
                      sladNo :  sladNo.value,
        }
                    formDataArray.push(formObj)  
                const formString = JSON.stringify(formDataArray)
                localStorage.setItem('formData' , formString)
                     getFormHtml()
                    tableHead.classList.remove('hide')
               
}     

function clearTable(){
    localStorage.clear()
    formDataArray = []
    getFormHtml()
    tableHead.classList.add('hide')
    
}

function download(){
    window.print()
}
function clearItemHtml(id){
    const objWithIdIndex = formDataArray.findIndex((obj) => obj.id == id);


  if (objWithIdIndex > -1) {
    formDataArray.splice(objWithIdIndex, 1);
  }

    //    console.log(formDataArray)
    getFormHtml()
   
}

function getFormHtml(){
    
    const formHtml = formDataArray.map(function(form){
        return `<tr>
        <td id="${form.id}">${form.componyName}</td>
        <td id="${form.id}">${form.pitch}</td>
        <td id="${form.id}">${form.startingNumber}</td>
        <td id="${form.id}">${form.runningTurn}</td>
        <td id="${form.id}">${form.wireNumber}</td>
        <td id="${form.id}">${form.sladNo}</td>
        </tr>`
    }).join('')
    
        tableBody.innerHTML = formHtml
}
   

getFormHtml()



 



