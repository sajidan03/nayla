import {
  Mail,
  Sparkles,
  Heart
} from "lucide-react";


import {
  motion
} from "framer-motion";


import type {
  Variants
} from "framer-motion";

const paragraphs = [

"Hai Nayla...",


"Aku ingin meminta maaf untuk semua hal yang mungkin membuat kamu merasa sakit hati, kecewa, atau merasa tidak nyaman. Aku sadar mungkin ada perkataan atau sikapku yang belum bisa aku sampaikan dengan cara terbaik.",


"Mungkin ada kesalahpahaman di antara kita. Tapi aku ingin kamu tahu bahwa tidak pernah ada niat dari aku untuk membuat kamu terluka. Aku masih belajar memahami kamu, memahami perasaan kamu, dan menjadi seseorang yang lebih baik untuk kamu.",


"Aku harap kamu bisa memaklumi aku untuk saat ini. Belakangan ini aku baru saja melewati sesuatu yang cukup berat dan masih mencoba menyembuhkan trauma yang ada.",


"Tapi satu hal yang ingin aku yakinkan ke kamu, aku serius sama kamu Nayla. Aku ingin membangun hubungan ini menjadi sesuatu yang memiliki komitmen, rasa percaya, pengertian, dan usaha dari kita berdua.",


"Aku tidak ingin hanya menjadi seseorang yang hadir ketika semuanya mudah. Aku ingin menjadi seseorang yang tetap memilih kamu, bahkan ketika kita sedang menghadapi masalah bersama.",


"Terima kasih karena sudah menjadi seseorang yang begitu berarti dalam hidup aku. Aku akan terus belajar menjadi pasangan yang lebih baik, bukan hanya lewat kata-kata, tapi lewat tindakan.",


"Sekali lagi aku minta maaf ya Nayla. Aku sayang kamu ❤️"

];





const container: Variants = {

hidden:{
  opacity:0
},


show:{

  opacity:1,

  transition:{
    staggerChildren:0.35
  }

}

};





const item: Variants = {


hidden:{

  opacity:0,

  y:30

},



show:{

  opacity:1,

  y:0,


  transition:{

    duration:0.7,

    ease:[0.25,0.1,0.25,1]

  }

}

};







export default function LoveLetter(){


return (


<motion.section


initial={{

opacity:0,

scale:0.7,

rotateX:40,

y:100

}}



animate={{

opacity:1,

scale:1,

rotateX:0,

y:0

}}



transition={{

duration:1.2,

type:"spring",

bounce:0.35

}}



style={{

perspective:1000

}}



className="

relative

max-w-3xl

w-full

bg-white/75

backdrop-blur-xl

border

border-white

rounded-[35px]

shadow-2xl

p-8

md:p-14

"


>



{/* ICON */}

<div

className="

flex

justify-center

mb-8

"

>


<motion.div


animate={{

scale:[1,1.15,1],

rotate:[0,5,-5,0]

}}



transition={{

duration:2,

repeat:Infinity

}}



className="

bg-gradient-to-br

from-rose-400

to-red-500

text-white

p-5

rounded-full

shadow-xl

"


>


<Mail size={45}/>


</motion.div>


</div>






{/* TITLE */}


<motion.h1


initial={{

opacity:0,

y:-30

}}



animate={{

opacity:1,

y:0

}}



transition={{

delay:0.5,

duration:0.8

}}



className="

text-center

text-5xl

font-serif

font-bold

text-rose-600

"


>

Untuk Nayla ❤️


</motion.h1>






<motion.p


initial={{

opacity:0

}}



animate={{

opacity:1

}}



transition={{

delay:0.8

}}



className="

text-center

mt-3

italic

text-gray-500

"


>

Sebuah surat kecil dari Sajidan


</motion.p>









{/* CONTENT */}


<motion.article


variants={container}

initial="hidden"

animate="show"



className="

mt-10

space-y-6

text-gray-700

text-lg

leading-relaxed

font-light

"


>


{

paragraphs.map((text,index)=>(


<motion.p

key={index}

variants={item}

>

{text}

</motion.p>


))

}


</motion.article>









{/* SIGNATURE */}



<motion.div


initial={{

opacity:0,

y:40

}}



animate={{

opacity:1,

y:0

}}



transition={{

delay:3.5,

duration:1

}}



className="

mt-14

text-center

"


>



<motion.div


animate={{

rotate:[0,10,-10,0]

}}



transition={{

duration:3,

repeat:Infinity

}}


>


<Sparkles

className="

mx-auto

text-yellow-400

mb-5

"

/>


</motion.div>






<p

className="

font-serif

text-2xl

text-rose-600

"

>

{/* Dengan penuh cinta, */}

</p>





<p

className="

text-4xl

font-bold

text-gray-800

mt-2

"

>

Sajidan

</p>





<p

className="

italic

text-gray-500

"

>

sayang nayla❤️

</p>







<motion.div


animate={{

scale:[1,1.2,1]

}}



transition={{

duration:1.8,

repeat:Infinity

}}



className="

mt-6

flex

justify-center

"


>


<Heart

fill="currentColor"

className="

text-rose-500

"

/>


</motion.div>





</motion.div>






</motion.section>



)

}