import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";
const RecentWorksDefault = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">Portfolio</div>
        {/* content */}
        <div className="row grid-items border-line-v"> 
          {/* Sakuki */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/works/sakuki.png" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/sakuki.png" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Sakuki</h1>
                        <div className="blog-content">
                        <ul className="list-style">
                            <li>Japanese business translation app</li>
                            <li>
                            Completed July 2022
                            </li>
                            <li>
                            Used GO (Gin), Javascript (React), CSS (Styled Components)
                            </li>
                          </ul>
                          <p>
                          Sakuki is a business Japanese language translator. 
                          It initially uses Google translate's API to translate the string in question to Japanese. 
                          It then filters the translation which it receives from the API, removing certain inapropriate words
                          which Google translate tends to put in translations and replacing those with the appropriate words.
                          </p>
                          <p>
                          <ol>
                          <li>
                          I used REGEX to remove the following terms from the translated string: 
                            </li>
                          <li>
                          1. やあ - Produced when Google translate sees "Hi". Replaced with "こんにちは". 
                            </li>
                          <li>
                          2. おい - Produced when Google translate sees "Hey". Replaced with "こんにちは".
                            </li>
                          <li>
                          3. あなた - Produced when Google translate sees "you". Replaced with "お客様".
                            </li>
                          </ol>
                          </p>
                          <span></span>
                          <p>
                          I created a CI and CD workflow for Sakuki with Semaphore. 
                          There are currently tests for all the main Go functions, these can be found in main_test.go. 
                          If the code which has been pushed successfully passes the pipeline, then it is pulled to the server 
                          (Digital Ocean VPS) via Semaphore executing the deploy.sh script on the server.
                          </p>
                        </div>
                        <div style={{ paddingTop: '20px' }}>
                          <div style={{ marginBottom: '10px' }}>
                            <a href="https://sakuki.dan.kg/" className="button">
                              <span className="text">View Project Site</span>
                              <span className="arrow" />
                            </a>
                          </div>
                          <div>
                            <a href="https://github.com/dan88934/sakuki" className="button">
                              <span className="text">View Project GitHub</span>
                              <span className="arrow" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Sakuki
                </a>
                <div className="category">Japanese language business translator</div>
              </div>
            </div>
          </div>
          {/* Heiki */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/works/heiki.png" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/heiki.png" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Heiki</h1>
                        <div className="blog-content">
                        <ul className="list-style">
                            <li>Vocabulary list creation app</li>
                            <li>
                            Completed March 2021
                            </li>
                            <li>
                            Used Python (Flask), HTML, Bootstrap
                            </li>
                          </ul>
                          <p>
                          Heiki is a flask-based web app which allows users to generate Japanese language vocabulary lists from image(s) or document(s). 
                          The vocabulary list can be downloaded by the user, and will be in a Word document (.docx) format.
                          </p>
                          <p>
                          I created Heiki by combining various NLP Python packages for OCR and tokenization. I customized the output of the Jamdict package 
                          (Japanese-to-English dictionary for Python), which is used in this app, to suit my use case.
                          </p>
                          <p>
                          There are some sample images and documents in the sample_files folder in the Github repository which can be used to test the
                          application manually. Automated tests written using Unittest and Selenium.
                          </p>
                        </div>
                        <div style={{ paddingTop: '20px' }}>
                          <div style={{ marginBottom: '10px' }}>
                            <a href="https://heiki.dan.kg/" className="button">
                              <span className="text">View Project Site</span>
                              <span className="arrow" />
                            </a>
                          </div>
                          <div>
                            <a href="https://github.com/dan88934/heiki" className="button">
                              <span className="text">View Project GitHub</span>
                              <span className="arrow" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Heiki
                </a>
                <div className="category">Japanese language vocabulary list creator</div>
              </div>
            </div>
          </div>
          {/* Zenmon */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/works/zenmon.png" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/zenmon.png" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Zenmon</h1>
                        <div className="blog-content">
                        <ul className="list-style">
                            <li>Flashcard creation and study app</li>
                            <li>
                            Completed October 2021
                            </li>
                            <li>
                            Used Python (Django), Vue, Bootstrap
                            </li>
                          </ul>
                          <p>
                          Zenmon is an application which allows users to create Japanese language flashcards. It is different from mainstream flashcard
                          websites such as Cram and Quizlet in that it allows users to create flashcards with three sides. 
                          This is particularly useful for people studying Japanese as it allows them to have a side for Hiragana, Kanji and English.
                          </p>
                          <p>
                          The application features a CRUD interface (dashboard app) on which users can create flashcard sets.
                          It also features an interactive study page with a flippable flashcard (study app).
                          </p>
                          <p>
                            
                          </p>
                          <p>
                          The backend consists of Django with a Postgres DB. The interactive study page is written in Vue JS. 
                          There are unittests in the dashboard directory.
                          </p>
                        </div>
                        <div style={{ paddingTop: '20px' }}>
                          <div style={{ marginBottom: '10px' }}>
                            <a href="https://zenmon.dan.kg/" className="button">
                              <span className="text">View Project Site</span>
                              <span className="arrow" />
                            </a>
                          </div>
                          <div>
                            <a href="https://github.com/dan88934/zenmon" className="button">
                              <span className="text">View Project GitHub</span>
                              <span className="arrow" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Zenmon
                </a>
                <div className="category">Flaskcard creator</div>
              </div>
            </div>
          </div>
          {/* Courier Services */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/works/chelford-logistics.png" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/chelford-logistics.png" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Chelford Logistics</h1>
                        <div className="blog-content">
                        <ul className="list-style">
                            <li>Logistics company website which takes quote requests and calculates insurance charges</li>
                            <li>
                            Completed January 2024
                            </li>
                            <li>
                            Used Python (Flask), Javascript
                            </li>
                          </ul>
                          <p>
                            This is a redacted and simplified version of a logistics web app that I developed for a client in January 2024.
                          </p>
                          <p>
                          This application allows users to add orders to the database by filling in a form. Users are then given an order reference number. 
                          They can use this number to search for their order and see details about it on the search page. This includes the insurance charge, which is calculated 
                          on the backend using business logic which was provided to me.
                          </p>
                          <p>
                          In accordance with my confidentiality agreement with the client, I have changed the name and logo of the company
                          and removed most of the backend functionality, including the integration with their third party tracking API.
                          </p>
                          <p>
                          There are frontend and backend tests included, utilizing Selenium and Unittest. These can be ran from the main directory with 'python -m unittest'.
                          </p>
                        </div>
                        <div style={{ paddingTop: '20px' }}>
                          <div style={{ marginBottom: '10px' }}>
                            <a href="https://chelford-logi.dan.kg/" className="button">
                              <span className="text">View Project Site</span>
                              <span className="arrow" />
                            </a>
                          </div>
                          <div>
                            <a href="https://github.com/dan88934/chelford-logistics" className="button">
                              <span className="text">View Project GitHub</span>
                              <span className="arrow" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Chelford Logistics
                </a>
                <div className="category">Logistics tracking app</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorksDefault;
