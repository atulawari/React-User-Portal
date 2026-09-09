function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  // Get submitted messages from localStorage
  const messages = JSON.parse(localStorage.getItem("messages") || "[]");

  return (
    <div className="container py-5">
      <div className="mb-5">
        <h1 className="fw-bold">Welcome, {user?.name} 👋</h1>

        <p className="text-muted">Here is an overview of your account.</p>
      </div>

      <div className="row g-4">
        {/* Profile */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title">Profile</h5>

              <h2 className="text-primary">Active</h2>

              <p className="text-muted">Your profile is active.</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title">Messages</h5>

              {/* Changed 0 to messages.length */}
              <h2 className="text-success">{messages.length}</h2>

              <p className="text-muted">
                {messages.length === 0
                  ? "No new messages."
                  : `You have ${messages.length} submitted message${
                      messages.length > 1 ? "s" : ""
                    }.`}
              </p>
            </div>
          </div>
        </div>

        {/* Account Status */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title">Account Status</h5>

              <h2 className="text-warning">Active</h2>

              <p className="text-muted">Your account is working properly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
