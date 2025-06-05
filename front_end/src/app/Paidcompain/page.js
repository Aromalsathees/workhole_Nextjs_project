import Header from '../Head_Footer/Header'; 
import Footer from '../Head_Footer/Footer'; 

import Paid1 from '../components/Paid1';
import Paid2 from '../components/Paid2';

export default function Paidcompain() {
    return (
        <>
        <Header/>
        <main>
            <Paid1/>
            <Paid2/>
        </main>
        <Footer/>
        </>
    );
}