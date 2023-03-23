import { useEffect, useState } from "react";
import { ContactCard } from "../../components/ContactCard";
import { ContactList } from "../../components/ContactList";
import { Title } from "../../components/Title";
import { getContacts } from "../../services/api";



export function Schedule(){

    const [search,setSearch] = useState('')
    const [contacts,setContacts] = useState<Contact[]>([])

    useEffect(()=>{
        async function listContacts() {
            setContacts(await getContacts())
        }
        listContacts()
        },[])

    return(
        <>
        <header>
            <Title text='Agenda de Contatos' />
        </header>
            <input onInput={(event)=>{setSearch(event.target.value)}} type="search" className="inputSearch"/>  
        <main>
            
        <ContactList>
            {contacts.map(contact =>{
                return <p>{contact.name.first}</p>
            })
        }
            <CartaoContato />
            <CartaoContato />
            <CartaoContato />
        </ContactList>
        </main>
        </>
    )
}