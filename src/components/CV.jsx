import React, { Component } from 'react';
class CV extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="container cvContainer animated fadeIn">

           <div className="row mainCvRow mt-5 mb-5">
                <div className="col-lg-1"></div>

                <div className="col-lg-3 order-sm-2 p-0 cvLeft">
                    
                    {/* Image */}
                    <div className="cvAvatar">
                        
                    </div>

                    {/* About */}

                    <div className="cvAbout">
                    
                        <h2 className="pl-4 text-secondary">O mnie</h2>

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
                    </div>

                    {/* Skills */}
                    <div className="cvSkills pb-5">
                    
                        <h2 className="pl-4 text-secondary">Umiejętności</h2>

                        <div className="row pl-4 text-light">
                            <div className="col-8">JavaScript:</div>
                            <div className="col-3">90%</div>
                        </div>
                        <div className="row pl-4 text-light">
                            <div className="col-8">Node JS:</div>
                            <div className="col-3">70%</div>
                        </div>
                        <div className="row pl-4 text-light">
                            <div className="col-8">React JS</div>
                            <div className="col-3">90%</div>
                        </div>
                        <div className="row pl-4 text-light">
                            <div className="col-8">Angular 4</div>
                            <div className="col-3">50%</div>
                        </div>
                        <div className="row pl-4 text-light">
                            <div className="col-8">jQuery</div>
                            <div className="col-3">70%</div>
                        </div>

                    </div>

                </div>
                
                <div className="col-lg-8 order-sm-1 bg-light position-relative">
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
                    
                    </div>

                    
                    <div className="cvEducation mt-4 pl-5">
                    
                        <h1 className="text-dark">
                            Edukacja
                        </h1>

                        <h3 className="text-secondary">
                           Studia II stopnia ( 2019 - obecnie )
                        </h3>

                        <p className="text-secondary">
                        
                           Studia II stopnia podjąłem na Politechnice Krakowskiej
                        </p>

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


                </div>
           
           </div>

        </div> 
        );
    }
}
 
export default CV;