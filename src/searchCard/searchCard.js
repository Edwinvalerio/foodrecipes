import React, { Component } from "react";
import CountUp from "react-countup";
import "./searchCard.css";
import { NavLink } from "react-router-dom";
export default class searchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavLink to={`/recipes/${this.props.id}`}>
          <div className="searchCard-container columns">
            <div
              className="search-card-image"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`
              }}
            ></div>

            <div className="column is-4">
              <div>
                <h1 className="seactcard-food-title">{this.props.title}</h1>
                <p>@Stephanie32</p>
              </div>
            </div>

            <div className="column is-2">
              <i className="fas fa-carrot"></i>

              <span aria-label="sheep " className="hours-to-make">
                <CountUp start={0} end={100} duration={Math.random() * 5} />
              </span>
            </div>
            <div className="column is-2">
              <i className="far fa-clock "></i>

              <span aria-label="sheep " className="hours-to-make">
                <CountUp
                  start={0}
                  end={2.3}
                  decimals={2}
                  duration={Math.random() * 5}
                />
                Hrs
              </span>
            </div>
            <div className="column is-2">
              <h1 className="like-counts">
                <span role="img" aria-label="sheep" className="delicius-emoji">
                  😋
                </span>
                <span>
                  <CountUp
                    start={0}
                    end={123.32}
                    decimals={1}
                    duration={Math.random() * 5}
                  />
                  K
                </span>
              </h1>
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}
