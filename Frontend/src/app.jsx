import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './component/Header';
// import MyOrder from './container/myOrder';
// import OrderList from './container/orderList';
// import OrderHistory from './container/orderHistory';
// import Address from './container/address';
// import Home from './component/home';
import Home from './HomePage/Export';
import Index from './component/Index/Export';
import About from './component/About/Export';
import Login from './container/login';
import SignUp from './container/signup';
import Verify from './container/verify_first';
import VerifyEmailOtp from './container/verifyEmailOtp';
import Logout from './container/logout';
import Forgot from './container/forgotPswd';
import ChangePswd from './container/change_pswd';
// import UserCart from './component/user_cart';
import { PrivateComponent, PublicComponent } from './component/private';
// import CartState from "./context/cart/State"
// import HomeState from "./context/home/State"
export default function App() {

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/change_password' element={<ChangePswd />}></Route>
				<Route element={<PrivateComponent />}>
					{/* <Route path='/' element={<HomeState><Home /></HomeState>}></Route> */}
					<Route path='/home' element={<Home />}></Route>
					<Route path='/logout' element={<Logout />}></Route>
					{/* <Route path='/order' element={<MyOrder/>}></Route>
					<Route path='/order_list/:oid/:pid' element={<OrderList/>}></Route>
					<Route path='/order_history' element={<OrderHistory />}></Route>
					<Route path='/cart' element={<CartState><UserCart /></CartState>}></Route>
					<Route path='/address' element={<CartState><Address /></CartState>}></Route> */}
				</Route>

				<Route element={<PublicComponent />}>
					<Route path='/' element={<Index />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/signup' element={<SignUp />}></Route>
					<Route path='/forgot_password' element={<Forgot />}></Route>
					<Route path='/verify_first' element={<Verify />}></Route>
					<Route path='/verifyEmailOtp' element={<VerifyEmailOtp />}></Route>
				</Route>

			</Routes>
		</BrowserRouter>
	)
}