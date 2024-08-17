import { useParams } from "react-router-dom";

const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      contacts:[
      {name:"", 
      phone:"",
      email:"",
      address:""}
    ],
    id:null
    },
    
    actions: {
      setId(id){
        setStore({id})
        console.log(getStore())
      },
      getContacts: () => {
        fetch('https://playground.4geeks.com/contact/agendas/pedrobriceno/contacts', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setStore({
            contacts:data.contacts
            });
          })
          .catch((error) => console.log(error));
      },
      createContact: (contact) => {
        console.log(contact)
        fetch('https://playground.4geeks.com/contact/agendas/pedrobriceno/contacts', {
          method:"POST",
          headers:{
            "content-type":"application/json",
            "accept": "application/json"
          },
          body: JSON.stringify(contact)
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          })
        .catch((error) => console.log(error));
      },
      deleteContact: (id) => {
        const store = getStore()
        fetch('https://playground.4geeks.com/contact/agendas/pedrobriceno/contacts/'+ store.id, {
          method: "DELETE"
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          })
        .catch((error) => console.log(error));
      ;
      },
      updateContact: (id, contact) => {
      
      fetch('https://playground.4geeks.com/contact/agendas/pedrobriceno/contacts/'+ id, {
        method: "PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(contact)
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        })
      .catch((error) => console.log(error));
    ;
  },
  }
};
}
export default getState;