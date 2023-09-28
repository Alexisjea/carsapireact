import {Routes , Route} from 'react-router-dom';
import CarsList from '../../../pages/CarsList';
import Home from '../../../pages/home/Home';


const MainRoutes = () => {
    return(
        <>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/cars' element={<CarsList></CarsList>}></Route>
        </Routes>
        </>
    );
}
export default MainRoutes;