export default function ResultPanel({result}){

return(

<div className="p-6 text-white bg-gray-900 h-full overflow-auto">

<h2 className="text-xl font-bold mb-4">
AI Review Result
</h2>

<pre className="whitespace-pre-wrap">
{result}
</pre>

</div>

)

}