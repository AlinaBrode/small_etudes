import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const unsorted = 'отсортируй массив';

  let [a, setA] = useState([4,3,2,1,7,5,6]);
  let [p, setP] = useState(4);
  let [q, setQ] = useState(1);
  let [result, setResult] = useState(unsorted);

  function ourSwap() {
    let newA = [...a];
    const t = newA[p];
    newA[p] = newA[q];
    newA[q] = t;
    setA(newA);
  }

  function isSorted() {
    for(let x=1;x<a.length;x++) {
      if (a[x-1]>a[x]) {
        return false;
      }
    }
    return true;
  }

  /*
  function isSortedMessage() {
    for(let x=1;x<a.length;x++){
      if (a[x-1]>a[x]) {
        return unsorted;
      }
    }
    return 'Молодец,отсортировал массив!';
  }
  */


  useEffect(()=>{setResult(isSorted() ? 'Молодец,отсортировал массив!': unsorted)},[a]);
  // useEffect(()=>{setResult(isSortedMessage())},[a]);

  return (
    <>
    <div style={{display:"flex",gap:10}}>
      {a.map( (v,ind) => <div style={
        {width:40,height:40,
        backgroundColor:"#" + (ind===p ? "ff":"00") + "ff" + (ind===q ? "ff":"00"),
        display:"flex",
        justifyContent:'center',alignItems:'center'}}>
          {v}
      </div> )}
      </div>

      <button onClick={()=>{if (p>0) setP(p-1)}}> &lt; </button>
      p={p};a[p]={a[p]}
      <button onClick={()=>{if (p<a.length-1) setP(p+1)}}> &gt; </button>
      <br/>
      <button onClick={()=>{if (q>0) setQ(q-1)}}> &lt; </button>
      q={q};a[q]={a[q]}
      <button onClick={()=>{if (q<a.length-1) setQ(q+1)}}> &gt; </button>
      <br/>
      <button onClick={ourSwap}>swap</button>
      <h3>{result}</h3>
    </>
  )
}

export default App
