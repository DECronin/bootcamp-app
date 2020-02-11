import React, { Component } from "react";

// This page displays a photo of a random dog retrieved from the[Dog Ceo API](https://dog.ceo/dog-api/). 
// This page contains 2 clickable buttons: one for passing or "thumbs-downing" a dog, and one for picking or "thumbs-upping" a dog. 
// When either button is clicked, a new dog image is loaded from the API. If you "thumbs up" a dog, there is a 1 in 5 
// chance that the dog likes you too, and the friends count goes up by 1

function Discover(){
    return(
        <h2>Hello</h2>
    )
}

// class Discover extends Component {
//     state = {
//         photo: '',
//         friends: 0
//     };

//     getRandomPhoto = () => {
//         let newUrl = "https://cdn.akc.org/content/article-body-image/lab_puppy_dog_pictures.jpg";
//         this.setState({
//             photo: newUrl,
//             friends: this.friends++
//         })
//     };

//     render(){
//         return(
//             <div>
//                 <h1>Discover Page</h1>
//                 <img href={this.state.photo}></img>
//                 <p>
//                 Nunc pharetra finibus est at 
//                 </p>
//                 <button onClick={this.getRandomPhoto()} className="btn btn-primary">Thumbs Up!</button>
//                 {/* <button onClick={this.getRandomPhoto()} className="btn btn-primary">Thumbs Down!</button> */}
//             </div>
//         );
//     }
// }
export default Discover;