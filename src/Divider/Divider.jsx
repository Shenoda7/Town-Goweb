import "./Divider.css";
function Divider() {
  return (
    <>
      <section className="divider">
        <div className="container">
          <div className="divider__projects">
            <div className="divider__proj">
              <h2 className="divider__proj-header">First Work</h2>
              <a href="#" className="divider__proj-link">
                Click To Show
              </a>
              <p className="divider__proj-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores labore corrupti autem reiciendis! Asperiores,
                mollitia.
              </p>
            </div>
            <div className="divider__proj">
              <h2 className="divider__proj-header">Second Work</h2>
              <a href="#" className="divider__proj-link">
                Click To Show
              </a>
              <p className="divider__proj-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores labore corrupti autem reiciendis! Asperiores,
                mollitia.
              </p>
            </div>
            <div className="divider__proj">
              <h2 className="divider__proj-header">Third Work</h2>
              <a href="#" className="divider__proj-link">
                Click To Show
              </a>
              <p className="divider__proj-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores labore corrupti autem reiciendis! Asperiores,
                mollitia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Divider;
