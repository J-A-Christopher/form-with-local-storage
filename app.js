const name=document.getElementById('name');
const email=document.getElementById('email');
const text=document.getElementById('text');

document.getElementById('send').addEventListener('click',function () {
    if (name.value==='') {
        alert('Please fill in a name!!')
    } else{
        
        localStorage.setItem('name',name.value);
    }


    if (email.value==='') {
        alert('Please fill in a email!!')
    } else{
        
        localStorage.setItem('email',email.value);
    }


    if (text.value==='') {
        alert('Please write some text!!')
    } else{
        
        localStorage.setItem('text',text.value);
    }

    
});

document.getElementById('reset').addEventListener('click',() => {
    name.value='';
    email.value='';
    text.value='';
})




