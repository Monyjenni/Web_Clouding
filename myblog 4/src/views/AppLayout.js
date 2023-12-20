import React from 'react';
import Nav from '../components/Nav'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AppLayout({ setLang, title, shortDec, children }) {

    return (
    <>
        <Nav setLang={setLang} />
        <Header title={title} shortDec={shortDec} />
        
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                { children }
            </div>
        </div>
    
        <Footer />
    </>
)
}
