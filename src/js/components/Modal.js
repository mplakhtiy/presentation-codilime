/**
 * Created by MaryanPC on 17-Apr-17.
 */
import React from "react";

export default class Modal extends React.Component {
    render() {
        const {title, bullets, image, id, story} = this.props;
        return (
            <div>
                <div class="modal fade bs-example-modal-lg" id={id} role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">

                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>

                                <img class="img-circle" src={image} alt="Generic placeholder image" width="50"
                                     height="50"/>
                                <span class="modal-title">{title}</span>
                            </div>

                            <div class="modal-body">
                                {story}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}