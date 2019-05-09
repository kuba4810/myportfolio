import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';



class About extends React.Component {

  scrollDown = (x) => {
    window.scrollTo(0, parseInt(x));
  }

  render() {
    return (
      <div class="aboutContainer">
        {/* Container fluid */}
        <div className="container-fluid">
          {/* Row */}
          <div className="row aboutMeParagraph">

            {/* Col 4 */}
            <div className="col-lg-3 aboutImage animated fadeIn">
              <img src={require('../images/cv_avatar.jpg')} alt="" />
            </div>

            {/* Col 7 */}
            <div className="col-lg-8 aboutMeDescription">

              <div className="descriptionTitle animated slideInDown">
                Kilka słów o mnie :D
              </div>

              <div className="descriptionText animated slideInUp p-3 text-dark">
                Jestem osobą o niezaspokojonym apetycie na wiedzę. Interesuję mnie wiele dziedzić ale szczególne
                miejsce zajmuje u mnie programowanie. Staram się być spokojny , nie planować za wiele, żyć chwilą
                i cieszyć się życiem. Pracuje gdy przychodzi na to pora, odpoczywam gdy przychodzi na to czas.
                Nie przesadzam ani z jednym ani z drugim :D
                <br />
                <br />
              </div>

            </div>

            {/* End row */}
          </div>

          <div className="row">

            
            <div className="col-11 mx-auto mt-5 aboutSection animated slideInUp">
              
            <h2 className="text-center w-100 p-2 bg-primary">
                Edukacja
              </h2>
              {/* <ScrollAnimation
                animateIn="fadeInDown"
                duration=".7s"
                animateOnce="true"> */}
                <div className="row">

                  <div className="col-11 mx-auto mt-3 animated">
                    <div className=" text-dark p-2 ">
                      <h3 className="text-primary">2015-2019 Studia</h3>
                      Obecnie studiuje na PWSZ Tarnów na kierunku Informatyka. Jestem na 4 roku studiów inżynierskich
                      obejmujących 7 semestrów.
                      W tym semestrze będe przystępował do obrony pracy inżynierskiej.
                      Uczelnia staje się coraz bardziej popularna i wysoko klasyfikowana wśród Państwowych Wyższych Szkół Zawodowych
                      Wybrałem specjalizacje Inżynieria Systemów Informatycznych.
                      Nauczyłem się przetwarzać obrazy, tworzyć aplikacje mobilne i sieciowe, projektować i zarządzać bazy danych.
                    </div>
                  </div>


                </div>
              {/* </ScrollAnimation> */}

              {/* <ScrollAnimation
                animateIn="fadeInUp"
                duration=".7s"
                animateOnce="true"> */}


                <div className="row mt-1">
                  <div className="col-11 mx-auto animated">
                    <div className=" text-dark p-2 ">
                      <h3 className="text-primary"> 2012-2015 Liceum </h3>

                      Uczęszczałem do Publicznego Zespołu Szkół Ponadgimnazjalnych im. Generała Leopolda Okulickiego. <br />
                      Głównymi przedmiotami na moim profilu były Matematyka,Fizyka,Informatyka, a więc był to kierunek ścisły.
                      Wiele godzin matematyki w tygodniu dobrze przygotowały mnie z tego przedmioty.
                            </div>
                  </div>
                </div>
              {/* </ScrollAnimation> */}


             


            </div>

            {/* End row */}
          </div>


          {/* Row */}
          <div className="row">

            <div className="col-11 mx-auto aboutSection animated slideInUp">
              <h3 className="text-center w-100 p-2 bg-primary">
                Zainteresowania

              </h3>

              {/* <ScrollAnimation
                animateIn="slideInLeft"
                duration=".7s"
                animateOnce="true"> */}
                <div className="row">
                    <div className="col-11 mx-auto">
                    
                     <div className="mb-4">
                     <i className="fas fa-check text-primary mr-2"></i>
                      <b className="text-primary">Programowanie</b>
                      <p> Programowanie to dziedzina którę postanowiłem poświęcić życie zawodowe. Praca którą dla mnie będzie jest również przyjemnością. Cieszy mnie każdy "kawałek kodu" który napisałem. </p>
                     </div>

                     <div className="mb-4">
                     <i className="fas fa-check text-primary mr-2"></i>
                      <b className="text-primary">Astrofizyka</b>
                      <p>Pasjonuje mnie odkąd pamiętam, od kiedy nauczyłem się czytać szukałem w encyklopediach i bibliotekach wszystkiego co ma związek z astronomią. Teraz mam dostęp do wiedzy z wielu źródeł i wciąż ją pogłębiam.</p>
                     </div>

                     <div className="mb-4">
                     <i className="fas fa-check text-primary mr-2"></i>
                      <b className="text-primary">Rower</b>
                      <p> Na rowerze czuje się wolny jak ptak. Czasem jeżdże sprintem kilka kilometrów a innym razem nie ma mnie przez cały dzień. Wspaniały sposób aktywnego spędzania czasu. </p>
                     </div>

                     <div className="mb-4">
                     <i className="fas fa-check text-primary mr-2"></i>
                      <b className="text-primary">Archeologia</b>
                      <p> Podobnie jak z astrofizyką lecz zainteresowanie pojawiło się trochę później. Szczególnie ciągnie mnie do prehistorii i starożytności. </p>
                     </div>

                     <div className="mb-4">
                     <i className="fas fa-check text-primary mr-2"></i>
                      <b className="text-primary">Piłka nożna</b>
                      <p>Dobrego meczu sobię nie odmówie. Gram amatorsko kiedy mam ochotę i okazję. Gram głównie na bramce.</p>
                     </div>

                    </div>
                </div>
              {/* </ScrollAnimation> */}

            </div>
            {/* End row */}
          </div>

          {/* Container end */}
        </div>

      </div>
    );
  }
}

export default About



