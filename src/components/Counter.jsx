import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

export default function Counter() {
    const API = '/api/ulule';
    const [amount, setAmount] = useState(0);
    const previousAmountRef = useRef(0);

    const fetchData = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            previousAmountRef.current = amount;
            setAmount(data.amount_raised);
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 60000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="text-center">
            <p className="text-6xl font-bold my-10">
                <CountUp
                    start={previousAmountRef.current}
                    end={amount}
                    duration={1}
                    redraw={true}
                    separator=" "
                /> &euro;
            </p>
            <a
                href="https://fr.ulule.com/hayabusa-rodsters-tv/"
                target='_blank' rel='noreferrer'
                className="text-lg bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full py-4 px-6 my-4 inline-block animate-bounce"
            >
                Participez vous aussi !
            </a>
        </div>
    );
}
