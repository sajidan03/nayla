import { Heart } from "lucide-react";
import { motion } from "framer-motion";


interface EnvelopeProps {
  onOpen: () => void;
}



export default function Envelope({
  onOpen
}: EnvelopeProps){


return (

<motion.div

initial={{
opacity:0,
scale:0.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:0.8
}}

className="
flex
flex-col
items-center
cursor-pointer
"


onClick={onOpen}


>



<motion.div


whileHover={{
scale:1.05
}}


animate={{

y:[0,-10,0]

}}


transition={{

duration:2,

repeat:Infinity

}}


className="

relative

w-72

h-52

bg-linear-to-br

from-rose-400

to-pink-600

rounded-xl

shadow-2xl

flex

items-center

justify-center

overflow-hidden

"

>



{/* bagian penutup amplop */}

<div

className="

absolute

top-0

left-0

w-0

h-0

border-l-[144px]

border-r-[144px]

border-t-[90px]

border-l-transparent

border-r-transparent

border-t-rose-300

"

>

</div>




<div

className="

z-10

bg-white

rounded-full

p-5

shadow-xl

"

>

<Heart

size={45}

fill="currentColor"

className="

text-rose-500

"

/>


</div>




</motion.div>





<motion.p


animate={{

opacity:[0.5,1,0.5]

}}


transition={{

duration:2,

repeat:Infinity

}}


className="

mt-8

text-rose-600

font-semibold

text-lg

"

>

Klik surat ini untuk Nayla ❤️

</motion.p>




</motion.div>

)

}