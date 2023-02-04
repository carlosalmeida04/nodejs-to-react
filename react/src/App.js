import { useState } from 'react';
import axios from "axios"
import './App.css';

function App() {

	const [dataFromServer, setDataFromServer] = useState({ id: new Number(), user: "", password: ""})
	const [dataForServer, setDataForServer] = useState({ id: 1, user: "Carlos Almeida", password: "supersafepassword" })

	const getRequest = () => {
		axios({
			method: "get",
			url: "http://localhost:4000/userExample",
		}).then(function (response) {
			const data = response.data
			console.log(data)
			setDataFromServer({ id: data.id, user: data.user, password: data.password })
		}).catch(alert)
	}

	const postRequest = () => {

	}

	return (
		<div className="App">

			<button onClick={getRequest}>GET Request to NodeJS API</button>
			<button onClick={postRequest}>POST Request to NodeJS API</button>
			{
				dataFromServer === {} ? dataFromServer.map((data) => (
					<>
						<p> ID: {data.id} </p>
						<p> User: {data.user} </p>
						<p> Password: {data.password} </p>
					</>
				)) : false
			}
		</div>
	);
}

export default App;
