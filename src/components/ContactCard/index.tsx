import '../ContactCard/style.css'
import {Button} from '@mui/material'
/* import { Title } from "../Title"; */
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
                    <h2>{name.first} {name.last}</h2>
                    <p className='email'> {email}</p>

                    <Button className='button' variant="contained">Detalhes</Button>
                </div> 
            </div>
        </>
    )
}