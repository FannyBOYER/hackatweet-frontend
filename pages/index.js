import Home from '../components/Home';
import router from "next/router"
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Index() {

  const token = useSelector(store => store.user.value.token)

useEffect(()=>{

  //si il y a un token dans le store on ne fait sinon on redirige vers /login 

  if(!token){
    router.push("/login")
  }

},[])

  return <Home />;
}

export default Index;
