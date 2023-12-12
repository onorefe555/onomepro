// section one input functionalities

const input_invoice = document.getElementById("input_invoice")
const input_date = document.getElementById("input_date")
const btn = document.getElementById("btn")

const date_li = document.getElementById("date_li")
const invoice_li = document.getElementById("invoice_li")

const date_error = document.querySelector("#date_error")
const invoice_error = document.querySelector("#invoice_error")

btn.addEventListener("click", function () {
    alert("hello my people") 
        dateStore.push(input_date.value)
        invoiceStore.push(input_invoice.value)
        renderDateInvoice()
        renderInvoiceStore() 
        localStorage.setItem("dateStore", JSON.stringify(dateStore))
        localStorage.setItem("invoiceStore", JSON.stringify(invoiceStore))
})

let dateStore=[]
let invoiceStore=[]

const localStorageDate = JSON.parse(localStorage.getItem("dateStore"))
if(localStorageDate){
    dateStore = localStorageDate
    renderDateInvoice()
}

const localStorageInvoice = JSON.parse(localStorage.getItem("invoiceStore"))
if(localStorageInvoice){
    invoiceStore = localStorageInvoice
    renderInvoiceStore()
}

function renderDateInvoice() {
    let dateStoreItem =""
    for (let i = 0; i < dateStore.length; i++) {
        dateStoreItem+="<li> Date: "+dateStore[i]+"</li>"  
    }
  date_li.innerHTML = dateStoreItem
}

function renderInvoiceStore() {
    let invoiceItem =""
    for (let i = 0; i < invoiceStore.length; i++) {
        invoiceItem+="<li> Invoice No: "+invoiceStore[i]+"</li>"  
    }
    invoice_li.innerHTML =invoiceItem
}

// Section two input
//getting the id of each input
const category_id = document.getElementById("category_id")
const product_id = document.getElementById("product_id")
const category_name = document.getElementById("category_name")
const product_name = document.getElementById("product_name")
const availabe_stock = document.getElementById("availabe_stock")
const unit_price = document.getElementById("unit_price")

// getting erorr message id

const category_id_list = document.getElementById("category_id_list")
const product_id_list = document.getElementById("product_id_list")
const category_name_list = document.getElementById("category_name_list")
const product_name_list = document.getElementById("product_name_list")

const product_category_btn = document.getElementById("product_category_btn")

//creating datastore for each input

let categoryId=[]
let productId=[]
let categoryName=[]
let produtName=[]
let availableStock=[]
let unitPrice = []


product_category_btn.addEventListener("click", function () {
    alert("welcome my people")
    categoryId.push(category_id.value)
    rendercategoryId()
})

function rendercategoryId() {
    let categoryId_tem =""
    for (let k = 0; k < categoryId.length; k++) {
        categoryId_tem +="<li> Category ID : "+categoryId[k]+"</li>"  
    }
    category_id_list.innerHTML = categoryId_tem 
}