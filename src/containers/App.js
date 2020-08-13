import React, {useState, useEffect} from 'react';
import './App.css';
import Joke from "../components/Joke/Joke";
import RefreshBtn from "../components/RefreshBtn/RefreshBtn";

const url = 'https://api.chucknorris.io/jokes/random';

function App() {

    const [joke, setJoke] = useState('');

    const fetchData = async () => {
        const response = await fetch(url);
        if (response.ok) {
            const newJoke = await response.json();
            setJoke(newJoke.value);
        }
    }

    useEffect(() => {
        fetchData().catch(e => console.error(e));
    }, []);

    return (
        <div className="App">
            <RefreshBtn
                click={fetchData}
            />
            <Joke
                value={joke}
            />
        </div>
    );
}

export default App;
