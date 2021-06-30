import { Row,Col,Button,Typography,  } from "antd";
import React from "react";
import firebase ,{auth} from "../pages/firebase/config";
//import user from "./user";
const Title =Typography;

export default function Home() {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleFbLogin = (provider) =>{
    auth.signInWithPopup(fbProvider);
 //auth.onAuthStateChanged((user) => {
//console.log({user});
   //if(user){

   }
 //});
  //}
  return (
    <div> 
      <Row justify ="center" style ={{height:800}}> 
        <Col span={8}>
          <Title style={{textAlign:"center"}} >
             Chat app
          </Title>
          <Button onClick={handleFbLogin}>
            Đăng nhập bằng Facebook
          </Button>
          <Button>
            Đăng nhập bằng Google
          </Button>
        </Col>
      </Row>
    </div>
  )
}
