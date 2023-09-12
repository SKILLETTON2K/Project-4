import React from "react";
import '../../pages/App/App.css';
import Footer from "../Footer/Footer";
import Schemcards from "./Schemcards";
import './Schemcards.css';

function Schematics () {
    return (
        <>
        <form className='schematics-back'>
            <h1 className='schematics'>Schematic Library &nbsp; <i class="fa-solid fa-file-arrow-down"></i></h1>

                <Schemcards />

        </form>


            <Footer />
        </>
    )
}

export default Schematics;