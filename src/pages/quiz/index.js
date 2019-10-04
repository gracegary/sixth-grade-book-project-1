import React, { useState } from "react";
import Layout from "../../components/Layout";

export default () => {
  const [answer1, setAnswer1] = useState(null);
  const [answer2, setAnswer2] = useState(null);
  const [answer3, setAnswer3] = useState(null);
  const [answer4, setAnswer4] = useState(null);
  const [answer5, setAnswer5] = useState(null);
  const [answer6, setAnswer6] = useState(null);

  const checkAnswers = () => {
    const wrongAnswers = [];
    if (answer1 !== "3") {
      wrongAnswers.push("1");
    }
    if (answer2 !== "1") {
      wrongAnswers.push("2");
    }
    if (answer3 !== "1") {
      wrongAnswers.push("3");
    }
    if (answer4 !== "3") {
      wrongAnswers.push("4");
    }
    if (answer5 !== "2") {
      wrongAnswers.push("5");
    }
    if (answer6 !== "2") {
      wrongAnswers.push("Bonus");
    }

    if (wrongAnswers.length > 0) {
      alert(
        `You got the following questions wrong: ${wrongAnswers.join(", ")}`
      );
    } else {
      alert("You got them all correct!  Great job!");
    }
  };

  return (
    <Layout>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/header_dark.jpg')`
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: "0.5rem 0 0 #76acc2, -0.5rem 0 0 #76acc2",
            backgroundColor: "#76acc2",
            color: "white",
            padding: "1rem"
          }}
        >
          How much do you know about my Dead Boyfriend!?
        </h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="feature">
              <h4>1. Who kills Blade?</h4>
              <select
                onChange={e => {
                  setAnswer1(e.target.value);
                }}
                style={{ fontSize: "1.2rem", margin: "1rem" }}
              >
                <option value="0">Select Answer</option>
                <option value="1">Deena</option>
                <option value="2">Miranda</option>
                <option value="3">Caitlin</option>
              </select>
            </div>

            <div className="feature">
              <h4>2. Where does Caitlin work?</h4>
              <select
                onChange={e => {
                  setAnswer2(e.target.value);
                }}
                style={{ fontSize: "1.2rem", margin: "1rem" }}
              >
                <option value="0">Select Answer</option>
                <option value="1">Cineplex</option>
                <option value="2">Target</option>
                <option value="3">Lefty's</option>
              </select>
            </div>

            <div className="feature">
              <h4>3. Where do Caitlin and her friends hang out?</h4>
              <select
                onChange={e => {
                  setAnswer3(e.target.value);
                }}
                style={{ fontSize: "1.2rem", margin: "1rem" }}
              >
                <option value="0">Select Answer</option>
                <option value="1">Lefty's</option>
                <option value="2">Steak and Shake</option>
                <option value="3">Righty's</option>
              </select>
            </div>

            <div className="feature">
              <h4>4. Who is Caitlin's friend?</h4>
              <select
                onChange={e => {
                  setAnswer4(e.target.value);
                }}
                style={{ fontSize: "1.2rem", margin: "1rem" }}
              >
                <option value="0">Select Answer</option>
                <option value="1">Blade</option>
                <option value="2">Deena</option>
                <option value="3">Julie</option>
              </select>
            </div>

            <div className="feature">
              <h4>5. Where does Caitlin run into Deena?</h4>
              <select
                onChange={e => {
                  setAnswer5(e.target.value);
                }}
                style={{ fontSize: "1.2rem", margin: "1rem" }}
              >
                <option value="0">Select Answer</option>
                <option value="1">Cineplex</option>
                <option value="2">Lefty's</option>
                <option value="3">Caitlin's House</option>
              </select>
            </div>

            <div className="feature">
              <h4>Bonus - What kind of earrings does Deena wear?</h4>
              <select
                onChange={e => {
                  setAnswer6(e.target.value);
                }}
                style={{ fontSize: "1.2rem", margin: "1rem" }}
              >
                <option value="0">Select Answer</option>
                <option value="1">Stars</option>
                <option value="2">Skulls</option>
                <option value="3">Hearts</option>
              </select>
            </div>

            <div
              onClick={() => {
                checkAnswers();
              }}
              style={{
                backgroundColor: "white",
                color: "#727d9d",
                width: "150px",
                textAlign: "center",
                cursor: "pointer",
                padding: "1rem",
                borderRadius: "6px",
                margin: "2rem"
              }}
            >
              Check Your Answers!
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
