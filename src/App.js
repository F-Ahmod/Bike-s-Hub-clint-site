import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SingleBike from './pages/SingleBike/SingleBike';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './pages/Hooks/AuthProvaider';
import AddBike from './AddBike/AddBike';
import ExploreBikes from './pages/ExploreBikes/ExploreBikes';
import DashBoard from './pages/DashBoard/DashBoard';
import MyOrder from './pages/MyOrder/MyOrder';
import ManageAllOrders from './pages/ManageAllOrders/ManageAllOrders';
import Review from './pages/Review/Review';
import MakeAdmin from './pages/MakeAdmin/MakeAdmin';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import About from './pages/About/About';
import Banner2 from './pages/Banner2/Banner2';
import Clint from './pages/Clint/Clint';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/singleBike/:id">
          <SingleBike></SingleBike>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/addBike">
          <AddBike></AddBike>
        </Route>
        <Route  path="/exploreBikes">
          <ExploreBikes></ExploreBikes>
        </Route>
        <Route  path="/dashBoard">
          <DashBoard></DashBoard>
        </Route>
        <Route  path="/myOrder">
          <MyOrder></MyOrder>
        </Route>
        <Route  path="/review">
          <Review></Review>
        </Route>
        <Route  path="/about">
          <About></About>
        </Route>
        <Route  path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route  path="/banner2">
          <Banner2></Banner2>
        </Route>
        <Route  path="/clint">
          <Clint></Clint>
        </Route>
        <Route  path="/ManageAllOrders">
          <ManageAllOrders></ManageAllOrders>
        </Route>
        <Route  path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
