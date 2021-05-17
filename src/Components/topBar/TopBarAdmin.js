import React from 'react';
import { Link } from 'react-router-dom';

class TopBarAdmin extends React.Component {
	render() {
		const { account } = this.props;
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3">
							<div className="header__btn">
								{/* {account.name === '' ?
									<button className="primary-btn "
										onClick={this.onSignIn}>Sign In
								    </button> : */}
									<div>
										<img alt='avatar' src={account.picture} className="avatar" /> &nbsp;      {/*1*/}
										<p className="" >
											<Link to='/editinfo'>{account.name}</Link>  &nbsp;|&nbsp;       {/*2*/}
											<button title="Log Out" type="button" onClick={this.props.onLogOut} className="fas fa-sign-out-alt">log out</button>{/*3*/}
										</p>
									</div>
								{/* } */}
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="header__logo">
								<div>
									<h3 className="text-dark bg-light">ADMIN DASHBOARD</h3>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3">
							<div className="header__social">
								<div>
									<Link to='/dashboard'>
										<p className="" >
											Dashboard
										</p>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		)
	}
}
export default TopBarAdmin;