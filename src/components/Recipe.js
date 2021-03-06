import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {

    

        const {
            title,
            image_url,
            publisher,
            recipe_id,
            source_url
        } = this.props.recipe;
        return (
            <React.Fragment>
                <div className="col-md-4">
                    <div className="card">
                        <img src={image_url} alt="" className="img-card-top" style={{height: '14rem'}}/>

                        <div className="card-body">
                            <h6 className="text-capitalize">{title}</h6>
                            <h6 className="text-warning text-capitalize">
                                Provided by {publisher}
                            </h6>
                        </div>

                        <div className="card-footer">
                            <button className="btn btn-primary mx-3" onClick={() => this.props.handleDetails(0, recipe_id)}>Detials</button>
                            <a href={source_url} className="btn btn-success">SourceUrl</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
