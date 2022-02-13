import React, { useState } from 'react';
import './App.css';
import Tasks from './components/card/Tasks'
import Login from "./views/login/Login"

const App = () => {

  const [tasks, settasks] = useState(
    [
      {
        id: "1",
        title: "c-12345555",
        date: "15/10/2020 15:00",
        address: {
          from: "Rua Santa Virginia, 112 - Guarulhos/SP",
          to: "Rua Geraldo, 11 - Arujá/SP",
        },
        values: {
          money: "45.000,50",
          weight: "3000,50",
          charge: "200",
        },
        file: true,
        fileContent: "4567",
      },
      {
        id: "2",
        title: "c-78345555",
        date: "15/10/2020 15:00",
        address: {
          from: "Rua Santa Virginia, 112 - Guarulhos/SP",
          to: "Rua Geraldo, 11 - Arujá/SP",
        },
        values: {
          money: "45.000,50",
          weight: "3000,50",
          charge: "200",
        },
        file: true,
        fileContent: "4567",

      },
      {
        id: "3",
        title: "c-35674555",
        date: "15/10/2020 15:00",
        address: {
          from: "Rua Santa Virginia, 112 - Guarulhos/SP",
          to: "Rua Geraldo, 11 - Arujá/SP",
        },
        values: {
          money: "45.000,50",
          weight: "3000,50",
          charge: "200",
        },
        file: false,
        fileContent: "",

      },

    ]
  )

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
