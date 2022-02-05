
const BarberPole = ({darkMode}) =>{  
  
       switch(darkMode){ 
        case true :
        return( 
           <div key={darkMode} className="d-flex flex-column pole mr-0 barberPole">
           <img _ngcontent-wfs-c1="" class="img img-responsive block-center img-fit" src="https://cdna.artstation.com/p/assets/images/images/022/388/048/original/luna-ang-barberpoleingame4.gif?1575265726" alt="Barber Pole Game Asset" style={{"min-height": "100vh", 'min-width': '300px'}}></img>
            </div>);
        case false:
            return(
            
           <div key={darkMode += darkMode} className="d-flex flex-column pole mr-0">
          <img src="http://www.clipartbest.com/cliparts/4ib/pr4/4ibpr4ArT.gif" onerror="imgError(this);" style={{"min-height": "100vh", 'min-width': '300px'}}/>
            </div>
             
            );
            default:
                return( <div className="d-flex flex-column pole mr-0">
               <img src="/cliparts/4ib/pr4/4ibpr4ArT.gif" onerror="imgError(this);" />
                 </div>)

    }
} 
export default BarberPole

