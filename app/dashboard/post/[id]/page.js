import { db } from "@/config/firebase.config";
import { timestampToDate } from "@/utils/timestamp-to-date";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { notFound } from "next/navigation";

async function fetchPost (postId) {
  const postRef = doc(db, "posts",postId);
  const postSnapShot = await getDoc(postRef)
   
  if(!postSnapShot.exists()) {
    return notFound();
  }
  return {
    id: postId,
    ...postSnapShot.data(),
  };
}
export default async function Post({ params }) {
       const { id } = await params;
       const post = await fetchPost(id);

       return (
         <main className="min-h-screen bg-gray-100 p-6">
           <h1 className="text-4xl font-bold text-blue-500 text-center mb-6">{post.title} </h1>
             <div className="flex justify-center">
              <Image 
              src="/fn-2.webp"
              alt="postImage"
              width={400}
              height={400}
              className="rounded-lg"/>
             </div>
             <p className="text-gray-600 text-center mt-4">Published on: { timestampToDate(post.timecreated)} </p>
             <article className="mt-3 text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto text-center px-10">{post.body} </article>
         </main>
       )
       
}