import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectBlock } from '../store/actions/blocks'

const BlockContainer = (props) => {
  return(
    <div className="row">
  {props.blocks.map(block => {
    console.log(block)
    return (
      <div key={block.id} className="card" onClick={() => props.selectBlock(block)}>
        <Link to={`/block/${block.id}`}>
        {block.content}
        <p>author: {block.author_name}</p>
      </Link>
    </div>
      )
    })}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectBlock: (block) => {
    return dispatch(selectBlock(block))
    }
  }
}

export default connect(null, mapDispatchToProps)(BlockContainer)