import Header from '../components/Header';
import UserList from '../components/UserList';

function UsersPage({
  headerMode,
  showMessage,
  backdropColor,
  toggleMessage,
  toggleHeaderMode,
  toggleBackdrop,
  users,
  nameInput,
  onNameInputChange,
  onUserSubmit,
  onDeleteUser,
  onWarmUpAdd,
  onWarmUpDeleteAll
}) {
  return (
    <div className="App" style={{ backgroundColor: backdropColor ? "DodgerBlue" : "LimeGreen", minHeight: "120vh" }}>
      
      <Header
        headerMode={headerMode}
        showMessage={showMessage}
        backdropColor={backdropColor}
        toggleMessage={toggleMessage}
        toggleHeaderMode={toggleHeaderMode}
        toggleBackdrop={toggleBackdrop}
      />

      <UserList
        users={users}
        nameInput={nameInput}
        onNameInputChange={onNameInputChange}
        onUserSubmit={onUserSubmit}
        onDeleteUser={onDeleteUser}
        onWarmUpAdd={onWarmUpAdd}
        onWarmUpDeleteAll={onWarmUpDeleteAll}
      />
    </div>
  );
}

export default UsersPage;