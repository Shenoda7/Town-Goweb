import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__block">
            <section className="footer__content">
              <h2 className="footer__heading">Contact Us</h2>
            </section>
            <section className="footer__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At in
              sequi facere, doloribus fugit inventore error quo doloremque cum
              esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              in sequi facere, doloribus fugit inventore error quo doloremque
              cum esse?
            </section>
          </div>
          <div className="footer__contact-info">
            <div className="footer__phone-location">
              <p className="footer__phone">Phone: +201 119 554 463</p>
              <p className="footer__location">Location: Location On Map</p>
            </div>
            <div className="footer__email-form">
              <div className="footer__email">
                Email: shenoda3445454@gmail.com
              </div>
              <form className="footer__form">
                <input type="email" placeholder="Subscribe Your Mail" />
                <button className="footer__form-btn">Submit</button>
              </form>
            </div>
          </div>

          <div className="footer__copyright">
            Copyright © 2019 Company Name - Design: <span>HishamKhalil</span>{" "}
            Mo
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
