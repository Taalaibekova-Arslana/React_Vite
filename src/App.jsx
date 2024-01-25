import { useEffect } from "react";
import { useState } from "react";

const App = () => {
	const [data, setData] = useState([]);
	const [input, setInput] = useState("");
	console.log(input);

	const getdata = async () => {
		try {
			const response = await fetch(`https://rickandmortyapi.com/api/character`);
			const responseData = await response.json();
			const filteredData = await responseData.results.filter(
				(item) => item.id <= input
			);
			setData(filteredData);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getdata();
	}, []);

	return (
		<div>
			<input
				value={input}
				type="number"
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={() => getdata()}>UpDate</button>
			{data.map((item) => (
				<div key={item.id}>
					<h3>{item.name}</h3>
					<p>{item.status}</p>
					<p>{item.type}</p>
					<p>{item.gender}</p>
					<img src={item.image} alt="" style={{ width: 200 }} />
				</div>
			))}
		</div>
	);
};

export default App;
