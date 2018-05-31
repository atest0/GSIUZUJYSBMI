import React, { Component } from 'react';
import Page0 from './page-0';
import PageShare from './page-share';
import PageHomePage from './page-homepage';
class App extends Component {
	state = {
		showHomepage: true,
		showSharePage: false,
		currentChangjingIndex: 0
	};
	clickStartHandler = () => {
		window.HollywoodLog && window.HollywoodLog.click('homePageStart.click', '首页.开始', '');
		this.setState({
			showHomepage: false
		});
	};

	clickGenerateHandler = (currentChangjingIndex) => {
		try {
			if (this.isFetching) return false;
			this.isFetching = true;
			this.setState({
				isFetching: true
			});
			window.uploadImg && window.uploadImg('', (imgUrl) => {
				this.setState({
					showSharePage: true,
					currentChangjingIndex,
					imgUrl,
					isFetching: false
				});
				this.isFetching = false;
			}, (error) => {
				console.log(error);
				this.isFetching = false;
				this.setState({
					isFetching: false
				});
			});
		} catch(e) {
			console.log('hello');
		}
		
		window.HollywoodLog && window.HollywoodLog.click('canvasGenerate.click', '画布页.生成', '');
	};

	componentDidMount() {
		const LOADING_NODE = document.getElementById('loading');
		LOADING_NODE && LOADING_NODE.parentNode.removeChild(LOADING_NODE);
	}
	render() {
		if (this.state.showHomepage) {
			return <PageHomePage onClick={this.clickStartHandler} />;
		}
		if (this.state.showSharePage) {
			return <PageShare imgUrl={this.state.imgUrl} changjingIndex={this.state.currentChangjingIndex} />;
		}
		return (
			<Page0 onClickGenerateHandler={this.clickGenerateHandler} />
		);
	}
}

export default App;