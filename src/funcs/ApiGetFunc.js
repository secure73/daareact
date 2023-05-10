
export default function ApiGetFunc(apiUrl,setStateFunction) {
  return (
    fetch(apiUrl).then(myResponse =>{
        return (myResponse).json()
      }).then(data=>{
        setStateFunction(data);
      })
  )
}
