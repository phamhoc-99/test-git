import { combineReducers } from 'redux';
import  ListProduct  from './ListProduct';
import isDisplaySignIn from './IsDisPlaySignIn';
import ListUser from './ListUser';
import account from './account';
import Cart from './Cart';
import ProductTypes from './ProductTypes';
import PaymentMethods from './PaymentMethods'
import OrderStatus from './OrderStatus';
import Orders from './Orders';
import OrderDetail from './OrderDetail';
import Dashboard from '../../Components/Admin/Dashboard'
import ManageComps from './ManageComps';
import currentPage from './currentPage';

const myReducer = combineReducers({
   ListUser,
   account,
   ListProduct,
   isDisplaySignIn,
   Cart,
   ProductTypes,
   PaymentMethods,
   OrderStatus,
   Orders,
   OrderDetail,
   Dashboard,
   ManageComps,
   currentPage,
});

export default myReducer;