import Image from "next/image"


export default function Home () {
  return (
     <main>
      <Image
      src="/blog1.jpg"
      alt="image"
      width={500}
      height={500}
      className="w-[100%]"/> 
     </main>
     
   )
}
