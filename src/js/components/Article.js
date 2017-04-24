/**
 * Created by MaryanPC on 17-Apr-17.
 */
import React from "react";

export default class Article extends React.Component {
    render() {
        const {title, bullets, image, id} = this.props;
        return (
            <div class="col-lg-4" data-toggle="modal" data-target={"#" + id}>
                <img class="img-circle" src={image} alt="Generic placeholder image" width="140" height="140"/>
                <h2>{title}</h2>
                <div>{bullets}</div>
            </div>
        );
    }
}
