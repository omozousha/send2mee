import React, { useEffect } from 'react';

const UserDisplay = () => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get('username');
        const usernameTypewriter = document.getElementById('username-typewriter');

        if (username) {
            const decodedUsername = decodeURIComponent(username.replace(/\+/g, ' '));
            usernameTypewriter.textContent = decodedUsername;
        } else {
            usernameTypewriter.textContent = 'We invite you to celebrate our wedding';
        }
    }, []);

    return (
        <div>
            <h1 style={{ fontSize: '1.5rem', fontFamily: 'Stint Ultra Condensed, cursive', textShadow: '0 0 5px white' }}>
                <span id="username-typewriter"></span>
            </h1>
        </div>
    );
};

export default UserDisplay;