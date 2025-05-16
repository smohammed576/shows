import DataContext from "@/hooks/context/DataContext";
import GuestLayout from "@/Layouts/GuestLayout";
import { useContext } from "react";

function Welcome(){
    const {data} = useContext(DataContext);
    console.log(data)
    return(
        <GuestLayout>
            <section className="shows">
                <h3 className="shows__title">Discover</h3>
                <ul className="shows__list">
                    {
                        data?.results?.map((item, index) => 
                            <li className="shows__item" key={index}>
                                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.name} className="shows__item--image" />
                            </li>
                        )
                    }
                </ul>
            </section>
        </GuestLayout>
    )
}
    
export default Welcome;