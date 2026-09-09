import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    // Get existing messages
    const existingMessages = JSON.parse(
      localStorage.getItem("messages") || "[]",
    );

    // Create new message
    const newMessage = {
      id: Date.now(),
      name: user.name || "Guest User",
      email: user.email || "No email",
      message: message,
      date: new Date().toLocaleString(),
    };

    // Add new message
    existingMessages.push(newMessage);

    // Store messages
    localStorage.setItem("messages", JSON.stringify(existingMessages));

    setSuccess("Your message has been sent successfully.");
    setMessage("");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <h2 className="fw-bold">Contact Us</h2>

              <p className="text-muted">Send us your message.</p>

              {success && <div className="alert alert-success">{success}</div>}

              <form onSubmit={handleSubmit}>
                <textarea
                  className="form-control mb-3"
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  required
                />

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
