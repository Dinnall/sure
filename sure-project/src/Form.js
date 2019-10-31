import React from 'react';
import axios from 'axios';
import {
  withRouter
} from 'react-router-dom'
import './App.css';
// import Quote from './Quote';

class Form extends React.Component{
 state = {
    first_name: "",
    last_name: "",
    line_1: "",
    line_2: "",
    city: "",
    region: "",
    postal: "",
    data: ""
  }

onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
   
onSubmit = (e) => {
    e.preventDefault();
  const { first_name, last_name, ...address } = this.state;
    axios.post(`https://fed-challenge-api.sure.now.sh/api/v1/quotes`,
      {first_name,last_name,address})
      .then((result) => {
        this.setState({ data: result.data });
         this.props.history.push({
         pathname: '/quote',
         dataFromCustomer: result.data
    })
      }) .catch((error)=> {
           console.log(error);
     });
     this.props.history.push('/quote')
  }
   
render() {
    const {first_name,last_name,postal,line_1,line_2,city,region} = this.state;    
      return (
      <div className="App">
        <div className="left">
          <h1>Rocket Insurance</h1>
          <h1 className="p-left">
            As interplanetary travel becomes mainstream, we're excited to offer
            rocket owners comprehensive coverage options to let them fly through
            space worry-free{" "}
          </h1>
        </div>
        <div className="right">
          <h2>Recieve a free quote today</h2>
          <div className="form">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={first_name}
                onChange={this.onChange}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={last_name}
                onChange={this.onChange}
              />
              <input
                type="text"
                name="line_1"
                placeholder="Street"
                value={line_1}
                onChange={this.onChange}
              />
              <input
                type="text"
                name="line_2"
                placeholder="Apt number"
                value={line_2}
                onChange={this.onChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={city}
                onChange={this.onChange}
              />
              <input
                type="text"
                name="region"
                placeholder="State"
                value={region}
                onChange={this.onChange}
              />
              <input
                type="text"
                name="postal"
                placeholder="zipcode"
                value={postal}
                onChange={this.onChange}
              />
              <button className="button">Receive Quote</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Form)
