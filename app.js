// Fetch,axios returns promise
//async afunction await returns promise


const name1=document.getElementById('name');
const email=document.getElementById('email');
const zip=document.getElementById('zip')
const phone=document.getElementById('phone')
name1.addEventListener('blur',()=>{
    re=/^[A-Za-z]{2,10}$/
    console.log(re.test(name1.value));
})

email.addEventListener('blur',()=>{
    re=/^([A-Za-z0-9_\-\.]){2,14}@[A-Za-z]{2,7}\.[A-Za-z]{2,5}$/
    console.log(re.test(email.value));
})

zip.addEventListener('blur',()=>{
    re=/^[0-9\-]{1,6}$/
    console.log(re.test(zip.value));
})
phone.addEventListener('blur',()=>{
    re=/^\+[0-9]{2}[0-9]{10}$/
    console.log(re.test(phone.value));
})

const obj={
    name:'aslam',
    age:16
}

console.log('obj',obj);
const str=JSON.stringify(obj);
console.log('sobj',JSON.stringify(obj));
console.log('pobj',JSON.parse(str));

function demo(error){
    return new Promise((resolve,reject)=>{
        if(!error){
            resolve(`It is clear`)
        }
        else{
            reject('It is not clear')
        }
    })
}
demo(false).then(data=>
console.log(data))


