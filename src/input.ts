const inputField=document.getElementById('username') as HTMLInputElement;
const button=document.getElementById('btn') as HTMLInputElement;

button.addEventListener('click',()=>{
    const value=inputField.value;
    if(value.trim()===''){
        alert('Please enter a name')
    }else{
        console.log(value);
        
    }
})