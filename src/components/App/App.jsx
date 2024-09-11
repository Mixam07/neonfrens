import { Routes, Route } from 'react-router-dom';
import Enter from '../Enter/Enter';
import FrenslistcheckerContainer from '../Frenslistchecker/FrenslistcheckerContainer';
import HomeContainer from '../Home/HomeContainer';
import Labs from '../Labs/Labs';
import MintportalContainer from '../Mintportal/MintportalContainer';

const App = (props) => {
    return(
        <Routes>
            <Route path="/" element={ <Enter /> } />
            <Route path="/home" element={ <HomeContainer /> } />
            <Route path="/labs" element={ <Labs /> } />
            <Route path="/frenslistchecker" element={ <FrenslistcheckerContainer /> } />
            <Route path="/mintportal" element={ <MintportalContainer /> } />
        </Routes>
    )
}

export default App;