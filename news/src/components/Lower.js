import React, { Component } from 'react';
import "./css/s_card.css";
// import { Card, CardImg, CardText, CardBody, CardLink,
//   CardTitle, CardSubtitle } from 'reactstrap';

const Example = (props) => {
  return (
    <div class="container" style={{display:'inline-block'}}>
    <div class="row">
        <div class="col-xs-12 col-sm-4">
            <div class="card">
                <a class="img-card" href="http://www.fostrap.com/">
                    <img src= "http://lorempixel.com/400/200/sports" alt="headline "/>
                </a>
                <br />
                <div class="card-content">
                    <h4 class="card-title">
                        <a href="http://www.fostrap.com/">
                            Headline
                        </a>
                    </h4>
                    <div class="">
                        Short Description
                    </div>
                </div>
                <div class="card-read-more">
                    <a class="btn btn-link btn-block" href="http://www.fostrap.com/">
                        Read More
                    </a>
                </div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-4">
            <div class="card">
                <a class="img-card" href="http://www.fostrap.com/">
                    <img src= "http://lorempixel.com/400/200/sports" alt="headline "/>
                </a>
                <br />
                <div class="card-content">
                    <h4 class="card-title">
                        <a href="http://www.fostrap.com/">
                            Headline
                        </a>
                    </h4>
                    <div class="">
                        Short Description
                    </div>
                </div>
                <div class="card-read-more">
                    <a class="btn btn-link btn-block" href="http://www.fostrap.com/">
                        Read More
                    </a>
                </div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-4">
            <div class="card">
                <a class="img-card" href="http://www.fostrap.com/">
                    <img src= "http://lorempixel.com/400/200/sports" alt="headline "/>
                </a>
                <br />
                <div class="card-content">
                    <h4 class="card-title">
                        <a href="http://www.fostrap.com/">
                            Headline
                        </a>
                    </h4>
                    <div class="">
                        Short Description
                    </div>
                </div>
                <div class="card-read-more">
                    <a class="btn btn-link btn-block" href="http://www.fostrap.com/">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default Example;
