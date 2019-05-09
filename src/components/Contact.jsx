import React from 'react'

class Contact extends React.Component {

    state = {
        showName: true,
        showDetails: true
    }

    componentDidMount() {

        // setTimeout(() => {
        //     this.setState({
        //         showName: true
        //     })
        // }, 600)

        // setTimeout(() => {
        //     this.setState({
        //         showDetails: true
        //     })
        // }, 800)

    }
    render() {
        return (
            <div className="contactContainer pt-5">
                {/* <div className="aboutTitle contactTitle animated slideInUp">
                    Contact
               </div> */}

                <div className="row">

                    <div className="col-lg-8 col-11 mx-auto mt-5 animated fadeIn contactTitle">

                        <div class="card">
                            <div class="card-header">
                            {
                                    this.state.showName &&
                                    <div class={`container animated fadeIn`}>
                                        <h2 className="text-center">Jakub Kozioł</h2>
                                    </div>
                                }
                            </div>
                            <div class="card-body">

                            {
                                    this.state.showDetails &&
                                    <ul class="container details mt-4 animated fadeIn text-center">
                                        <li><p><span class="glyphicon glyphicon-earphone one" style={{ width: '50px' }}></span><i class="fas fa-phone mr-2"></i> 794 780 290</p></li>
                                        <li><p><span class="glyphicon glyphicon-envelope one" style={{ width: '50px' }}></span><i class="fas fa-envelope mr-2"></i> kuba__koziol@op.pl</p></li>
                                        <li><p><span class="glyphicon glyphicon-map-marker one" style={{ width: '50px' }}></span><i class="fas fa-map-marker-alt mr-2"></i> <a target="_blank" className="text-dark" href="https://www.google.com/maps/place/32-800+Brzesko/@49.9735739,20.5708331,12z/data=!4m5!3m4!1s0x471626472df365f1:0x4ed91a05c1c609a6!8m2!3d49.9647187!4d20.6034471">Brzesko</a></p></li>
                                        <li><p><span class="glyphicon glyphicon-new-window one" style={{ width: '50px' }}></span><i class="fas fa-globe-americas"></i> <a target="_blank" className="text-dark" href="https://jakub-koziol.herokuapp.com">Strona internetowa</a></p> </li>
                                    </ul>
                                }
                                
                            </div>
                        </div>


                    </div>

                </div>

               

            </div>


        );
    }
}

export default Contact