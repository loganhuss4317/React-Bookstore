import React from 'react'
import UnDrawBooks from '../assets/Undraw_Books.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section id="landing">
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>Kennesaw's most awarded online library platform.</h1>
                    <h2>Find your dream book with <span className='purple'>Library</span></h2>
                    <Link to="#features">
                        <button className="btn">Browse Books</button>
                    </Link>
                </div>
                <figure className='header__img--wrapper'>
                    <img src={UnDrawBooks} alt="" />
                </figure>
            </div>
        </header>

    </section>
  )
}

export default Landing