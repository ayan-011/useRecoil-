import { RecoilRoot, useRecoilState } from "recoil"
 


function App()  {
  return  

    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
     
   
}


 function MainApp(){
    
    return (
      <>
      <div>
        <button>Home</button>
        <button>network()</button>
        <button>jobs</button>
        <button>notification()</button>
        <button>message</button>

      </div>
      </>
    )
 }


export default App