import React, { Component } from 'react'
import { GC_USER_ID } from '../constants'
import { timeDifferenceForDate } from '../utils'

class Link extends Component {

  render() {
    const { url, votes, postedBy, createdAt, description } = this.props.link
    const userId = localStorage.getItem(GC_USER_ID)
    return (
      <div className='flex mt2 items-start'>
        <div className='flex items-center'>
          <span className='gray'>{this.props.index + 1}.</span>
          {userId && <div className='ml1 gray f11' onClick={() => this._voteForLink()}>▲</div>}
        </div>
        <div className='ml1'>
          <div>{description} ({url})</div>
          <div className='f6 lh-copy gray'>{votes.length} votes | by {postedBy ? postedBy.name : 'Unknown'} {timeDifferenceForDate(createdAt)}</div>
        </div>
      </div>
    )
  }

  _voteForLink = async () => {
    // ... you'll implement this in chapter 6
  }

}

export default Link
