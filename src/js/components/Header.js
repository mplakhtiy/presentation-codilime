/**
 * Created by MaryanPC on 17-Apr-17.
 */
import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div class="row container">
                    <div class="col-lg-4">
                        <img class="img-circle featurette-image img-responsive center-block"
                             src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAZ0AAAAJDlkNWJkZDk4LTRhNGEtNDU3Yy1iMTU2LWZlYTA1NWI1YzFhOA.jpg"
                             alt="Generic placeholder image" width="200" height="200"/>
                    </div>
                    <div class="col-lg-8">
                        <h2 class="featurette-heading bold">Hello Codi<span class="lime">Lime</span>!
                        </h2>
                        <p class="lead">My name is <span class="bold">Maryan Plakhtiy</span><br/>
                            I am a 21 years old developer from Ukraine<br/>
                            Passionately studying Computer Science, love traveling and good music<br/>
                            I play the guitar and board games and I also do jogging and climbing
                        </p>
                    </div>
                </div>
            </header>
        );
    }
}
