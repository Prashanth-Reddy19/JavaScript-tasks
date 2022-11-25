// Query selector

var secondItem=document.querySelector('.list-group-item:nth-Child(2)')
secondItem.style.backgroundColor='green'

var thirdItem=document.querySelector('.list-group-item:nth-child(3)')
thirdItem.style.display='none'


//Query selectorAll

var secondItem=document.querySelectorAll('li:nth-child(2)')
console.log(secondItem[0])
secondItem[0].style.color='green'
 
var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}

