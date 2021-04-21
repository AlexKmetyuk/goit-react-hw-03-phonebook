import { Component } from 'react';
import PhonebookForm from './components/phonebook/PhonebookForm'
import PhonebookList from './components/phonebook/PhonebookList'
import Filter from './components/phonebook/Filter'
import './styles.css'



class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  createContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))
  }

  handleCheckUniqueContact = name => {
    const { contacts } = this.state;
    const check = contacts.find(contact => {
      return contact.name === name;
    });
    if (check) {
      alert('Contact is already exist');
      return check;
    }
  };

  handleRemoveContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value })
  }

  render(){
    const {contacts, filter} = this.state

    const normalizedContactNames = filter.toLocaleLowerCase()

    const visibleContacts = contacts.filter(contact => 
      contact.name.toLocaleLowerCase().includes(normalizedContactNames))

  return (
    <div className={'app'}>
      <h1>Phonebook</h1>
      <PhonebookForm contacts={contacts} check={this.handleCheckUniqueContact} onSubmit={this.createContact}/>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.changeFilter}/>
      <PhonebookList contacts={visibleContacts} onRemove={this.handleRemoveContact}/>
    </div>
  );}
  
}

export default App;
