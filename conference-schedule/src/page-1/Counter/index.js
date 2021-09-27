import React from 'react';
import './Counter.css';

const Counter = () => {
    const newYears = '23 Sep 2021';

    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();

        const totalSeconds = (newYearsDate - currentDate) / 1000;

        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        const d = document.querySelector('#days');
        const h = document.querySelector('#hours');
        const m = document.querySelector('#minutes');
        const s = document.querySelector('#seconds');

        d.innerHTML = days;
        h.innerHTML = hours;
        m.innerHTML = minutes;
        s.innerHTML = seconds;
    };

    setInterval(countdown, 1000);
    return (
        <div className="counter">
            <h1>New Years Eve</h1>

            <div class="countdown-container">
                <div class="countdown-el days-c">
                    <p class="big-text" id="days">0</p>
                    <span class="small-text">days</span>
                </div>
                <div class="countdown-el hours-c">
                    <p class="big-text" id="hours">0</p>
                    <span class="small-text">hours</span>
                </div>
                <div class="countdown-el minutes-c">
                    <p class="big-text" id="minutes">0</p>
                    <span class="small-text">mins</span>
                </div>
                <div class="countdown-el seconds-c">
                    <p class="big-text" id="seconds">0</p>
                    <span class="small-text">secs</span>
                </div>
            </div>
        </div>
    )
}

export default Counter
