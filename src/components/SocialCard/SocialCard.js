import React from 'react'
import Card from '../Card/Card'
import Reaction from '../Reaction/Reaction'

import './SocialCard.css'

class SocialCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: this.props.card.id,
			title: this.props.card.title,
			text: this.props.card.text,
			link: this.props.card.link,
			comments: this.props.card.comments,
			tweets: this.props.card.tweets,
			likes: this.props.card.likes,
			isCommented: this.props.card.isCommented,
			isTweeted: this.props.card.isTweeted,
			isLiked: this.props.card.isLiked
			/* id: 1,
			title: 'Learning React? Start small.',
			text:
				"Can't pry yourself from the tutorials? The cure is to make tiny little experiment apps.",
			link: 'dev.to',
			comments: 2,
			tweets: 47,
			likes: 190,
			isCommented: false,
			isTweeted: false,
			isLiked: false */
		}
		this.commentCallback = this.commentCallback.bind(this)
		this.tweetCallback = this.tweetCallback.bind(this)
		this.likeCallback = this.likeCallback.bind(this)
	}

	commentCallback(e) {
		e.target.classList.toggle('active')
		this.setState({
			isCommented: !this.state.isCommented
		})

		if (this.state.isCommented) {
			return this.setState({
				comments: this.state.comments - 1
			})
		}
		return this.setState({
			comments: this.state.comments + 1
		})
	}

	tweetCallback(e) {
		e.target.classList.toggle('active')
		this.setState({
			isTweeted: !this.state.isTweeted
		})

		if (this.state.isTweeted) {
			return this.setState({
				tweets: this.state.tweets - 1
			})
		}
		return this.setState({
			tweets: this.state.tweets + 1
		})
	}

	likeCallback(e) {
		e.target.classList.toggle('active')
		this.setState({
			isLiked: !this.state.isLiked
		})

		if (this.state.isLiked) {
			return this.setState({
				likes: this.state.likes - 1
			})
		}
		return this.setState({
			likes: this.state.likes + 1
		})
	}

	render() {
		const reactionWrapperStyle = {
			marginTop: '20px'
		}

		const { comments, tweets, likes, title, text, link } = this.state

		return (
			<div className='SocialCard'>
				<Card title={title} text={text} link={link} />
				<div style={reactionWrapperStyle}>
					<Reaction
						comments={comments}
						tweets={tweets}
						likes={likes}
						commentCallback={this.commentCallback}
						tweetCallback={this.tweetCallback}
						likeCallback={this.likeCallback}
					/>
				</div>
			</div>
		)
	}
}

export default SocialCard