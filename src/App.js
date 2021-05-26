import "./style.css";
import React, { useState } from "react";
import Modal from "./components/Modal";
import Burger from "./components/Burger";

function App() {
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(true);
  return (
    <div>
      <div>
        {show && <Burger closeBurger={() => setShow(false)} />}
        {/*burger */}
        <main>
          <div className="text-box">
            <h1 className="main-title">Japan</h1>
            <p className="paragraph">
              Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec.
              Donec viverra eleifend lacus, vitae ullamcor.
            </p>

            {status && (
              <Modal
                closeModal={() => setStatus(false)}
                id="myModal"
                className="modal"
              >
                <div className="modal-content">
                  <div className="modal-box">
                    <h3>More Information:</h3>
                    <p className="modal-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur veritatis nihil quae ipsa molestias eveniet
                      rerum neque esse quaerat facilis! Numquam, reprehenderit
                      blanditiis necessitatibus saepe maxime corporis earum!
                      Eligendi dolores eum soluta earum amet eaque numquam vitae
                      impedit fuga architecto aspernatur eos, suscipit
                      asperiores sapiente. Illo illum odio optio vero?
                    </p>
                  </div>
                </div>
              </Modal>
            )}
            <div className="container">
              <button
                onClick={() => setStatus(true)}
                id="myBtn"
                className="btn"
              >
                Learn More..
              </button>
            </div>
          </div>
          <div className="image-1"></div>
        </main>
      </div>
    </div>
  );
}

export default App;
