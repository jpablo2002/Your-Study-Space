import React from 'react';
import Controls from './Music/Controls';
import Weather from './Weather/Weather';

import './Dashboard.css'

const Dashboard = () => {
    const closeModal = function (e) {
        const modal = document.querySelector('.modal');
        const login = document.querySelector('.login-button')
        const [, home, dashboard] = document.querySelector('.app').children;
        if (e.target !== login && e.target !== modal && !modal.classList.contains('hidden')) {
            document.querySelector('.modal').classList.toggle('hidden');
            home.classList.toggle('blur');
            dashboard.classList.toggle('blur');
        }
    }

    return (
        <div className='dashboard' onClick={closeModal}>
            <Controls />
            <h1 className='title'></h1>
            <Weather />
        </div>
    );
}

export default Dashboard;