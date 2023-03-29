import '../ContactCard/style.css'
import { Button } from "../Button";
import { Title } from "../Title";
import {Contact} from "../../types/index"

type ContactCardProps = {
    contactData: Contact,
}

export function ContactCard({contactData}:ContactCardProps){
    const { name, email, picture } = contactData;
    return(
        <>
            <div className="cards">
                <img src={picture.medium} alt="" />
                <div>
                    <h2>Alma Richardson</h2>
                    <p className='email'> alma.richardson@example.com</p>

                    <Button text='Detalhes' type='primary'></Button>
                </div> 
            </div>
        </>
    )
}