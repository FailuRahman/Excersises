import React, { Component, PureComponent } from 'react'

  class Listitem extends PureComponent {

    state ={
        score : 10,
        Data : [
            {
                id :1,
                name:"failu",
                age : 45,
            },
            {
                id :2,
                name:"sanoof",
                age : 85,
            }
        ]
        
    };
    clickEvent = () =>{
        this.setState({
            score : 20,
        })
    };

    
    

  render() {
    console.log(this.state.score);
    
    return (
        <div>
            <h1>List</h1>
            <ul>
                {this.state.Data.map((value,index)=>(
                     <li key={value.id}>
                        {value.id} - {value.name} - {value.age}
                    </li>
                ))} 
                <button onClick={this.clickEvent}>Click Me</button>
            </ul>
        </div>
    );
  };
};

export default Listitem;
