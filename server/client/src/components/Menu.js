import React, { useEffect,useState } from "react";
import { MenuList } from "./helpers/MenuList";
import MenuItem from "./sidecomponents/MenuItem";
import "../styles/menu.css";

import {NavBar} from "./NavBar"
import Axios  from "axios";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Navigate } from "react-router-dom";
function Menu() {

    const [items,setitems]=useState([]);
    const [pid,setpid]=useState(null);
    const [langs,setlangs]=useState([]);
    useEffect(()=>{
        setpid(window.location.href.split('/')[4]);
        Axios.post("/api/projects/findpid/",{
            pid:window.location.href.split('/')[4]
        }).then((response)=>{
            console.log("project recieve",response.data.data[0]);
            setitems(response.data.data[0]);
            setlangs(response.data.data[0].Languages);
        }).catch((err)=>{
            console.log("error findpid",err);
        })
    },[]);

    const downloadhandler = () => {
      console.log("sfiye");
      items.Languages.map((item)=>{
        console.log(items.translations[item.value]);
        var uri=`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(items.translations[item.value]))}`;
        var downloadLink = document.createElement("a");
        downloadLink.href = uri;
        downloadLink.download = `${item.value}.json`;

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      })
    };   
        

    

  return window.localStorage.getItem("isLoggedIn")==null ?<Navigate to="/"/>: (
    
    <div className="menu">
        <NavBar/>

      <h1 className="menuTitle"></h1>
      <br></br>
      <div className="menuList">
      <Link to={"/table/"+pid+'/'+'en'} state={ {items}}  style={{textDecoration: 'none'}}>
      <MenuItem
              pid={pid}
              name={"English (Base Lang)"}
              price={"en"}
            />
            {console.log("iooi",langs)}
            </Link>
        
            
                
            
        {langs.map((item) => {
            console.log(item)
          return (
            <Link to={"/table/"+pid+'/'+item.value} state={ {items}} style={{textDecoration: 'none'}}>
            <MenuItem
              id={pid}
              name={item.label}
              price={item.value}
            />
            </Link>
          );
        })}
      </div>
      <Button onClick={downloadhandler} style={{color:"cyan", border:'1px solid cyan'}}> Download JSON files</Button>
    </div>
  );
}

export default Menu;