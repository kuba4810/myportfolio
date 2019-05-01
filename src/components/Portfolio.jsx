import React from 'react'

class Portfolio extends React.Component{

    render(){

        const styleLeft={
            marginLeft: '10%'
        }

        const styleRight={
            marginLeft: '10%'
        }
        return(
            <div className="portfolioContainer animated">

                
                <div className="pt-item pt-grid animated fadeIn"  style={styleLeft}>
                    <div className="titleBar item1">Silownie Info</div>
                    <div className="imgHolder item2">
                        <img src={require("../images/pt_silownie_info.png")} alt=""/>
                            <div className="overlay">                               
                                <a href="http://www.suszkwiatowy.pl/Silownie" target="_blank">Odwiedź Siłownie Info</a>
                            </div> 
                    </div>
                    <div className="description item3">
                        Siłownie Info to strona przeznaczona do wyszukiwania siłowni w Twojej okolicy. Potężna baza siłowni
                        pozwoli Ci na znalezienie siłowni w interesującym Cię mieście. Razem z siłowniami dostępna jest baza trenerów 
                        personalnych którzy oferują treningi personalne, diety oraz porady specjalistyczne. Forum dyskusyjne pozwala 
                        wymienić się wiedzą z innymi , oraz spytać o opinie.
                    </div>
                    <div className="websiteLink item4"> <a href="http://www.suszkwiatowy.pl/Silownie" target="_blank"> Odwiedź witryne </a> <i class="fas fa-arrow-right"></i> </div>
                </div>

                <div className="pt-item pt-grid animated fadeIn" style={styleRight}>
                    <div className="titleBar item1">Twoje notatki</div>
                    <div className="imgHolder item2">
                        <img src={require("../images/pt_notes.png")} alt=""/>                        
                        <div className="overlay">                               
                                <a href="http://www.lambert.pl" target="_blank">Odwiedź Notatki</a>
                            </div>                      
                    </div>
                    <div className="description item3">
                        Twoje notatki to strona umożliwiająca tworzenie i zarządzanie notatkami.
                        Udostępnia również harmonogram dzięki któremu można rozplanować każdy dzień. 
                        <br/>
                        <br/>
                        Kolorowe notatki z etykietami oraz kategoriami umożliwia w łatwy sposób zaplanować Twój dzień.

                    </div>
                    <div className="websiteLink item4"> <a href="http://www.lambert.pl" target="_blank"> Odwiedź witryne </a> <i class="fas fa-arrow-right"></i> </div>
                </div>

                  <div className="pt-item pt-grid animated fadeIn" style={styleRight}>
                    <div className="titleBar item1">Foto Lambert</div>
                    <div className="imgHolder item2">
                        <img src={require("../images/pt_foto_lambert.png")} alt=""/>                        
                        <div className="overlay">                               
                                <a href="http://www.lambert.pl" target="_blank">Odwiedź Foto Lambert</a>
                            </div>                      
                    </div>
                    <div className="description item3">
                        Foto Lambert - strona fotografa. Oferuje profesjonalną sesję zdjęciową , wywoływanie zdjęć, nagrywanie filmów i zdjęć.
                        Dostępna jest również wypożyczalnia sprzętu multimedialnego.
                    </div>
                    <div className="websiteLink item4"> <a href="http://www.lambert.pl" target="_blank"> Odwiedź witryne </a> <i class="fas fa-arrow-right"></i> </div>
                </div>


                 {/* <div className="pt-item pt-grid animated fadeIn"  style={styleLeft}>
                    <div className="titleBar item1">Fashion Blog</div>
                    <div className="imgHolder item2">
                        <img src={require("../images/pt_blog.png")} alt=""/>                        
                        <div className="overlay">                               
                                <a href="javascript:(void);" target="_blank">Odwiedź Fashion Blog</a>
                            </div>                       
                    </div>
                    <div className="description item3">
                        Fashion blog - blog o modzie, wyglądzie i wszystkim co jest z tym związana. Nowinki ze świata mody, 
                        wspaniałe galerie zdjęciowe, które przykuwają oko.
                    </div>
                    <div className="websiteLink item4"> <a href="javascript:(void);"> Odwiedź witryne </a> <i class="fas fa-arrow-right"></i> </div>
                </div> */}

            </div>
        );
    }
}

export default Portfolio