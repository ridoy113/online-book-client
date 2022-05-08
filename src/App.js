import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddTrandingProduct from './Pages/AddTrandingProduct/AddTrandingProduct';
import Blogs from './Pages/Home/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Manage from './Pages/Home/Manage/Manage';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequirreAuth from './Pages/Login/RequireAuth/RequirreAuth';
import ManageTrandingProducts from './Pages/ManageTrandingProducts/ManageTrandingProducts';
import Order from './Pages/Order/Order';
import OrderHistory from './Pages/OrderHistory/OrderHistory';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import TrandingDetail from './Pages/TrandingDetail/TrandingDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/trandingProduct/:trandingId' element={<TrandingDetail></TrandingDetail>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/manage' element={<Manage></Manage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/order/:trandingId' element={
          <RequirreAuth>
            <Order></Order>
          </RequirreAuth>
        }></Route>

        <Route path='/addTrandingProduct' element={
          <RequirreAuth>
            <AddTrandingProduct></AddTrandingProduct>
          </RequirreAuth>
        }></Route>

        <Route path='/manageTrandingProducts' element={
          <RequirreAuth>
            <ManageTrandingProducts></ManageTrandingProducts>
          </RequirreAuth>
        }></Route>
        
        <Route path='/orderHistory' element={
          <RequirreAuth>
            <OrderHistory></OrderHistory>
          </RequirreAuth>
        }></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
