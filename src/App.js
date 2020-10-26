import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

// <Route path="/jackets" component={JacketsPage} />
//         <Route path="/womans" component={WomansPage} />
//         <Route path="/mans" component={MansPage} />

// <Nav />
// const Nav = () => {
//   return (
//     <div>
//       <ul>
//         <Link to="/">HomePage</Link>
//         <Link to="/jackets">JacketsPage</Link>
//         <Link to="/womans">WomansPage</Link>
//         <Link to="/mans">MansPage</Link>
//         <Link to="/hats">HatsPage</Link>
//       </ul>
//     </div>
//   );
// };
