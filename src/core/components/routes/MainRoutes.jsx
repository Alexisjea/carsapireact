import {Routes , Route} from 'react-router-dom';
import CarsList from '../../../pages/CarsList';
import Home from '../../../pages/home/Home';
import Car from '../../../pages/Car';


const MainRoutes = () => {
    return(
        <>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/cars' element={<CarsList></CarsList>}></Route>
            <Route path='/car/:id' element={<Car></Car>}></Route>
        </Routes>
        </>
    );
}
export default MainRoutes;