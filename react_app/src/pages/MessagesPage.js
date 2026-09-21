import Header from '../components/Header';
import MessageBox from '../components/MessageBox';

function MessagesPage({
  headerMode,
  showMessage,
  backdropColor,
  toggleMessage,
  toggleHeaderMode,
  toggleBackdrop,
  message,
  messageInput,
  onMessageInputChange,
  onMessageSubmit
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

      <MessageBox
        message={message}
        messageInput={messageInput}
        onMessageInputChange={onMessageInputChange}
        onMessageSubmit={onMessageSubmit}
      />
    </div>
  );
}

export default MessagesPage;