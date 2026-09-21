import InputMessage from './InputMessage.js'
function MessageBox({ message, messageInput, onMessageInputChange, onMessageSubmit }) {
  return (
    <div>
        {/* The "Enter Message" form */}
        <form onSubmit={onMessageSubmit}>
            <InputMessage messageInput={messageInput} onMessageChange={onMessageInputChange} />
            <button type="submit">Enter Msg</button>
        </form>

        {/* Display Message */}
        <p>{message}</p>

    </div>
  );
}

export default MessageBox;