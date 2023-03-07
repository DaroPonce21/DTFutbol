import React from 'react';
import { Provider } from "react-redux"
import store from "./store"
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import "./styles/styles.scss"
import Navbar from './components/Navbar';
import Formacion from './components/Formacion';

const App = () => (
  <Provider store={store}>
    <main>
      <h1>DT Fantastico</h1>
      <Navbar/>
      <Jugadores />
      <Formacion/>
      <EquipoSeleccionado />
    </main>
  </Provider>
)

export default App;