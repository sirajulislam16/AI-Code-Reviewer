import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function Dashboard(){

const [code,setCode] = useState("")
const [result,setResult] = useState("")

const review = async ()=>{

const res = await fetch("http://localhost:8000/review",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({code})
})

const data = await res.json()
setResult(data.review)

}

return(

<div className="flex h-screen">

<div className="w-1/2">
<Editor
height="100%"
defaultLanguage="javascript"
theme="vs-dark"
onChange={(v)=>setCode(v)}
/>

<button onClick={review}>
AI Review
</button>

</div>

<div className="w-1/2 p-6 bg-black text-white">
<pre>{result}</pre>
</div>

</div>

)
}