function About() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow border-0">
            <div className="card-body p-5">
              <h1 className="fw-bold mb-4">About This Project</h1>

              <p className="lead">
                This is a React User Portal built using React, React Router DOM
                and Bootstrap.
              </p>

              <hr />

              <h4>Features</h4>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">React Router Navigation</li>

                <li className="list-group-item">
                  Login and Registration Forms
                </li>

                <li className="list-group-item">Form Validation</li>

                <li className="list-group-item">Protected Routes</li>

                <li className="list-group-item">LocalStorage Authentication</li>

                <li className="list-group-item">Responsive Bootstrap UI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
