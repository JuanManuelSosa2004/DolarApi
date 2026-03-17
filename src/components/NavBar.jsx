import { BrowserRouter } from "react-router";
import {Link} from 'react-router';

export function NavBar() {
    return (
       <nav>
        <Link to ="/">Home</Link>
        <Link to ="/calculator">Calculator</Link>
       </nav>
    )
}