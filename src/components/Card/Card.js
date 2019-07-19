import React from 'react'
import './Card.css'

class Card extends React.Component {
  render() {
    return (
      <div className='Card'>
				<div className='Card__Img'>
					<img src='https://via.placeholder.com/800x250' />
				</div>
				<div className='Card__Footer'>
					<h5 className='Card__Title'>
						{this.props.title}
					</h5>
					<p className='Card__Text'>
						{this.props.text}
					</p>
					<span className='Card__Link'>
						{this.props.link}
					</span>
				</div>
			</div>
    )
  }
}

export default Card