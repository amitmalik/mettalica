import App from './App';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	return {
		trades : state
	};
}

const ConnectApp = connect(mapStateToProps)(App);

export default ConnectApp;
