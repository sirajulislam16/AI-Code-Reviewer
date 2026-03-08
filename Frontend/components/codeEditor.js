import Editor from "@monaco-editor/react"

export default function CodeEditor({code,setCode}){

return(

<div className="h-full">

<Editor
height="100%"
defaultLanguage="javascript"
theme="vs-dark"
value={code}
onChange={(value)=>setCode(value)}
/>

</div>

)

}