import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        const nav__sidebar = document.querySelector('.nav__sidebar');
        if (!open) {
            nav__sidebar.style.display = 'block';
        }
        else {
            nav__sidebar.style.display = 'none';
        }
        setOpen(!open);
    }

    return (
        <div className="nav">
            <div className="nav__container">
                <h1>Inviting</h1>
                <ul className="nav__list">
                    <button>
                        <li><a href="/">Home</a></li>
                    </button>
                    <button>
                        <li><a href="/">About</a></li>
                    </button>
                    <button>
                        <li><a href="#">Schedule</a></li>
                    </button>
                    <button>
                        <li><a href="#">Speakers</a></li>
                    </button>
                    <button>
                            <li><a href="#">Pricing</a></li>
                    </button>
                    <button>
                        <li><a href="#">Contact</a></li>
                    </button>
                </ul>
                <div className="nav__bar" onClick={toggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className="nav__sidebar">
                    <ul className="nav__list">
                        <button>
                            <li><a href="/"><h1 className="nav__listLinkName">Home</h1></a></li>
                        </button>
                        <button>
                            <li><a href="/"><h1 className="nav__listLinkName">About</h1></a></li>
                        </button>
                        <button>
                            <li><a href="#"><h1 className="nav__listLinkName">Schedule</h1></a></li>
                        </button>
                        <button>
                            <li><a href="#"><h1 className="nav__listLinkName">Speakers</h1></a></li>
                        </button>
                        <button>
                            <li><a href="#"><h1 className="nav__listLinkName">Pricing</h1></a></li>
                        </button>
                        <button>
                            <li><a href="#"><h1 className="nav__listLinkName">Contact</h1></a></li>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;
