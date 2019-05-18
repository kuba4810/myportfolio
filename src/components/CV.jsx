import React, { Component } from 'react';
class CV extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="container cvContainer animated fadeIn">

           <div className="row mainCvRow mt-5 mb-5">
                <div className="col-lg-1"></div>

                <div className="col-lg-3 p-0 cvLeft">
                    
                    {/* Image */}
                    <div className="cvAvatar">
                        
                    </div>

                    {/* About */}

                    <div className="cvAbout">
                    
                        <h2 className="pl-4 cvAboutHeader">O mnie</h2>

                        <p className="text-light pl-4">
                        Jestem osobą o wielu <br/>
                        zainsteresowaniach wśród których <br/>
                        szczególne miejsce zajmują: <br/>
                        programowanie, astrofizyka i archeologia. 
                        </p>

                        <p className="text-light pl-4">
                        
                            Zawsze w formie : rower, siłownia <br/>
                            gimnastyka
                        
                        </p>
                    
                        <p className="text-light pl-4">
                        
                            Lubię rozmawiać, czasem coś ugotować <br/>
                            i dobrze się bawić.

                        </p>

                        <p className="text-light pl-4">
                            Cenię sobie punktualność i
                            sumienność. Nie rzucam słów na
                            wiatr i nie boję się wyzwań.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="cvSkills pb-5">
                    
                        <h2 className="pl-4 cvAboutHeader">Hobby</h2>

                        <p className="text-light pl-4">
                            Oprócz programowania zawsze
                            pasjonowała mnie astrofizyka.
                            Jestem na bieżąco z nowinkami
                            ze świata nauki. Lubię dbać o
                            kondycje fizyczną i umysłową.
                            Trenuję na siłowni, jeżdżę na
                            rowerze, gram w piłkę nożną
                            (amatorsko), sporo czytam. 
                        </p>

                        <h2 className="pl-4 cvAboutHeader">Technologie</h2>
                        <p className="text-light pl-4">
                            HTML, CSS <br/>
                            JavaScript, ReactJS <br/>
                            NodeJS, Express <br/>
                            PostgreSQL, MongoDB
                        </p>

                        <h2 className="pl-4 cvAboutHeader">Narzędzia</h2>
                        <p className="text-light pl-4">
                            Visual Studio Code <br/>
                            Github <br/>
                            WebStorm <br/>
                            PgAdmin Digital <br/>
                            Ocean
                        </p>

                    </div>

                </div>
                
                <div className="col-lg-8 bg-light position-relative">
                    <div className="title">
                    
                    <h1 className="text-dark text-center font-weight-bold mt-2 cvTitle">
                        Jakub Kozioł
                   </h1>

                   <div className="yellowDiv">
                   </div>

                    </div>

                    <div className="cvPersonalDetails mb-5 ml-5">

                        <p className="text-secondary">Przyborów 103, 32-823 Szczepanów</p>
                        <p className="text-secondary">Telefon: 794 780 290</p>
                        <p className="text-secondary">email: kuba__koziol@op.pl</p>
                    
                    </div>

                    <div className="cvExperience mt-4 pl-5">
                    
                        <h1 className="text-dark">
                            Doświadczenie
                        </h1>

                        <h3 className="text-secondary">
                            Praktyki zawodowe ( czerwiec - wrzesień 2018 )
                        </h3>

                        <p className="text-secondary">
                        
                           Odbyłem praktyki w firmie Apzilla. <br/>
                           Brałem udział w tworzeniu oprogramowania z użyciem technologii webowych. <br/>
                           Razem z zespołem stworzyliśmy aplikacje.

                        </p>


                        <h3 className="text-secondary">
                            Praca dorywcza w Anglii (lipiec - wrzesień 2018) 
                        </h3>

                        <p className="text-secondary">
                        
                           Odbyłem praktyki w firmie Apzilla. <br/>
                           Brałem udział w tworzeniu oprogramowania z użyciem technologii webowych. <br/>
                           Razem z zespołem stworzyliśmy aplikacje.

                        </p>
                    
                    </div>

                    
                    <div className="cvEducation mt-4 pl-5">
                    
                        <h1 className="text-dark">
                            Edukacja
                        </h1>

                        {/* <h3 className="text-secondary">
                           Studia II stopnia ( 2019 - obecnie )
                        </h3>

                        <p className="text-secondary">
                        
                           Studia II stopnia podjąłem na Politechnice Krakowskiej
                        </p> */}

                        <h3 className="text-secondary">
                           Studia I stopnia ( 2015 - 2019 )
                        </h3>

                        <p className="text-secondary">                        
                           Studia podjąłem w Państwowej Wyższej Szkole Zawodowej w Tarnowie
                        </p>

                        <h3 className="text-secondary">
                           Liceum ogólnokształcące (2012 – 2015) 
                        </h3>

                        <p className="text-secondary">
                        
                           Uczęszczałem do Liceum Ogólnokształcącego im.Gen <br/>
                           Leopolda Okulickiego w Brzesku.

                        </p>
                   
                    </div>

                    <div className="cvSkills mt-4 pl-5 pb-5">
                        <h1 className="text-dark">
                            Umiejętności
                        </h1>

                        <h3 className="text-secondary">
                            Front-end
                        </h3>

                        <p className="text-secondary">
                        Bardzo dobra znajomość HTML5 i CSS3 w tym framework
                        Bootstrap. Podstawowa znajomość Semanthic UI.
                        Bardzo dobra znajomość JavaScript w tym framework ReactJS,
                        jQuery oraz podstawowa znajomość Angular 4
                        </p>

                        <h3 className="text-secondary">
                            Back-end
                        </h3>

                        <p className="text-secondary">
                        Dobra znajomość NodeJS w tym biblioteka Express. Podstawowa
                        znajomość PHP oraz 
                        <br/> JAVA ( spring boot). Podstawowa znajomość języka Python.
                        </p>

                        <h3 className="text-secondary">
                            Database
                        </h3>

                        <p className="text-secondary">
                            Dobra znajomość PostgreSQL oraz MySql. Dobra znajomość
                            MongoDB. Do obsługi baz wykorzystuje PgAdmin oraz Xampp.
                        </p>

                        {/* <h3 className="text-secondary">
                            Wykorzystywane narzędzia
                        </h3>

                        <p className="text-secondary">
                            Do pracy używam Visual Studio Code.
                            Potrafię obsługiwać system kontroli wersji GitHub oraz Bitbucket.
                            Umiem pracować z programami InteliJ oraz WebStorm.
                            Jestem zaznajomiony z systemami platformą Digital Ocean oraz
                            Nginx.
                        </p> */}

                        <h3 className="text-secondary">
                            Dodatkowe umiejętności
                        </h3>

                        <p className="text-secondary">
                            Umiejętność pracy w zespole, zdolności komunikacyjne.
                            Znajomość pakietu Microsoft Office. Prawo jazdy kategorii B.
                        </p>

                    </div>


                </div>
           
           </div>

        </div> 
        );
    }
}
 
export default CV;