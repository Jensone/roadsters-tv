import React, { useState, useEffect } from 'react';

export default function Counter() {
    const API = "/api/ulule";
    const [amount, setAmount] = useState(null);

    const fetchData = () => {
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                // On met à jour l'état avec le montant levé
                setAmount(data.amount_raised);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données :", error);
            });
    };

    useEffect(() => {
        // Appel initial pour récupérer les données immédiatement
        fetchData();
        // Interrogation de l'API toutes les 10 secondes (10000 ms)
        const intervalId = setInterval(fetchData, 60000);
        // Nettoyage de l'intervalle lors du démontage du composant
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="text-center">
            <p className="text-6xl font-extrabold my-10">
                <span>{amount !== null ? amount : 0}</span> &euro;
            </p>
            <a
                href="https://fr.ulule.com/hayabusa-rodsters-tv/"
                className="text-lg bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full py-4 px-6 my-4 inline-block"
            >
                Participez vous aussi !
            </a>
        </div>
    );
}
