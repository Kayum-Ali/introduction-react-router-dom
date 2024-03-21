import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";


const Home = () => {
    const [photos, setPhoto] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setPhoto(data))
    }, [])
    return (
        <div className='flex justify-center items-center flex-col bg-slate-400 text-white'>

            <Header></Header>

            <Outlet></Outlet>
            <Footer></Footer>
            <div className="grid grid-cols-3 container mx-auto">
                {
                    photos.map(photo => <img key={photo.id} src={photo.url}></img>)
                }
            </div>

        </div>
    );
};

export default Home;