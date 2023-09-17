import './contacts.css'
export const Contacts=()=>{

    return(
    
        
           <div className='contacts fdc'>
               <h2>Հասցե:</h2>
               
               <h2><i className="fa fa-envelope" aria-hidden="true"></i> Էլ․հասցե: <a style={{textDecoration:'none'}} href=''>lalayansstudio@mail.ru</a></h2>
               <h2><i className="fa fa-phone" aria-hidden="true"></i> Հեռախոս: +374 94 23 64 81 </h2>
               <h2><i className="fa fa-whatsapp" aria-hidden="true"></i> WatsApp: +374 94 23 64 81</h2>
               <h2><i className="fa fa-phone-square" aria-hidden="true"></i> Viber: +374 94 23 64 81</h2>
               <div className='social fdr'><a target={'_blank'} href="https://www.facebook.com/lalayansstudio">
                <i style={{fontSize: "100px"}} className="fa fa-facebook-official"></i>
           </a>
           <a target={'_blank'} href="https://www.instagram.com/lalayans.studio/">
            <i style={{fontSize: "100px"}} className="fa fa-instagram" aria-hidden="true"></i>
          </a></div>
           
          
        </div>
    )
    
    }