import React from 'react'
import { Link } from 'react-router-dom'

//Components

const Channel = ({channel, channelShow, userShow}) => {
  return(
      <div key={channel.id} className="card  channel-card" >
      <Link to={{pathname: `/channel/${channel.id}`, state: channel.id}}>
        <div className="section" style={{"paddingTop": "40%"}}onClick={() => channelShow(channel.id)}>
          {channel.name}
        </div>
        </Link>

      </div>
    )


}

// <div className="section author">
//   {channel.authors.map(author =>
//     <By key={author.id} user={author} userShow={userShow}/>)}
// </div>

export default Channel
