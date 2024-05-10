"use strict"

const textTruncate= document.querySelectorAll('.text-truncate');

textTruncate.forEach(text=>{
    text.innerHTML = 
    text.innerHTML.slice(0,100).padEnd(103,'...');
})
