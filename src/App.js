import React from 'react'
import SocialCard from './components/SocialCard/SocialCard'
import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		/* this.commentCallback = this.commentCallback.bind(this)
		this.tweetCallback = this.tweetCallback.bind(this)
		this.likeCallback = this.likeCallback.bind(this) */
	}

	state = {
		cards: [
			{
				id: 1,
				comments: 2,
				tweets: 47,
				likes: 190,
				title: 'Learning React? Start small.',
				text:
					"Can't pry yourself from the tutorials? The cure is to make tiny little experiment apps.",
				link: 'dev.to',
				isCommented: false,
				isTweeted: false,
				isLiked: false
			},
			{
				id: 2,
				comments: 9,
				tweets: 99,
				likes: 999,
				title: 'Learning React? Start small.',
				text:
					"Can't pry yourself from the tutorials? The cure is to make tiny little experiment apps.",
				link: 'dev.to',
				isCommented: false,
				isTweeted: false,
				isLiked: false
			}
		]
	}

	/* commentCallback(e, id) {
		e.target.classList.toggle('active')
		
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
	} */

	render() {
		return (
			<div className='container'>
				<div className='row'>
					{
						this.state.cards.map(card => {
							return (
								<div className='col-2'>
									<SocialCard card={card} />
								</div>
							)
						})
					}
					{/* <div className='col-2'>
						<SocialCard card={this.state.cards[0]} />
					</div> */}
				</div>
			</div>
		)
	}
}

export default App;
