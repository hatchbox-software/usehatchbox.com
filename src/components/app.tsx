import { h } from 'preact';
import '../style/index.css';
import {useState, useEffect} from "preact/hooks";

const App = () => {
    const [loadingPeriods, setLoadingPeriods] = useState('...');

    useEffect(() => {
        setInterval(() => {
            setLoadingPeriods(prevLoadingPeriods => {
                if (prevLoadingPeriods.length === 3) {
                    return '.';
                } else
                    return prevLoadingPeriods + '.';
            })
        }, 800)
    }, []);

	return <div id="app">
        <img class="logo" src="assets/logo_color.png" alt="logo" height="80" />
        <div class="loading">Loading{loadingPeriods}</div>
    </div>
};

export default App;
