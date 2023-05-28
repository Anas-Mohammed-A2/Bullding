import React, { useEffect, useRef, useState } from "react";
// ! IMPORT REACT BOOTSTRAP
import { Container, Row, Col, Button, Card } from "react-bootstrap";
// ! IMPORT COUNTUP
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // optional for styling
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";
import axios from "axios";

const Home = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [daata, setDaata] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((res) => {
      setDaata(res.data.properttes);
    });
  }, []);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="BODY">
      {/* START HOME */}
      <section className="SecHome">
        <Container>
          <Row>
            <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
              <div className="HomeLift">
                <h1>
                  Find your Dream <br /> House With Ease
                </h1>
                <p>
                  We are a registered Real Estate Broker and <br /> Consulting
                  Company in Nigeria and in Partnerships <br /> in Dubai.
                </p>
                <div className="btouns">
                  <button className="BtnHome1">
                    {" "}
                    <span>Buy Property</span>
                  </button>

                  <button className="BtnHome2">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> Sell Property
                  </button>
                </div>
              </div>
            </Col>

            <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
              <div className="HomeRight">
                <img src="../imgs/HomeImg.png" alt="" className="ImgHome" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*End HOME */}

      {/*Start STEPS */}
      <section className="SecSTEPS">
        <div className="TITLO">
          <h1 className="hvr-shutter-in-vertical TITLOH1 ">
            STEPS <br />
            HOW IT WORKS
          </h1>
        </div>
        <Container>
          <Row>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
              <div className="CARDE">
                <img
                  src="../imgs/steps/steps-1.jpg"
                  alt=""
                  className="ImgSecSTEPS"
                />

                <h4 className="TitleSecSTEPS">Choose a Category</h4>
                <p className="TextSecSTEPS">
                  Category to browse the <br /> properties under it
                </p>
              </div>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
              <div className="CARDE">
                <img
                  src="../imgs/steps/steps-2.jpg"
                  alt=""
                  className="ImgSecSTEPS"
                />

                <h4 className="TitleSecSTEPS">Find a Real Estate</h4>
                <p className="TextSecSTEPS">
                  Search and discover new
                  <br /> homes for sale & rent
                </p>
              </div>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
              <div className="CARDE">
                <img
                  src="../imgs/steps/steps-3.jpg"
                  alt=""
                  className="ImgSecSTEPS"
                />

                <h4 className="TitleSecSTEPS">Take Your Keys</h4>
                <p className="TextSecSTEPS">
                  Take your keys to your new
                  <br /> home and enjoy
                </p>
              </div>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
              <div className="CARDE">
                <img
                  src="../imgs/steps/steps-4.jpg"
                  alt=""
                  className="ImgSecSTEPS"
                />

                <h4 className="TitleSecSTEPS">Live Happy</h4>
                <p className="TextSecSTEPS">
                  Enjoy the splendor of your new
                  <br />
                  home and live happily
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="contar">
            <Container>
              <Row>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                  <div className="cardy">
                    <h2 className="num">
                      <CountUp start={0} end={745} duration={7} delay={3} />
                    </h2>
                    <h1>Properties on Map</h1>
                  </div>
                </Col>

                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                  <div className="cardy">
                    <h2 className="num">
                      <CountUp start={0} end={23} duration={7} delay={3} />
                    </h2>
                    <h1>Professional Agents</h1>
                  </div>
                </Col>

                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                  <div className="cardy">
                    <h2 className="num">
                      <CountUp start={0} end={12074} duration={6} delay={3} />
                    </h2>
                    <h1>Happy Clients</h1>
                  </div>
                </Col>

                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                  <div className="cardy">
                    <h2 className="num">
                      <CountUp start={0} end={16} duration={7} delay={3} />
                    </h2>
                    <h1>New Apartments </h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </ScrollTrigger>
      </section>

      {/*End STEPS */}

      {/* PLACES Start */}
      <section className="SECPLACES">
        <div className="TITLO">
          <h1 className="hvr-shutter-in-horizontal TITLOH1 ">
            PLACES
            <br />
            PROPERTIES BY AREA
          </h1>
        </div>
        <Container>
          <Row>
            <Col xxl={7} xl={7} lg={7} md={12} sm={12}>
              <div className="immgePlacee">
                <img
                  src="../imgs/places/places-1.jpg"
                  alt=""
                  className="imgPlace"
                />
              </div>
              <div className="texPlace">
                <h3>New York</h3>
                <p>8 Properties</p>
              </div>
            </Col>
            <Col xxl={5} xl={5} lg={5} md={12} sm={12}>
              <div className="immgePlacee">
                <img
                  src="../imgs/places/places-2.jpg"
                  alt=""
                  className="imgPlace"
                />
              </div>
              <div className="texPlace">
                <h3>Chicago</h3>
                <p>6 Properties</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
              <div className="immgePlacee">
                <img
                  src="../imgs/places/places-3.jpg"
                  alt=""
                  className="imgPlace"
                />
              </div>
              <div className="texPlace">
                <h3>San Francisco</h3>
                <p>4 Properties</p>
              </div>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
              <div className="immgePlacee">
                <img
                  src="../imgs/places/places-4.jpg"
                  alt=""
                  className="imgPlace"
                />
              </div>
              <div className="texPlace">
                <h3>San Francisco</h3>
                <p>4 Properties</p>
              </div>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
              <div className="immgePlacee">
                <img
                  src="../imgs/places/places-5.jpg"
                  alt=""
                  className="imgPlace"
                />
              </div>
              <div className="texPlace">
                <h3>San Francisco</h3>
                <p>4 Properties</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* PLACES End */}
      <section className="SECPROPERTIES">
        <div className="TITLO">
          <h1 className="hvr-shutter-in-horizontal TITLOH1 ">
            HOT
            <br />
            LATEST PROPERTIES
          </h1>
        </div>
        <Container>
          <Row>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
            >
              {daata.map((dataa) => (
                <SwiperSlide className="slider">
                  <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
                    <Card style={{ width: "22rem" }}>
                      <Card.Img variant="top" src={dataa.img} />
                      <Card.Body>
                        <h5 className="price">${dataa.price}</h5>
                        <h1 className="title">{dataa.title}</h1>
                        <p className="text">{dataa.text}</p>
                        <div className="iconscard">
                          <div className="ICONE1">
                            <i
                              class="propertyItem__body__features__icon fa fa-th-large"
                              aria-hidden="true"
                            ></i>
                            <span>4</span>
                          </div>

                          <div className="ICONE2">
                            <i
                              class="propertyItem__body__features__icon fa fa-bed"
                              aria-hidden="true"
                            ></i>
                            <span>3</span>
                          </div>

                          <div className="ICONE2">
                            <i
                              class="propertyItem__body__features__icon fa fa-bath"
                              aria-hidden="true"
                            ></i>

                            <span>2</span>
                          </div>

                          <div className="ICONE2">
                            <i
                              class="propertyItem__body__features__icon fa fa-arrows-alt"
                              aria-hidden="true"
                            ></i>
                            <span>125 Sqft</span>
                          </div>
                        </div>
                        <div className="botomCard">
                          <div className="aginst">
                            <img src={dataa.agente} alt="" />
                            <h4>{dataa.NameAgente}</h4>
                          </div>
                          <div className="hart">
                            <i
                              class="propertyItem__footer__actions__fa fa fa-heart iconey"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="propertyItem__footer__actions__fa fa fa-exchange iconey"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </Container>
      </section>
      <section className="SECAGENTS">
        <Container>
          <Row>
            <Col xxl={5} xl={5} lg={5} md={12} sm={12}>
              <div className="TEXTAGENTS">
                <div className="HEDINGS">
                  <h1 className="heding1">Our dedicated</h1>
                  <h1 className="heding2">real estate</h1>
                  <h1 className="heding3"> agents</h1>
                </div>
                <p>
                  Our Real Estate team strive to get the best possible result
                  for our clients by tailoring to your individual needs and
                  providing superior friendly.
                </p>
              </div>
            </Col>
            <Col xxl={7} xl={7} lg={7} md={12} sm={12}>
              <div className="CARDSAGINST">
                <Col xxl={2} xl={2} lg={2} md={2} sm={7}>
                  <div className="CARDAGENT">
                    <img
                      src="../imgs/agents/agents-600-1.jpg"
                      alt=""
                      className="IMGAGINST"
                    />
                    <h5>Roob Howard</h5>
                    <p>Real Estate Broker</p>
                  </div>
                </Col>

                <Col xxl={2} xl={2} lg={2} md={2} sm={7}>
                  <div className="CARDAGENT">
                    <img
                      src="../imgs/agents/agents-600-2.jpg"
                      alt=""
                      className="IMGAGINST"
                    />
                    <h5>Roob Howard</h5>
                    <p>Real Estate Broker</p>
                  </div>
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2} sm={7}>
                  <div className="CARDAGENT">
                    <img
                      src="../imgs/agents/agents-600-3.jpg"
                      alt=""
                      className="IMGAGINST"
                    />
                    <h5>Roob Howard</h5>
                    <p>Real Estate Broker</p>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="SECFeatured">
        <Container>
          <Row>
            <Col xxl={6} xl={6} lg={6} md={12} sm={7}>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {daata.map((dataa) => (
                  <SwiperSlide>
                    <div className="imgslid">
                      <img src={dataa.img} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
            <Col xxl={6} xl={6} lg={6} md={12} sm={7}>
              <div className="liftCardes">
                <h1>Featured Property</h1>
                <p>
                  Feature your property and be seen higher up in the search
                  results, above all Standard listings.
                </p>
                <div className="Stap1">
                  <h4 className="numberStep">1</h4>
                  <h5 className="textStep">
                    Vivamus aliquam augue a risus lacinia viverra.
                  </h5>
                </div>
                <div className="Stap1">
                  <h4 className="numberStep">2</h4>
                  <h5 className="textStep">
                    Vivamus aliquam augue a risus lacinia viverra.
                  </h5>
                </div>
                <div className="Stap1">
                  <h4 className="numberStep">3</h4>
                  <h5 className="textStep">
                    Vivamus aliquam augue a risus lacinia viverra
                  </h5>
                </div>

                <div className="ROOMS1">
                  <div className="Romm">
                    <i
                      class="featuredSC__contentBox__features__icon fa fa-arrows-alt"
                      aria-hidden="true"
                    ></i>
                    <span> Area: 105 Sqft</span>
                  </div>

                  <div className="Romm">
                    <i
                      class="featuredSC__contentBox__features__icon fa fa-th-large"
                      aria-hidden="true"
                    ></i>
                    <span>Rooms: 4</span>
                  </div>
                </div>
                <div className="ROOMS1">
                  <div className="Romm">
                    <i
                      class="featuredSC__contentBox__features__icon fa fa-bath"
                      aria-hidden="true"
                    ></i>
                    <span>Baths: 2</span>
                  </div>

                  <div className="Romm">
                    <i
                      class="featuredSC__contentBox__features__icon fa fa-bed"
                      aria-hidden="true"
                    ></i>
                    <span> Beds: 3</span>
                  </div>
                </div>
                <button class="button2">View details ⇒</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="reviews ">
        <Container>
          <Row>
            <Col xxl={5} xl={5} lg={5} md={12} sm={12}>
              <div className="TextReviews">
                <div className="HEDINGSE">
                  <h1 className="hedings1">Highlight and</h1>
                  <h1 className="hedings2">display the best</h1>
                  <h1 className="hedings3"> reviews on your</h1>
                  <h1 className="hedings4"> website</h1>
                </div>
                <p>
                  A website without reviews is a business without trust. So
                  potential customers can hear how fantastic your business is
                  right from another customer's mouth. And you can't get much
                  more trustworthy than that!
                </p>
                <button class="button2">View All Ratings ⇒</button>

              </div>
            </Col>
            <Col xxl={7} xl={7} lg={7} md={12} sm={12}>
              <div className="CARDEXREVIOS">
                <div className="rowOne">
                  <div className="CARDREVIW">
                    <div className="TopCARDREVIW">
                      <img src="../imgs/reviews/ratings-1.jpg" alt="" />
                      <div className="stars">
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star_half</span>
                        <h6 className="NAMEREVIWE">Gordon Morales</h6>
                      </div>
                    </div>
                    <div className="textCARDREVIW">
                      <p>
                        Lorem ipsum dolor <br /> sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="CARDREVIW">
                    <div className="TopCARDREVIW">
                      <img src="../imgs/reviews/ratings-2.jpg" alt="" />
                      <div className="stars">
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <h6 className="NAMEREVIWE">Richard Ivy</h6>
                      </div>
                    </div>
                    <div className="textCARDREVIW">
                      <p>
                        Lorem ipsum dolor <br /> sit amet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rowtwo">
                  <div className="CARDREVIW">
                    <div className="TopCARDREVIW">
                      <img src="../imgs/reviews/ratings-3.jpg" alt="" />
                      <div className="stars">
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <h6 className="NAMEREVIWE">Vincent Jones</h6>
                      </div>
                    </div>
                    <div className="textCARDREVIW">
                      <p>
                        Lorem ipsum dolor <br /> sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="CARDREVIW">
                    <div className="TopCARDREVIW">
                      <img src="../imgs/reviews/ratings-4.jpg" alt="" />
                      <div className="stars">
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star_half</span>
                        <h6 className="NAMEREVIWE">Chris Dirksen</h6>
                      </div>
                    </div>
                    <div className="textCARDREVIW">
                      <p>
                        Lorem ipsum dolor <br /> sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
