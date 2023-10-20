import React from 'react';
import {NativeBaseProvider, Input, Button, Heading, Stack,Text} from 'native-base';

export default function App(){
  const [show,setShow]=React.useState(false);
  const [username,setUsername]=React.useState();
  const [password,setPassword]=React.useState();
  const [msg,setMsg]=React.useState();
  const [usersData,setUserData]=React.useState({name:"Alex",password:"alex"});
  const handleClick=()=>setShow(!show);
  const handleLogin=()=>{
    if(username===usersData.name && password===usersData.password){alert("Successfully logged in!\nWelcome back!")} else { setMsg("Invalid username or password");}};

  return(
    <NativeBaseProvider>
    <Stack direction={{base:"column",md:"row"}} style={{position:"relative", top:"30%"}} space={2} mx={{base:"auto",md:0}}>
    <Heading>    Welcome back</Heading>
    <Input type={"text"} placeholder="Username" onChangeText={(username)=>setUsername(username)} onChange={()=>setMsg("")}/>
    <Text  style={{color:"red"}} fontSize="xs">{msg}</Text>
    <Input type={show ? "text" : "password"} onChangeText={(password)=>setPassword(password)} onChange={()=>setMsg("")} InputRightElement={<Button ml={4} roundedLeft={0} roundedRight="md" onPress={handleClick}>{show?"Hide":"Show"} </Button>}placeholder="Password"/>
    <Button onPress={handleLogin}>SIGN IN</Button>
    </Stack>
    </NativeBaseProvider>
  );
}
