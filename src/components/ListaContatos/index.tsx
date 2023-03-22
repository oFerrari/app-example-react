import '../ListaContatos/style.css'

type ListaContatos = {  
    children: React.ReactNode
}

export function ListaContatos({children}:ListaContatos){
    return(
        <>
        <section className="listaContatos">
            {children}
        </section>
        </>
    )
}