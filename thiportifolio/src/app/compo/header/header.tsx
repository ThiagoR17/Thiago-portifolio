import Image from 'next/image'

import "./header.scss"


export function Header(){
    return(  
    <div className="header">
    <div>
      <h1>Hi, i´am Thiago!</h1>
      <h2>Computer scientist</h2>
    </div>
    <Image
            src="/me.jpg"
            alt="Vercel Logo"
            width={325}
            height={310}
            priority
          />
    </div>   
    )
}