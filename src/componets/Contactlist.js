import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { useEffect, useContext } from "react";
import { Context } from "../store/context";

const Contactlist = (props) => {
  const state = useContext(Context);
  const navigate = useNavigate()
  //  state.store.contacts[]

  useEffect(() => {
    state.actions.getContacts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-end p-2">
            <button type="button" className="btn btn-success mb-3">
              <Link to="/create" className="textDecoration">
                Add new contact
              </Link>
            </button>
          </div>

          <ul className="list-group">
            {state.store.contacts.map((contact, index) => (
              <li key={index} className="list-group-item">
                <div className="d-flex">
                  <div className="p-2">
                    <img
                      className="rounded-circle"
                      alt="avatar1"
                      width="100"
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
                    />
                  </div>
                  <div className="p-2">
                    <div>
                      <div className="d-flex">{contact.name}</div>
                      <div className="d-flex">
                        <i className="fa-solid fa-location-dot me-2"></i>
                        {contact.address}
                      </div>
                      <div className="d-flex">
                        <i className="fa-solid fa-phone me-2"></i>
                        {contact.phone}
                      </div>
                      <div className="d-flex">
                        <i className="fa-solid fa-envelope me-2"></i>
                        {contact.email}
                      </div>
                    </div>
                  </div>
                  <div className="p-2 flex-grow-1">
                    <div className="d-flex justify-content-end">
                      <div className="p-2">
                          <i  className="fa-solid fa-pen"
                          onClick={() => navigate('edit/'+contact.id) }
                          ></i>
                      </div>
                      <div className="p-2">
                        <i
                          className="fa-solid fa-trash"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => state.actions.setId(contact.id)}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Are you sure?
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  If you delete this thing the entire universe will go down!
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Oh no!
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => state.actions.deleteContact()}
                  >
                    Yes baby!
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactlist;
