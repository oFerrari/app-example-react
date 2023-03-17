import { Button } from "../Button";
import { Title } from "../Title";

export function CartaoContato(){
    return(
        <>
            <div className="cards">
                <img src="https://randomuser.me/api/portraits/women/56.jpg" alt="" />
                <Title text="Marlene Pery"/>
                <Title text="Marlene@Pery.com"/>
                <Button text="Entrar" type="primary" />
                
            </div>
        </>
    )
}