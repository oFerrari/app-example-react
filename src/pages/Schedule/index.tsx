import { CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { ContactCard } from "../../components/ContactCard";
import { ContactList } from "../../components/ContactList";
import { Title } from "../../components/Title";
import { BaseLayout } from "../../layout/BaseLayout";
import { getContacts } from "../../services/api";
import {Contact} from "../../types/index"
import '../Schedule/style.css'
import { AlignItemsList } from "../../components/AlignItemsList";

export function Schedule() {

    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [contacts, setContacts] = useState<Contact[]>([])

    const filteredContacts = () =>{

    }

    useEffect(() => {
        async function listContacts() {
            setIsLoading(true)
            setContacts(await getContacts())
            setIsLoading(false)
        }
        listContacts()
    }, [])

    return (
        <>
        <BaseLayout appBarTitle="Schedule">
            
            <Title text='Agenda de Contatos' />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
            {isLoading ? (
        <CircularProgress />
      ) : (
        <ContactList>{/* O certo era criar props pra esses elementos? */}
          {contacts.map((contact) => {
            return <AlignItemsList key={contact.login.uuid} contactData={contact} />;
          })}
        </ContactList>
      )}
            
            </BaseLayout>
        </>
    )
}