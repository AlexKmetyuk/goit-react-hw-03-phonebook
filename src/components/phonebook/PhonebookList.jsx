
export default function PhonebookList({contacts, onRemove}){

const listItems= contacts.map(contact => 
    <li key={contact.id} > <p>    📱    {contact.name}: {contact.number}</p> <button onClick={() => {onRemove(contact.id)}}>Remove</button></li>
    )

    return(
        <ul>{listItems}</ul>
    )
    }