import React from 'react'

const ContactPage = (props) => {

  const closeNav = () => {
    props.setIsNavOpen(false)
  }
  
  return (
    <div className='contact-container' onClick={closeNav}>

      <div className='mykael-box'>
        <h3>Myke B</h3>
        <span>Myke B#5709</span>
        <a href='https://mykeb96.github.io/mykael-barnes/' >My Personal Website</a>
        <span>Mykael.Barnes@hotmail.com</span>
        <a href='https://twitter.com/xMykeB' >@xMykeB</a>
      </div>

      <div className='to-box'>

        <div className='to-card'>
          <h3>Cat Named Virtue</h3>
          <span>Cat Named V#2222</span>
          <span>vos.heart2@gmail.com </span>
          <a href='https://twitter.com/CatNamed_V' >@CatNamed_V </a>
        </div>

        <div className='to-card'>
          <h3>Connor Kelly</h3>
          <span >contra#2235</span>
          <span>connor@level1.tv</span>
          <a href='https://twitter.com/connrokelt'>@Connrokelt</a>
        </div>

        <div className='to-card' id='logan'>
          <h3>Logan Kingsbury</h3>
          <span>Shake_Zula#3927</span>
          <a href='https://twitter.com/titularfigment' >@Titularfigment</a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage