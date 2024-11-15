import React from "react";
import "./Advertisement.css";

const Advertisement =  () => {
    const advertisementsData = [
        {
          title: "Ad 1",
          description: "This is the first advertisement.",
          image: "https://via.placeholder.com/150",
          contact: "contact1@example.com",
        },
        {
          title: "Ad 2",
          description: "This is the second advertisement.",
          image: "https://via.placeholder.com/150",
          contact: "contact2@example.com",
        },
        {
          title: "Ad 3",
          description: "This is the third advertisement.",
          image: "https://via.placeholder.com/150",
          contact: "contact3@example.com",
        },
        {
          title: "Ad 4",
          description: "This is the fourth advertisement.",
          image: "https://via.placeholder.com/150",
          contact: "contact4@example.com",
        },
        {
          title: "Ad 5",
          description: "This is the fifth advertisement.",
          image: "https://via.placeholder.com/150",
          contact: "contact5@example.com",
        },
        {
          title: "Ad 6",
          description: "This is the sixth advertisement.",
          image: "https://via.placeholder.com/150",
          contact: "contact6@example.com",
        },
        // Add more advertisements as needed
      ];

      const renderAdvertisement = () => {

        const advertisementListItems = advertisementsData.map( (ads)=> {
            const liAdsElement = <div className="card col col-md-4 mb-4 my-1 border rounded bg-light">
            <div className="d-flex flex-column my-2">
                <img className="card-img-top" src={ads.image} style={{objectFit: "contain", height: "200px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{ads.title}</h5>  
                    <p>{ads.description}</p>                  
                    <p className="card-text fw-bolder">{ads.contact}<span className="card-text fw-bolder spanElement"></span></p>
                    <button className="btn btn-info btn-block mx-2 detailsButton">Details</button>
                </div>
            </div>
        </div>                           
            return liAdsElement;
           });
            return advertisementListItems;
    };
    return(
        <div class="container mt-5">
            <h2 class="mb-4">Advertisement List</h2>
            <div class="row">{renderAdvertisement()}</div>
            
        </div>
    );
};

export default Advertisement;