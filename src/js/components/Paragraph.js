/**
 * Created by MaryanPC on 18-Apr-17.
 */
import React from "react";
export default class Paragraph extends React.Component {
    render() {
        const {title, image} = this.props;
        const sentences = this.props.sentences.map((value, i) => <span key={i}>&bull; {value}<br/></span>);
        return (
            <div class="row container paragraph">
                <div class="col-lg-4">
                    <img
                        src={image}
                        alt="Generic placeholder image" width="75" height="75"/>
                </div>
                <div class="col-lg-8">
                    <h4 class="bold">{title}</h4>
                    <p> {sentences}</p>

                </div>
            </div>
        );
    }
}