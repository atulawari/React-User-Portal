function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow border-0">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">My Profile</h3>
            </div>

            <div className="card-body p-4">
              <div className="row mb-3">
                <div className="col-sm-4 fw-bold">Name</div>

                <div className="col-sm-8">{user?.name}</div>
              </div>

              <hr />

              <div className="row">
                <div className="col-sm-4 fw-bold">Email</div>

                <div className="col-sm-8">{user?.email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
