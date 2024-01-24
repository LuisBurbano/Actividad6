// Importar las dependencias necesarias
import { useEffect, useState } from 'react';
import axios from 'axios';

// Definir el componente principal de la aplicación
function App() {
  // Definir estados para almacenar los datos de los microservicios
  const [microservicio1Data, setMicroservicio1Data] = useState([]);
  const [microservicio2Data, setMicroservicio2Data] = useState('');

  // Efecto de efecto secundario para cargar datos al montar el componente
  useEffect(() => {
    // Consumir Microservicio 1
    axios.get('http://localhost:3001')
      .then(response => setMicroservicio1Data(response.data))
      .catch(error => console.error(error));

    // Consumir Microservicio 2
    axios.get('http://localhost:3002')
      .then(response => setMicroservicio2Data(response.data))
      .catch(error => console.error(error));
  }, []);

  let persons = [];
  for (const person of microservicio1Data) {
    const key = person.id !== undefined && person.id !== null
      ? person.id
      : Math.random();

    persons.push(
      <li key={key}>{person.firstname} {person.lastname}</li>
    );
  }
  let persons2 = [];
  for (const person of microservicio2Data) {
    const key = person.id !== undefined && person.id !== null
      ? person.id
      : Math.random();

    persons2.push(
      <li key={key}>{person.firstname} {person.lastname}</li>
    );
  }

  // Renderizar la interfaz de usuario
  return (
    <div>
      <h1>Cliente React con Vite</h1>
      <p>Gerentes:</p>
      <ol>{persons} </ol>
      <p>Desarrolladores:</p>
      <ol>{persons2}</ol>
    </div>
  );
}

// Exportar el componente principal
export default App;

