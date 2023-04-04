import { AddressBook, ImageSquare } from "phosphor-react";
/* import { Button } from "../../components/Button"; */
import { Menu } from "../../components/Menu";
import { MenuItem } from "../../components/MenuItem";
import { Title } from "../../components/Title";
import { Link } from 'react-router-dom'
import { BaseLayout } from "../../layout/BaseLayout";

export function Home() {
    return (
        
        <BaseLayout appBarTitle="Dashboard">
            
                <Title text='Bem Vindo' />
            
                <Menu>
                    <Link to='/schedule'>
                    <MenuItem icon={<AddressBook size={24}/>} text={"Agenda"}/>
                    </Link> 
                    <Link to='/gallery'>
                    <MenuItem icon={<ImageSquare size={24}/>} text={"Galeria"}/>
                    </Link> 
                </Menu>
            
        </BaseLayout>
    )
}