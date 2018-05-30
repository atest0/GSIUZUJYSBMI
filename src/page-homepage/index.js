import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			showModal: true
		};
	}

	render() {
		return (
			<div styleName="App">
				<img src={require('../images/homepage.jpg')}  />
				<div styleName="logo">
					<img src={require('../images/youkulogo.png')}  />
				</div>
				<div styleName="btn" onClick={this.props.onClick}>
					<img src={require('../images/button.png')}  />
				</div>
			</div>
		);
	}
}

export default CSSModules(App, styles);