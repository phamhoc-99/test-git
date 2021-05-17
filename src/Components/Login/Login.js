import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/action';
import callApi from '../../Utils/apiCaller';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false,
      userName: '',
      passWord: '',
      confirmPassWord: '',
      email: '',
      fullName: '',
      phone: '',
      status: true,
      agree: false,
      listUser: []
    };
  }

  onToggleSignIn = () => {
    this.setState({
      isDisplay: !this.state.isDisplay
    })
  }

  onToggleLoginForm = () => {
    this.props.onToggleLoginForm()
  }

  onChange = (event) => {
    const target = event.target;
    console.log(target.name)

    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  componentWillMount() {
    callApi('users', 'GET', null).then(res => {
      this.setState({
        listUser: res.data
      });
    })
  }

  onSubmitLogin = (event) => {
    event.preventDefault();
    const { userName, passWord, listUser } = this.state;
    let account = '';
    listUser.forEach(user => {
      if (user.userName === userName && user.passWord === passWord ) {
        account = user;
      }
    });
    if(account === ''){
      alert('You entered the wrong password')
    }else if(account!=='' && account.status === false){
      alert('your account has been banned, contact Foodieblog for more details')
    }
    else if(account.status===true){  //dang nhap ok
      this.props.onAccountAccess(account);
      this.props.onToggleLoginForm();
    }
  }

  componentClicked = () => {
  }

  responseFacebook = (response) => {
    const account = {
      id: response.userID,
      userName: response.name,
      name: response.name,
      passWord: '',
      email: response.email,
      picture: response.picture.data.url,
      address: ''
    };
    this.props.onAccountAccess(account);
    this.onToggleLoginForm();
  }

  onToggleAgree = () => {
    this.setState({
      agree: !this.state.agree
    })
  }

  makeCode = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  onSubmitRegister = (event) => {
    event.preventDefault();
    const user = {
      userName: this.state.userName,
      passWord: this.state.passWord,
      confirmPassWord: this.state.confirmPassWord,
      email: this.state.email,
      name: this.state.fullName,
      phone: this.state.phone,
      agree: this.state.agree,
      picture: 'https://freesvg.org/img/publicdomainq-0006224bvmrqd.png',
      address: this.state.address,
      permission: ['user'],
      status: true,
    };
    if (user.name === '') {
      alert('error name');
    } else if (user.passWord === '' || user.passWord !== user.confirmPassWord) {
      alert('error password');
    } else if (user.email === '') {
      alert('error mail');
    } else if (user.fullName === '') {
      alert('error full name');
    } else if (user.agree === false) {
      alert('you need to agree to the terms & conditions')
    } else {
      let confirmcode = this.makeCode();
      let cf = prompt(confirmcode, 'enter code to comfirm');
      if (cf === confirmcode) {
        this.props.onAddUser(user);
        this.onToggleSignIn();
      } else {
        alert('confirm code is false!')
      }
    }
  }

  render() {
    const { isDisplay, userName, passWord } = this.state;
    return (
      <div className="signin" data-aos="fade-right">
      
        <div className="signin__content">
          <div className="signin__form ">
            <ul className="nav nav-tabs pt-5 justify-content-center" role="tablist" onClick={this.onToggleSignIn}>
              <li className="nav-item ">
                <p className={isDisplay === false ? "nav-link active" : 'nav-link'} >
                  Sign in
              </p>
              </li>
              <li className="nav-item">
                <p className={isDisplay === true ? "nav-link active" : 'nav-link'}>
                  Sign up
              </p>
              </li>
            </ul>
            
<div className="tab-content">            
{/*tab login*/}<div className={isDisplay === true ? ' tab-pane ' : 'tab-pane active'} id="tabs-2" role="tabpanel">
  <div className="signin__form__text justify-center ">
                  <form onSubmit={this.onSubmitLogin}  className='max-w-md mx-auto flex flex-col justify-center'>
                    <input type="text"
                      name="userName"
                      value={userName}
                      onChange={this.onChange}
                      placeholder="User Name"   className="block mb-2 justify-center"/>
                    <input type="password"
                      name="passWord"
                      value={passWord}
                      onChange={this.onChange}
                      placeholder="Password" className="block mb-2"/>
                    <button type="submit" className="btn-danger rounded">Sign In</button>&nbsp;
                    <button className="btn-danger rounded" onClick={this.onToggleLoginForm}>cancel</button>
                  </form>
                </div>
                </div>

{/*tab register*/}<div className={isDisplay === false ? ' tab-pane' : 'active  tab-pane'}  id="tabs-1" role="tabpanel">
<div className="signin__form__text ">
                  <p className="text-center">Register an account to post your product</p>
                  <form onSubmit={this.onSubmitRegister} className="max-w-md mx-auto flex flex-col justify-center">
                    <input
                      name='userName'
                      type="text"
                      placeholder="User Name*"
                      onChange={this.onChange} className="block mb-2"/>
                    <input
                      name='passWord'
                      type="password"
                      placeholder="Password"
                      onChange={this.onChange} className="block mb-2"/>
                    <input
                      name='confirmPassWord'
                      type="password"
                      placeholder="Confirm Password"
                      onChange={this.onChange} className="block mb-2"/>
                    <input
                      name='email'
                      type="text"
                      placeholder="Email Address"
                      onChange={this.onChange} className="block mb-2"/>
                    <input
                      name='phone'
                      type="text"
                      placeholder="Phone number"
                      onChange={this.onChange} className="block mb-2"/>
                    <input
                      name='fullName'
                      type="text"
                      placeholder="Full Name"
                      onChange={this.onChange} className="block mb-2"/>
                    <input
                      name='address'
                      type="text"
                      placeholder="address"
                      onChange={this.onChange} className="block mb-2"/>
                    <label className="block">
                      I agree to the terms & conditions
                       <input
                        type="checkbox"
                        id="sign-agree-check"
                        onClick={this.onToggleAgree}
                        onChange={this.onChange} 
                      />
                      <span className="checkmark"></span>
                    </label>
                    <button type="submit" className="btn-danger rounded">Register Now</button>&nbsp;
                    <button className="btn-danger rounded" onClick={this.onToggleLoginForm}>cancel</button>
                  </form>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listUser: state.ListUser,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleLoginForm: () => {
      dispatch(action.isDisplaySignIn());
    },
    onAccountAccess: (account) => {
      dispatch(action.account(account));
    },
    onAddUser: (user) => {
      dispatch(action.actAddUserRequest(user));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);