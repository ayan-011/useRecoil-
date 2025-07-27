import { RecoilRoot, useRecoilValue } from "recoil"
import { add, jobsAtom, networkAtom } from "./atom"
import React from "react"
 


function App()  {
  return   <RecoilRoot>
     <MainApp />
      </RecoilRoot>
 
   
}


 function MainApp(){
    const networkNotificationCount = useRecoilValue(networkAtom)
   
    const jobsNotificationCount = useRecoilValue(jobsAtom)

    const totalNotifications = useRecoilValue(add)
     
    //In if else method
    let jobDisplay
    if(jobsNotificationCount >=100){
      jobDisplay =  "99+"
    } 
    else{
      jobDisplay = jobsNotificationCount
    }

    return (
    <>
      <button>Home</button>
      
      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs({jobDisplay})  </button>
      <button>Messaging  </button>
      <button>Notifications </button>

      <button>Me  ({totalNotifications})</button>
    </>
  )
 }


export default App