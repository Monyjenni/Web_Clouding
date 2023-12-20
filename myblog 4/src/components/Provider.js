import React ,{useState}from 'react';

const MyContext = React.createContext({});
const ContextProvider = (children)=>{
  const [lang ,setLang]=useState('en')
  return <MyContext.provider value={lang ,setLang}>

    {children.children}

  </MyContext.provider>

}

export default MyContext;