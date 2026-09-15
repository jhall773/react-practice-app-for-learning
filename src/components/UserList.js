import User from './User.js'
function UserList({ users, nameInput, onNameInputChange, onUserSubmit, onDeleteUser, onWarmUpAdd, onWarmUpDeleteAll }) {
  return (
    <div>
        {/* The “Add User” form */}
        <form onSubmit={onUserSubmit}>
            <input
                value={nameInput}
                onChange={(e) => onNameInputChange(e.target.value)}
            />
            <button type="submit">Add User</button>
        </form>


        {/* The mapped <User /> components */}
        <p>
            <ul>
                {users.map(user => (
                <User 
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    onDelete={onDeleteUser} 
                />
                ))}
            </ul>
        </p>

        {/* Warm‑up (Dummy User Add/Delete) buttons */}
        <button onClick={onWarmUpAdd}>Warm-Up Add</button>
        <button onClick={onWarmUpDeleteAll}>Warm-Up Delete All</button>

    </div>
  );
}

export default UserList;