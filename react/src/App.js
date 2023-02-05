import { useState } from 'react';
import axios from "axios"
import './App.css';

function App() {

	const [dataFromServer, setDataFromServer] = useState({ id: null, user: "", password: "" })
	//const [dataForServer, setDataForServer] = useState({ id: 1, user: "Carlos Almeida", password: "supersafepassword" })

	const getRequest = () => {
		axios({
			method: "get",
			url: "http://localhost:4000/userExample",
		}).then(function (response) {
			const data = response.data
			console.log(data)
			setDataFromServer({ id: data.id, user: data.user, password: data.password })
			console.log(dataFromServer)
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
