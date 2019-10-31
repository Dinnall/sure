import React from 'react';
import { withRouter } from 'react-router-dom';

class Quote extends React.Component {

onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

goBack=()=>{
    this.props.history.push("/");
}

render() { 
  const {dataFromCustomer}  = this.props.location
	  return dataFromCustomer ? (
	      <div>
	        	<button className="back" onClick={this.goBack}>Try another address</button>  
	               <p>Type of Coverage available:</p>
					 <select onChange={this.onChange}>
					  <option value="" selected disabled hidden>Choose an available coverage</option>
					  <option value={dataFromCustomer.quote.variable_options.deductible.title}>{dataFromCustomer.quote.variable_options.deductible.title}</option>
					  <option value={dataFromCustomer.quote.variable_options.asteroid_collision.title}>{dataFromCustomer.quote.variable_options.asteroid_collision.title}</option>
					</select>
                       
	                  <div className="">
	                  <h4>{dataFromCustomer.quote.variable_options.deductible.title}</h4>
	                  <p>{dataFromCustomer.quote.variable_options.deductible.description}</p>
	                  <ul>
	                   {dataFromCustomer.quote.variable_options.deductible.values.map(function(value, idx){
                          return (<li key={idx}>{`$ ${value}`}</li>)
                          })}
	                  </ul>
	                  </div>

	                  <div className="">
	                  <h4 className="card_title text-center text-bold">{dataFromCustomer.quote.variable_options.asteroid_collision.title}</h4>
	                  <p className="">{dataFromCustomer.quote.variable_options.asteroid_collision.description}</p>
	                  <ul>{dataFromCustomer.quote.variable_options.asteroid_collision.values.map(function(value, idx){
                          return (<li key={idx}>{`$ ${value}`}</li>)
                          })}
	                  </ul>
	                  </div>
			             <p>Insurance Premium: {dataFromCustomer.quote.quoteId}</p>
	                </div>
	     ) : null
	   }
}
export default withRouter(Quote)





