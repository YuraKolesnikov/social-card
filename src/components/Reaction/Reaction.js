import React from 'react'
import './Reaction.css'

const Reaction = props => {
  const iconStyle = {
		fontWeight: 'light',
		fontSize: '20px'
	}
	
	const activateIcon = e => {
		console.log(e.target)
		e.target.classList.toggle('active')
	}
  
  return (
		<div>
			<span className='Reaction__Item' onClick={props.commentCallback}>
				<i style={iconStyle} className='fa fa-comment light-grey' />{' '}
				{props.comments}
			</span>
			<span className='Reaction__Item' onClick={props.tweetCallback}>
				<i style={iconStyle} className='fa fa-retweet green' /> {props.tweets}
			</span>
			<span className='Reaction__Item' onClick={props.likeCallback}>
				<i style={iconStyle} className='fa fa-heart red' /> {props.likes}
			</span>
			<span className='Reaction__Item' onClick={activateIcon}>
				<i style={iconStyle} className='fa fa-envelope light-grey' />
			</span>
		</div>
	)
}

export default Reaction