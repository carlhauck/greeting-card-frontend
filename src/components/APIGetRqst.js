import React, { useState, useEffect } from "react"
import axios from 'axios';


function APIGetRqst() {
  const [state, setState] = useState({
    status: "",
    response: {}
  })

  componentDidMount(){
    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  // Edit {state.response} per for desired hash values
  return (
    <div>
      <h1 className="apireturn-1"> {state.response} </h1>
    </div>
  )

}


export default APIGetRqst