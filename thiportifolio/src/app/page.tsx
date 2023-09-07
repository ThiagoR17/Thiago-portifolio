import Image from 'next/image'
import { Experience } from './compo/experience/experience'
import { Header } from './compo/header/header'
import { Info } from './compo/information/information'


import "./styles/home.scss"
import { EmailIcon } from './compo/icons/email-icon'
import { SocialBtns } from './compo/social-btns/social-btns'

export default function Home() {
  return (
    <main className="container">
        <Header/>
        <Experience/>
        <Info/>
        <div className="buttons">
          <SocialBtns/>
          <a className="btn-primary" href="mailto:rthiago114@gmail.com">
            contact me
            <EmailIcon/>
          </a>
        </div>
    </main>
  )
}