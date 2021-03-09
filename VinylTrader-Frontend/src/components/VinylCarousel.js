import React, { useState } from "react";
import ReactDOM from "react-dom";
// import Slide from "react-swipeable-views";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";



const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
  return (
    <div>
      {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
      <AutoRotatingCarousel
        label="Get started"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: true})}
        autoplay={true}
        mobile={isMobile}
        style={{ position: "absolute" }}
      >
        <Slide
          media={
            <img src="https://media.pitchfork.com/photos/5ab41f308195c0189f1354ee/1:1/w_600/Golden%20hour%20Kacey%20Musgraves.jpg" />
          }
          mediaBackgroundStyle={{ backgroundColor: '#432534'}}
          style={{ backgroundColor: '#553a48'}}
          title="TRADE YOUR VINYL RECORDS"
          subtitle="Upload records you'd like to trade to your vinyl collection"
        />
        <Slide
          media={
            <img src="https://images-na.ssl-images-amazon.com/images/I/81NSetbGioL._SL1500_.jpg" />
          }
          mediaBackgroundStyle={{ backgroundColor: '#183a37' }}
          style={{ backgroundColor: '#2f4d4b' }}
          title="BROWSE RECORDS"
          subtitle="See what records others have to trade"
        />
        <Slide
          media={
            <img src="https://media.pitchfork.com/photos/5929a5755e6ef95969320ae3/1:1/w_600/48a46623.jpg"/>
          }
          mediaBackgroundStyle={{ backgroundColor: '#04151f' }}
          style={{ backgroundColor: '#1d2c35'}}
          title="SET UP SAFE TRADES"
          subtitle="See our database of Safe Trading Spaces and get trading!"
        />
      </AutoRotatingCarousel>
    </div>
  );
};

export default function VinylCarousel() {
  const [handleOpen, setHandleOpen] = useState({ open: true});
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      <AutoRotatingCarouselModal
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />
    </>
  );
}



























// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import Slider from 'react-slick'

// const covers = [
//     {
//         name: 'vinyl1',
//         url: "https://media.pitchfork.com/photos/5ab41f308195c0189f1354ee/1:1/w_600/Golden%20hour%20Kacey%20Musgraves.jpg",
//     },
//     {
//         name: 'vinyl2',
//         url: "https://images-na.ssl-images-amazon.com/images/I/81NSetbGioL._SL1500_.jpg",

//     },
//     {
//         name: 'vinyl3',
//         url: "https://media.pitchfork.com/photos/5929a5755e6ef95969320ae3/1:1/w_600/48a46623.jpg",

//     },
//     {  name: 'vinyl4',
//         url: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-146529-008cf0e73368d0fb58653f707552f40c4e5f16b9.jpg",

//     },
//     {
//         name: 'vinyl5',
//         url: "https://images-na.ssl-images-amazon.com/images/I/51h-cJeHf0L.jpg",
//     },
//     {
//         name: 'vinyl6',
//         url: "https://media.pitchfork.com/photos/5929a68413d19756521391d8/1:1/w_600/379e34d8.jpg",
//     }
// ]

// export default class VinylCarousel extends Component {
//     render() {


// const settings = {
//     dots: true, 
//     fade: true, 
//     infinite: true, 
//     speed: 500, 
//     slidesToShow: 1,
//     arrows: true, 
//     sildesToscroll: 1,
//     className: "slides"
// }
        
//         return (
//             <div>
//                 <Slider {...settings}>
//                     {covers.map((cover) => {
//                         return(
//                             <div>
//                             <img width = "20%" src = {cover.url}/>
//                             </div>
//                         )
//                     })}
//                 </Slider>
//             </div>
//         )
//     }
// }
