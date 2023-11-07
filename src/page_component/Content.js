import React from 'react';

export default function Content() {

  return (
    <div>
      <section id="intro">
        <div class="container-fluid mt-5 mb-5">
          <div class="row justify-content-center align-items-center">

            <div class="col-md-5 text-center text-md-start">
              <h1>
                <div class="display-2">Welcome</div>
                <div class="display-5 text-muted">to Code of lives</div>
              </h1>
              <p class="lead my-4 text-muted">
                Practice page design using reactjs and bootstrap. Free source code for template design @git
              </p>
              <a href="#pricing" class="btn btn-secondary btn-lg">
                Download
              </a>
            </div>

            <div class="col-md-5 text-center d-none d-md-block">
              <img
                class="img-fluid"
                src="https://img.freepik.com/free-vector/web-design-background_1300-39.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
