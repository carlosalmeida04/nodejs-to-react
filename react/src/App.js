import { useState } from 'react';
import axios from "axios"
import './App.css';

function App() {

	const [dataFromServer, setDataFromServer] = useState({ id: null, user: "", password: "" })


	const getRequest = () => {
		axios({
			method: "get",
			url: "http://localhost:4000/userExample",
		}).then((response) => {
			const data = response.data
			setDataFromServer({ id: data.id, user: data.user, password: data.password })
		}).catch(alert)
	}

	return (
		<div className="App">

			<p> ID: {dataFromServer.id} </p>
			<p> User: {dataFromServer.user} </p>
			<p> Password: {dataFromServer.password} </p>

			<button onClick={getRequest}>GET Request to NodeJS API</button>
		</div>
	);
}

export default App;
