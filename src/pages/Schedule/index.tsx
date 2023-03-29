import { useEffect, useState } from "react";
import { ContactCard } from "../../components/ContactCard";
import { ContactList } from "../../components/ContactList";
import { Title } from "../../components/Title";
import { getContacts } from "../../services/api";

type Contact = {
    name: {
        first: string,
        last: string,

    },
    email: string,

    picture: {
        medium: string,
    }
}

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
            <input type="search" className="inputSearch"/>  
        <main>
            
        <ContactList>
            {
                contacts.map(contact =>{
                return <ContactCard contactData={contact} />
            })
            }
        </ContactList>
        </main>
        </>
    )
}