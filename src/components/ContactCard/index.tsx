import '../ContactCard/style.css'
import { Button } from "../Button";
import { Title } from "../Title";
import {Contact} from "../../types/index"



export function ContactCard({contactCard}:ContactCardProps){
    return(
        <>
            <div className="cards">
                <img src="https://randomuser.me/api/portraits/women/56.jpg" alt="" />
                <div>
                    <h2>Alma Richardson</h2>
                    <p className='email'> alma.richardson@example.com</p>

                    <Button text='Detalhes' type='primary'></Button>
                </div> 
            </div>
        </>
    )
}