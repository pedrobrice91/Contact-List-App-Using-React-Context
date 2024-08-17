import { Link, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { Context } from "../store/context";

const Addcontact = () => {
  const state = useContext(Context);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleOnChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case "fullname":
        setFullname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "address":
        setAddress(value);
        break;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = {
      name: fullname,
      phone: phone,
      email: email,
      address: address,
    };
    //console.log(contact);
    state.actions.createContact(contact);
  };

  /* const state = useContext(Context);
	//  state.store.contacts[]
  
	useEffect(() => {
	  state.actions.getContacts();
	}, []);
	console.log(state.store.contacts);
	 */

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="p-2">
            <h1>Add a new contact</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="d-flex form-label"
                >
                  <strong>Full Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="full name"
                  onChange={handleOnChange}
                  value={fullname}
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label d-flex"
                >
                  <strong>Email address</strong>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  onChange={handleOnChange}
                  value={email}
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label d-flex"
                >
                  <strong>Phone</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter phone"
                  onChange={handleOnChange}
                  value={phone}
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label d-flex"
                >
                  <strong>Address</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter address"
                  onChange={handleOnChange}
                  value={address}
                />
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  value="Save"
                  className="form-control  text-bg-primary p-3"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
            </form>
          </div>
          <Link to="/" className="d-flex">
            or get back to contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Addcontact;
