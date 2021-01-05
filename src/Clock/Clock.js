import React, { useEffect } from 'react';
import './Clock.css';

function Clock() {

    useEffect(() => {
        const deg = 6; //360deg / 60(min||sec) => 6
        const hr = document.querySelector("#hr");
        const mn = document.querySelector("#mn");
        const sc = document.querySelector("#sc");
        /*var digits = {};

            var positions = ['h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2' ];

            var digitHolder = clock.find('.digits');

            $.each(positions, function(){
        */
        setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30; //360deg / 12 hour => 30
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;
        /*var digits = {};

            var positions = ['h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2' ];

            var digitHolder = clock.find('.digits');

            $.each(positions, function(){
        */
        hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
        });
        });

    

    return (
        <div className="clock-wrapper">
            <div className="clock">
                <div className="hour">
                    <div className="hr" id="hr"></div>
                </div>
                <div className="min">
                    <div className="mn" id="mn"></div>
                </div>
                <div className="sec">
                    <div className="sc" id="sc"></div>
                </div>
            </div>
        </div>
    );
}

export default Clock;