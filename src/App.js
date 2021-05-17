import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import NavBar from './Components/topBar/NavBar';
import Login from './Components/Login/Login';

class App extends React.Component {
	render() {
		return (
			<div >
				<div>
{this.props.isDisplayLoginForm === 0 ? '':<Login/>}  {/*prop nut login bat tat form dang nhap */}
				<NavBar />
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return{
	isDisplayLoginForm : state.isDisplaySignIn//ket noi state dang nhap vao prop form dang nhap
	}
}
const mapDispatchtoProps = (dispatch , props) => {
	return{
	}
}
export default connect(mapStateToProps, mapDispatchtoProps)( App);
