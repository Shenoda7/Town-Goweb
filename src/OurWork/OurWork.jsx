import "./OurWork.css";
function OurWork() {
  return (
    <>
      <section className="ourwork">
        <div className="container">
          <h2 className="ourwork__heading">Our Work</h2>
          <p className="ourwork__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            Asperiores labore corrupti autem reiciendis! Asperiores, mollitia.
          </p>
          <div className="ourwork__images">
            <img
              src="/public/img/gallery-img-01.f25f9d70ba9c0d823dfc.png"
              alt=""
              className="ourwork__image"
            />
            <img
              src="/public/img/gallery-img-02.4fd85b73e5d68c8e3858.png"
              alt=""
              className="ourwork__image"
            />
            <img
              src="/public/img/gallery-img-03.f869b983869a8ee411c5.png"
              alt=""
              className="ourwork__image"
            />
            <img
              src="/public/img/gallery-img-04.a5c52c8ad07dbb52d80b.png"
              alt=""
              className="ourwork__image"
            />
            <img
              src="/public/img/gallery-img-05.02ff04a6a3436acc970b.png"
              alt=""
              className="ourwork__image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default OurWork;
