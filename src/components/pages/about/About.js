import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            I am a student who is on a mission of continuously improving himself.
            I am seeking an entry level position in order to expand my skill set and get exposure to a professional environment.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>LinkedIn:</strong> @NeacsuRobert
              </p>
              <p>
                <strong>Email:</strong> robertneacsu2000@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +40727 041 400
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - Romanian
              </p>
              <p>
                <strong>Second Language</strong> - English
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
