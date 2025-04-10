   "use client"
import { useEffect, useState } from "react"



export default function Home () {
    const [count,setCount] = useState(0)
 
     useEffect(() => {
       const getData = async () => {
         const response = await fetch("https://dummyjson.com/products")
         const data = await response.json()
         console.log(data.products)
       }
       getData()
       
     })


     return (
     <main className=" flex flex-col gap-20 items-center justify-center px-20 py-20">
      <p className="text-4xl font-bold">count : {count}</p>
      <button onClick={() => setCount(count + 1  )} className="w-[200px] h-[50px] text-white bg-blue-400 ">Increment</button>
      <button onClick={() => setCount(count - 1)} className="w-[200px] h-[50px] text-white bg-blue-400 ">Decrement</button>
     </main>
     
   )
}
