import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.css';

class App extends Component {
	componentDidMoung() {
		window.HollywoodLog && window.HollywoodLog.expose('sharepage.loaded', '分享页.加载完毕', '');
	}
	shareHandler = () => {
		window.HollywoodLog && window.HollywoodLog.click('sharepage.click', '分享页.立刻分享', '');
		window.share && window.share();
	};
	render() {
		return (
			<div styleName="App">
				<div styleName="composeImg">
					<img src={this.props.imgUrl} alt='' />
				</div>
				<div styleName="footer">
					<div styleName="leftText">
						<div styleName="t1">高考后的那一夜...</div>
						<div styleName="t2">在最初开始的地方，一切笑着告别</div>
						<div styleName="logoAndT3">
							<div styleName="logo">
								<img src={require('../images/pshare/logo.png')} alt='' />
							</div>
							<div styleName="t3">上优酷下拉首页有惊喜</div>
						</div>
					</div>
					<div styleName="btnShare" onClick={this.shareHandler}>分享图片</div>
				</div>
			</div>
		);
	}
}

export default CSSModules(App, styles);