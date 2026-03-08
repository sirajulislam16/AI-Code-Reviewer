const API_URL = "http://localhost:8000"

export async function reviewCode(code){

const res = await fetch(`${API_URL}/review`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({code})

})

return res.json()

}