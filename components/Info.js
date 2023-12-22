import React from 'react'

export default function Info() {
    return (
            <div className="info-card">
                <h1>Ash Ketchum</h1>
                <h3>Front End Developer</h3>
                <h4>AshKetchum.Website</h4>
                <div id="buttons">
                    <button><i className="fa-regular fa-envelope"></i> Email</button>
                    <a href="https://www.linkedin.com/in/ash-ketchum-a3a840298/"><button id="button2" ><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
                    </a>
                </div>
        </div>
    )
}