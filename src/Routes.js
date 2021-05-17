import CategoryBegin from './Components/CateGoryBegin/CategoryBegin';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Cart from './Components/Cart/Cart';
//import PostProduct from './Components/PostProduct/PostProduct';
//import UserDetail from './Components/UserDetail/UserDetail';
import Order from './Components/Cart/Order';
import OrderDetail from './Components/Cart/OrderDetail';
import OrderSeller from './Components/Cart/OrderSeller';
import OrderHistory from './Components/Cart/OrderHistory';
import ProductRating from './Components/Cart/ProductRating';
import React from 'react';
import NotFound from './Components/NotFound/NotFound';
import OrderDetailAdmin from './Components/Admin/detail/OrderDetailAdmin';
import UserDetailAdmin from './Components/Admin/detail/UserDetailAdmin';
import ProductDetailAdmin from './Components/Admin/detail/ProductDetailAdmin';
import Dashboard from './Components/Admin/Dashboard';

const Routes = [
     {
          path: '/',
          exact: true,
          main: ({ match }) => <CategoryBegin match={match} />
     },
     {
          path: "/detail/:id/:slug",
          exact: true,
          main: () => < ProductDetail />
     },
     {
          path: '/carts',
          exact: false,
          main: () => <Cart />
     },
     // {
     //      path: '/postproduct',
     //      exact: false,
     //      main: () => <PostProduct />
     // },
     // {
     //      path: '/listItem',
     //      exact: false,
     //      main: () => <UserDetail />
     // },
     // {
     //      path: '/editInfo',
     //      exact: false,
     //      main: () => < EditInfo />
     // },
     // {
     //      path: '/editproduct',
     //      exact: false,
     //      main: () => < EditProduct />
     // },
     {
          path: '/listorder',
          exact: false,
          main: () => < Order />
     },
     {
          path: '/orderdetail',
          exact: false,
          main: () => <OrderDetail />
     },
     {
          path: '/orderhistorydetail',
          exact: false,
          main: () => <OrderHistory />
     },
     {
          path: '/orderhistory',
          exact: false,
          main: () => <OrderSeller />
     },
     {
          path: '/admin/user-detail',
          exact: false,
          main: () => <UserDetailAdmin />
     },
     {
          path: '/admin/product-detail',
          exact: false,
          main: () => <ProductDetailAdmin />
     },
     {
          path: '/dashboard',
          exact: false,
          main: () => <Dashboard />
     },
     {
          path: '/rating',
          exact: false,
          main: () => < ProductRating />
     },
     {
          path: '/admin/order-detail',
          exact: false,
          main: () => <OrderDetailAdmin />
     },
     {
          path: '',
          exact: false,
          main: () => < NotFound />
     } //only end of array
]

export default Routes;