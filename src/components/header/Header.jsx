import PendingActionsIcon from '@mui/icons-material/PendingActions';
import './Header.css';

const Header = () => {
    return(
        <div className = "header">
            <h1 class= "text">
                <PendingActionsIcon/>
                Carpe Diem<br />
                Seize The Day!
                <PendingActionsIcon/>
            </h1>
        </div>


    ); 
}

export default Header;