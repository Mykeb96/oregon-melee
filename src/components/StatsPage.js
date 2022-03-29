import React from 'react'

const StatsPage = (props) => {

  const closeNav = () => {
    props.setIsNavOpen(false)
  }
  
  return (
    <div className='stats-container' onClick={closeNav}>
      
        <iframe id='player-stats' width='100%' height='100%' frameborder='0' allowfullscreen src='https://braacket.com/league/oregonmelee/ranking/1BFE8F9C-2092-4785-A360-A78C63375C96?rows=20&cols=&page=1&page_cols=1&game_character=&country=&search=&embed=1'></iframe>

        <a id='refresh-button' href='/stats'>Refresh</a>
    </div>
  )
}

export default StatsPage