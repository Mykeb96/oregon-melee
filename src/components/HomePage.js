import React from 'react'

const HomePage = (props) => {

  const handleClick = () => {
    props.setIsNavOpen(true)
    console.log('You Navigated!')

    if (props.isNavOpen == true) {
      props.setIsNavOpen(false)
    }
  }

  const closeNav = () => {
    props.setIsNavOpen(false)
  }




  return (
    <div>
    
      <div className="pic-ctn" onClick={closeNav}>
    <img src={require('./assets/Fatgoku.png')} alt="" className="pic" />
    <img src={require('./assets/Aura.png')} alt="" className="pic" />
    <img src={require('./assets/Stiv.png')} alt="" className="pic" />
    <img src={require('./assets/MM.png')} alt="" className="pic" />
    <img src={require('./assets/Yamasaki.png')} alt="" className="pic" />
    <img src={require('./assets/Ford.png')} alt="" className="pic" />
    <img src={require('./assets/Quist.png')} alt="" className="pic" />
    <img src={require('./assets/Erodingsun.png')} alt="" className="pic" />
    <img src={require('./assets/CNV.png')} alt="" className="pic" />
    <img src={require('./assets/Daniels.png')} alt="" className="pic" />
  </div>



    </div>            
  )
}

export default HomePage