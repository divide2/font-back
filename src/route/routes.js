import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import login from "../Page/login"
import Home from "../Page/Home/home"
import User from "../Page/User"

const Routes=()=>(
    <Router>
        <div>
            <Route path="/login" component={login}/>
            <Route path="/"component={Home}>
                {/*<Route path="/User"  component={User}/>*/}
            </Route>
        </div>
    </Router>
)

export default Routes;
// import React from 'react'
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom'

// const ParamsExample = () => (
//     <Router>
//         <div>
//             <h2>Accounts</h2>
//             <ul>
//                 <li><Link to="/netflix">Netflix</Link></li>
//                 <li><Link to="/zillow-group">Zillow Group</Link></li>
//                 <li><Link to="/yahoo">Yahoo</Link></li>
//                 <li><Link to="/modus-create">Modus Create</Link></li>
//             </ul>
//
//             <Route path="/:id" component={Child}/>
//         </div>
//     </Router>
// )
//
// const Child = ({ match }) => (
//     <div>
//         <h3>ID: {match.params.id}</h3>
//     </div>
// )
//
// export default ParamsExample