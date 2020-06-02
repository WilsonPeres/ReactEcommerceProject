import React from 'react';

class SlideShow extends React.Component{
render(){
    return(
<div className="SlideshowContainer">     
<div id="carouselExampleSlidesOnly" class="slideshow" class="carousel slide" data-ride="carousel"> 
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="images/slideshow3.png" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/slideShow2.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/slideShow1.png" alt="Third slide"/>
    </div>
  </div>
</div>
</div>
    )
}

}

export default SlideShow;


