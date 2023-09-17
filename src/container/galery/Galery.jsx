import './galery.css'
export const Galery=()=>{

    return(
    <>
        <div className="galery fdr">

<div className='galerypict fdc'>

<img src="img/gal1.jpg" alt="" />
<img src="img/gal6.jpg" alt="" />
</div>
                <div className='video fdc'>
                       
<iframe  src='video/video.mp4?autoplay=false'
        frameBorder='0'
        allow="autopley;encrypted-media"
        allowFullScreen
       title='video'
        width='500'
        height='500'
        
        
/>


</div>
                
<div className='galerypict fdc'>

<img src="img/gal7.jpg" alt="" />
<img src="img/gal4.jpg" alt="" />
</div>

            


        </div>
        <br />
  <br />
  <br />
  <br />
        </>
    )
    
    }