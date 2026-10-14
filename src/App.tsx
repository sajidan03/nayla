import {useState} from "react";

import FloatingHearts from "./components/FloatingHearts";
import LoveLetter from "./components/LoveLetter";
import Envelope from "./components/Envelope";

import {motion, AnimatePresence} from "framer-motion";


function App(){


const [opened,setOpened]=useState(false);



return (

<main

className="
min-h-screen
overflow-hidden
relative

flex
items-center
justify-center

px-5

bg-gradient-to-br
from-rose-100
via-pink-50
to-red-100

"


>


<FloatingHearts/>




<AnimatePresence mode="wait">


{

!opened ?


<motion.div

key="envelope"

exit={{
opacity:0,
scale:0.5,
rotate:-10
}}

transition={{
duration:.8
}}

>


<Envelope
onOpen={()=>setOpened(true)}
/>


</motion.div>



:


<motion.div

key="letter"

initial={{
opacity:0,
y:80
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

>

<LoveLetter/>

</motion.div>



}



</AnimatePresence>




</main>


)

}


export default App;