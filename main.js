var itemList=document.querySelector('#items')

// //parentElement
console.log(itemList.parentElement)

// //lastelement child
 console.log(itemList.lastElementChild)
 itemList.lastElementChild.textContent='hello'

// //last child
console.log(itemList.lastChild)

// // childNode

console.log(itemList.childNodes)
console.log(itemList.children)
console.log(itemList.children[1])
itemList.children[1].style.backgroundColor='blue'

// // //first child

 console.log(itemList.firstChild)

//  //firstelement child
 console.log(itemList.firstElementChild)
 itemList.firstElementChild.textContent='hello'

// //NextSibiling
console.log(itemList.nextSibling)

// // // NextSibing element
console.log(itemList.nextElementSibling)


// // previousSibiling
console.log(itemList.previousSibling)

// // //previous elementSibiling
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color='red'
 
// //create element
// // create div

var newDiv=document.createElement('div')

// //set attribute

newDiv.setAttribute('title','hello Div')

// // create textnode

var newDivText=document.createTextNode('Hello World')

// //Add text to div

newDiv.appendChild(newDivText)
var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')
console.log(newDiv)
container.insertBefore(newDiv,h1)
//

var newItems=document.createElement("items")
var newItemsText=document.createTextNode('Hello World')
newItems.appendChild(newItemsText)
var listgroup=document.querySelector('items .list-group')
var ul=document.querySelector('items ul')
console.log(newItems)
items.insertBefore(newItems,ul)
