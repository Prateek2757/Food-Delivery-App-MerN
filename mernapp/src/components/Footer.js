import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-5 bg-dark text-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <address className="text-light">
              <h5 className="mb-3">Location</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.473929622702!2d85.33517711438535!3d27.69477723285688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199c1e6a6a65%3A0x1c9a78e6e2e8c8a!2sOld%20Baneswor%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1623949358234!5m2!1sen!2snp"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map Location"
              ></iframe>
            </address>
          </div>
          <div className="col-md-4">
            <address className="text-light">
              <h5 className="mb-3">Address</h5>
              <p>Old Baneswor</p>
              <p>Kathmandu</p>
            </address>
          </div>
          <div className="col-md-4">
            <address className="text-light">
              <h5 className="mb-3">Contact Information</h5>
              <p>
                <Link to="tel:+977-123456789" className="text-light text-decoration-none">
                  <i className="fas fa-phone"></i> +977-123456789
                </Link>
              </p>
              <p>
                <Link to="mailto:foodmart@example.com" className="text-light text-decoration-none">
                  <i className="fas fa-envelope"></i> foodmart@gmail.com
                </Link>
              </p>
            </address>
          </div>
        </div>
      </div>
      <div className="container text-center mt-4">
        <p className="text-muted mb-0">© 2024 Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
