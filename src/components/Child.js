function Child({ messageInput, onMessageChange }) {
  return (
    <input
      value={messageInput}
      onChange={(e) => onMessageChange(e.target.value)}
    />
  );
}

export default Child;