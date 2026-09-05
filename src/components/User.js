function User({ id, name, onDelete }) {
  return (
    <li>
      {name}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}


/* This is the detailed version of the same function using object destructor above:
function User(props) {
  return <li>{props.name}</li>;
}
*/

export default User; // 'User' here is a component.