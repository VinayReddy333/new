import './index.css'

const Content = () => {
  return (
    <div className="content">
      <div className="customer-info">
        <h2>Hannibal Smith</h2>
        <p>12345 Market Street, San Francisco, CA 94105</p>
        <form>
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
        </form>
      </div>
      <div className="chat-section">
        <div className="conversation">
          <h3>Conversation</h3>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="attachment">
          <h3>Attachment</h3>
          <p>No files attached.</p>
        </div>
      </div>
      <div className="actions">
        <button>Add Action</button>
        <button>Assign to Another Agent</button>
      </div>
    </div>
  );
};

export default Content;
