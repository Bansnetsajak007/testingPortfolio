// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Home } from './components/Home';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Home />
//       </div>
//     </Router>
//   );
// };

// export default App;

// App.jsx or your main component
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { Home } from './components/Home';
import AboutMe from './components/About'; // Import your AboutMe component
import Projects from './components/Projects'; // Import your Projects component
import NavComponent from './components/NavComponent';

const App = () => {
  return (
    // <Router>
    //   <div>
    //     <NavComponent />
    //     <Switch>
    //       <Route path="/about" component={AboutMe} />
    //       <Route path="/projects" component={Projects} />
    //       <Route path="/" component={Home} />
    //     </Switch>
    //   </div>
    // </Router>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutMe/>} />
      <Route path='/projects' element={<Projects/>} />
    </Routes>
 
 </BrowserRouter>
  );
};

export default App;
