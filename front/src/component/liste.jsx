import React, { Component } from 'react';


 class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
      resAPI: ""
    };
  }


  componentWillMount() {
    fetch('http://localhost:3000/list')
      .then(res => res.text())
      .then(data => this.setState({ resAPI: data }));
  }
  
  render() {
    return (
      <div className="contact">
        <h1>Liste</h1>
        <button  id="boutton1" onClick={()=>{
            
            var list = this.state.resAPI
            var lister = JSON.parse(list)
          

          for(var i=0;i<lister.length;i++)
          {
            
            document.getElementById("name").innerHTML += "<div><div id='monimage'><img  src="+lister[i].image+"/></div>";
            document.getElementById("name").innerHTML += "<div id='spannom'><span > Nom : "+lister[i].nom+"</span><br></div>";
            document.getElementById("name").innerHTML += "<div id='spanprenom'><span > Prénom : "+lister[i].Prenom+ "</span><br></div></div>";
           

          }
        }}>
            LISTER
        </button>

          <div id="name"></div>
        
      </div>
    )
  }
}

export default List;