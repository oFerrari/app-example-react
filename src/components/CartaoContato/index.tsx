import '../CartaoContato/style.css'
import { Button } from "../Button";
import { Title } from "../Title";

export function CartaoContato(){
    return(
        <>
            <div className="cards">
                <img src="https://randomuser.me/api/portraits/women/56.jpg" alt="" />
                <div>
                <Title text="Marlene Pery"/>
                <p className='email'><Title text="Marlene@Pery.com"/></p>
                <Button text="Entrar" type="primary" /> 
                </div> 
            </div>
        </>
    )
}