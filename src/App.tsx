import React  from 'react';
import {Route, Routes} from "react-router-dom";
import routes from "./routes";
import {useAppSelector} from "./hooks/useAppSelector";


const App = () => {
  return (
    <div>
        {routes.map(route =>
            <Routes>
                <Route path={route.path} element={route.element}/>
            </Routes>
        )}
    </div>
  );
};

export default App;
