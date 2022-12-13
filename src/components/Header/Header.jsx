import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Online Library.</h2><br />
                <p className='header-text fs-18 fw-3'>From building your vocabulary to reducing stress, preventing age-related cognitive decline and increasing your ability to empathize, reading books is an easy way to look after your mind and body.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header