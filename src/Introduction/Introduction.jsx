import "./Introduction.css";

function Introduction() {
  return (
    <>
      <section className="intro container">
        <div className="intro__image-holder">
          <img
            src="/img/the-town-01.4ca14cd0d1ec4453b5eb.jpeg"
            alt=""
            className="intro__img"
          />
        </div>
        <div className="intro__text">
          <h2 className="intro__title">Introduction</h2>
          <p className="intro__first-text">
            The Town is <strong>simple CSS template</strong> built on HTML CSS
            and this is a little parallax layout that you can use for your
            website
          </p>
          <p className="intro__second-text">
            please tell your friends about our site{" "}
            <span>
              <a href="#">
                <strong className="your-site">YourSite</strong>
              </a>
            </span>
            . Thank you. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Itaque, nisi tenetur.
          </p>
          <a className="intro__btn">Read More</a>
        </div>
      </section>
    </>
  );
}
export default Introduction;
