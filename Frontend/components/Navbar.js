export default function Navbar(){

return(

<div className="flex justify-between items-center p-4 border-b border-gray-800">

<h1 className="text-xl font-bold">
CodeGuard AI
</h1>

<div className="space-x-4">

<button className="bg-blue-600 px-4 py-2 rounded">
Dashboard
</button>

<button className="bg-gray-700 px-4 py-2 rounded">
Logout
</button>

</div>

</div>

)

}