import React from 'react';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import {map} from "lodash";
import routes from "./routes";


export function Navigation() {
  console.log(routes)
  //return(<h2>HOLA</h2>)
  return (
    <BrowserRouter>
      <Routes>
          {map(routes, (route, index) => (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  element={
                      <route.layout>
                          <route.component />
                      </route.layout>
                  }
              />
          ))}
      </Routes>
    </BrowserRouter>
  );
}
