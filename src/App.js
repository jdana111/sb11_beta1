import "./App.css";
import primaryData from "./data.js";
import moment from "moment";

function formatDate(date) {
  return date ? moment(date).format("MM/DD/YYYY") : "";
}

const property = primaryData.property

const contactList = primaryData.contacts.map((contact) => (
  <li key={contact.id}>
    <input type="checkbox" checked={contact.done} />
    {contact.firstName} {contact.lastName}, Active Date:{" "}
    {formatDate(contact.activeDate)}, Retire Date:{" "}
    {formatDate(contact.retireDate)}
  </li>
));

function App() {
  return (
    <>
      <h1>{property.retireDate && '~'} {property.propertyName}</h1>
      <ul>{contactList}</ul>
    </>
  );
}

export default App;
