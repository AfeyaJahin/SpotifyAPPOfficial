import { useEffect } from "react"
import Helmet from "react-helmet"
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
//taken from https://codepen.io/thenessax/pen/PoPyzMW
const PageNotFound=()=>{

    useEffect(() => {
        document.title = 'Page Not Found';
        const style = document.createElement('style');
        style.appendChild(
        document.createTextNode(`
       


.mainbox {
  margin: auto;
  height: 600px;
  width: 600px;
  position: relative;
}

  .err {
    color: #ffffff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 11rem;
    position:absolute;
    left: 20%;
    top: 8%;
  }

.far {
  position: absolute;
  font-size: 8.5rem;
  left: 42%;
  top: 15%;
  color: #ffffff;
}

 .err2 {
    color: #ffffff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 11rem;
    position:absolute;
    left: 68%;
    top: 8%;
  }

.msg {
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.6rem;
    position:absolute;
    left: 16%;
    top: 45%;
    width: 75%;
  }

a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
}`))
        
        document.head.appendChild(style);

      }, []);

    return(
   
        
        <>
        <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap" rel="stylesheet"/>
  <script src="https://kit.fontawesome.com/4b9ba14b0f.js" crossorigin="anonymous"></script>
        </Helmet>
        <div class="mainbox">
    <div class="err">4</div>
    <i class="far fa-question-circle fa-spin"></i>
    <div class="err2">4</div>
    <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go home<Link to="/"> <h1>CLICK HERE</h1>
</Link> and try from there.</p></div>
      </div>
      </>
    
            
        )
}
export default PageNotFound
