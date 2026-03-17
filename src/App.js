function App(){
    let age=18;
    function AgeUpdate(){
      
      age= 20;
      console.log(age)
    }
    
  return(
     <>
     <h1>My Age is {age}</h1>
      <button onClick={AgeUpdate}>Click Me </button>
     </>
  )
}

export default App;