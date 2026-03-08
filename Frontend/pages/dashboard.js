import {useState} from "react"
import CodeEditor from "../components/CodeEditor"
import ResultPanel from "../components/ResultPanel"
import Navbar from "../components/Navbar"
import {reviewCode} from "../utils/api"

export default function Dashboard(){

const [code,setCode] = useState("")
const [result,setResult] = useState("")

const runReview = async()=>{

const data = await reviewCode(code)

setResult(data.review)

}

return(

<div className="h-screen flex flex-col bg-black">

<Navbar/>

<div className="flex flex-1">

<div className="w-1/2 relative">

<CodeEditor code={code} setCode={setCode}/>

<button
onClick={runReview}
className="absolute bottom-6 right-6 bg-green-600 px-6 py-3 rounded"
>

AI Review

</button>

</div>

<div className="w-1/2">
<ResultPanel result={result}/>
</div>

</div>

</div>

)

}