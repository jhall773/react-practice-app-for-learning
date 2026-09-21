import InputMessage from './InputMessage.js'
function MessageBox({ message, messageInput, onMessageInputChange, onMessageSubmit, testAPIFetch }) {
  return (
    <div>
        {/* The "Enter Message" form */}
        <form onSubmit={onMessageSubmit}>
            <InputMessage messageInput={messageInput} onMessageChange={onMessageInputChange} />
            <button type="submit">Enter Msg</button>
        </form>

        {/* Display Message */}
        <p>{message}</p>

        <button onClick={testAPIFetch}>Test simple-api Backend</button>
    </div>
  );
}

export default MessageBox;