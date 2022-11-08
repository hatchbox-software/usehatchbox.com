import { h } from 'preact';
import '../style/index.css';
import {useState, useEffect} from "preact/hooks";
import { motion } from 'framer-motion';

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

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const item = {
        hidden: {
            y: -70,
            opacity: 0
        },
        show: { opacity: 1, y: 0 }
    }

	return <div id="app">
        <motion.div
            style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
            variants={container}
            initial="hidden"
            animate="show"
        >
            <motion.img className="logo" src="assets/logo_color.png" alt="logo" height="110" variants={item} />
            <motion.div class="loading" variants={item}>
                Loading{loadingPeriods}
            </motion.div>
        </motion.div>
    </div>
};

export default App;
