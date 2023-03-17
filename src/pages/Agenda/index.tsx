import { CartaoContato } from "../../components/CartaoContato";
import { ListaContatos } from "../../components/ListaContatos";
import { Title } from "../../components/Title";



export function Agenda(){
    return(
        <>
        <header>
            <Title text='Agenda de Contatos' />
        </header>
        <main>
        <ListaContatos>
            <CartaoContato />
            <CartaoContato />
            <CartaoContato />
        </ListaContatos>
        </main>
        </>
    )
}