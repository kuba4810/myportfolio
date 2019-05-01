import React from 'react'

class Contact extends React.Component {

    state = {
        showName: false,
        showDetails: false
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({
                showName: true
            })
        }, 600)

        setTimeout(() => {
            this.setState({
                showDetails: true
            })
        }, 800)

    }
    render() {
        return (
            <div className="contactContainer pt-5">
                {/* <div className="aboutTitle contactTitle animated slideInUp">
                    Contact
               </div> */}

                <div className="row">

                    <div className="col-lg-8 mx-auto mt-5 animated fadeIn contactTitle">

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
                                        <li><p><span class="glyphicon glyphicon-map-marker one" style={{ width: '50px' }}></span><i class="fas fa-map-marker-alt mr-2"></i> Brzesko</p></li>
                                        <li><p><span class="glyphicon glyphicon-new-window one" style={{ width: '50px' }}></span><a target="_blank" href="http://localhost:3000">www.koziol-jakub.pl</a></p> </li>
                                    </ul>
                                }
                                
                            </div>
                        </div>


                    </div>

                </div>

                {/* <div className="container contactTitle mt-5 animated slideInUp">

                    <div className="jumbotron">

                        <div className="row">
                            <div class=" col col-md-8 col-xs-12 col-sm-6 col-lg-12">
                                {
                                    this.state.showName &&
                                    <div class={`container animated fadeIn`} style={{ borderBottom: '1px solid black' }}>
                                        <h2>Jakub Kozioł</h2>
                                    </div>
                                }
                                {
                                    this.state.showDetails &&
                                    <ul class="container details mt-4 animated fadeIn">
                                        <li><p><span class="glyphicon glyphicon-earphone one" style={{ width: '50px' }}></span><i class="fas fa-phone mr-2"></i> 794 780 290</p></li>
                                        <li><p><span class="glyphicon glyphicon-envelope one" style={{ width: '50px' }}></span><i class="fas fa-envelope mr-2"></i> kuba__koziol@op.pl</p></li>
                                        <li><p><span class="glyphicon glyphicon-map-marker one" style={{ width: '50px' }}></span><i class="fas fa-map-marker-alt mr-2"></i> Brzesko</p></li>
                                        <li><p><span class="glyphicon glyphicon-new-window one" style={{ width: '50px' }}></span><a target="_blank" href="http://localhost:3000">www.koziol-jakub.pl</a></p> </li>
                                    </ul>
                                }
                            </div>

                        </div>
                    </div>

                </div> */}

            </div>


        );
    }
}

export default Contact