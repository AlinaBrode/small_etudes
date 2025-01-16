import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [a11,seta11]=useState(false);
  let [a12,seta12]=useState(false);
  let [a13,seta13]=useState(false);
  let [a14,seta14]=useState(false);
  let [a15,seta15]=useState(false);

  let [a21,seta21]=useState(false);
  let [a22,seta22]=useState(false);
  let [a23,seta23]=useState(false);
  let [a24,seta24]=useState(false);
  let [a25,seta25]=useState(false);

  let [a31,seta31]=useState(false);
  let [a32,seta32]=useState(false);
  let [a33,seta33]=useState(false);
  let [a34,seta34]=useState(false);
  let [a35,seta35]=useState(false);

  let [a41,seta41]=useState(false);
  let [a42,seta42]=useState(false);
  let [a43,seta43]=useState(false);
  let [a44,seta44]=useState(false);
  let [a45,seta45]=useState(false);

  let [a51,seta51]=useState(false);
  let [a52,seta52]=useState(false);
  let [a53,seta53]=useState(false);
  let [a54,seta54]=useState(false);
  let [a55,seta55]=useState(false);

  const task = 'перекрась все клетки в зелёный';
  const final = 'молодец,перекрасил!';
  let [status,setStatus] = useState(task);
  useEffect(()=>{setStatus(
    (a11 && a12 && a13 && a14 && a15 &&
     a21 && a22 && a23 && a24 && a25 &&
     a31 && a32 && a33 && a34 && a35 &&
     a41 && a42 && a43 && a44 && a45 &&
    a51 && a52 && a53 && a54 && a55)?final:task)},
  [a11, a12, a13, a14, a15, a21, a22, a23, a24, a25, a31, a32, a33, a34, a35, a41, a42, a43, a44, a45, a51, a52, a53, a54, a55]);
  

  return (
    <>
    <div style={{display:'flex', gap: 2, marginBottom: 2}}>
      <div style={{backgroundColor:a11?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta11(!a11);seta21(!a21);seta12(!a12)}}></div>
      <div style={{backgroundColor:a12?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta12(!a12);seta11(!a11);seta13(!a13);seta22(!a22)}}></div>
      <div style={{backgroundColor:a13?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta13(!a13);seta12(!a12);seta14(!a14);seta23(!a23)}}></div>
      <div style={{backgroundColor:a14?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta14(!a14);seta13(!a13);seta15(!a15);seta24(!a24)}}></div>
      <div style={{backgroundColor:a15?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta15(!a15);seta14(!a14);seta25(!a25)}}></div>
    </div>
    <div style={{display:'flex', gap: 2, marginBottom: 2}}>
      <div style={{backgroundColor:a21?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta21(!a21);seta11(!a11);seta31(!a31);seta22(!a22)}}></div>
      <div style={{backgroundColor:a22?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta22(!a22);seta12(!a12);seta21(!a21);seta23(!a23);seta32(!a32)}}></div>
      <div style={{backgroundColor:a23?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta23(!a23);seta13(!a13);seta22(!a22);seta33(!a33);seta24(!a24)}}></div>
      <div style={{backgroundColor:a24?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta24(!a24);seta14(!a14);seta23(!a23);seta34(!a34);seta25(!a25)}}></div>
      <div style={{backgroundColor:a25?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta25(!a25);seta15(!a15);seta24(!a24);seta35(!a35)}}></div>
    </div>
    <div style={{display:'flex', gap: 2, marginBottom: 2}}>
      <div style={{backgroundColor:a31?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta31(!a31);seta21(!a21);seta41(!a41);seta32(!a32)}}></div>
      <div style={{backgroundColor:a32?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta32(!a32);seta22(!a22);seta31(!a31);seta42(!a42);seta33(!a33)}}></div>
      <div style={{backgroundColor:a33?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta33(!a33);seta23(!a23);seta32(!a32);seta43(!a43);seta34(!a34)}}></div>
      <div style={{backgroundColor:a34?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta34(!a34);seta24(!a24);seta33(!a33);seta44(!a44);seta35(!a35)}}></div>
      <div style={{backgroundColor:a35?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta35(!a35);seta25(!a25);seta34(!a34);seta45(!a45)}}></div>
    </div>
    <div style={{display:'flex', gap: 2, marginBottom: 2}}>
      <div style={{backgroundColor:a41?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta41(!a41);seta31(!a31);seta42(!a42);seta51(!a51)}}></div>
      <div style={{backgroundColor:a42?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta42(!a42);seta32(!a32);seta41(!a41);seta52(!a52);seta43(!a43)}}></div>
      <div style={{backgroundColor:a43?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta43(!a43);seta33(!a33);seta42(!a42);seta53(!a53);seta44(!a44)}}></div>
      <div style={{backgroundColor:a44?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta44(!a44);seta34(!a34);seta43(!a43);seta54(!a54);seta45(!a45)}}></div>
      <div style={{backgroundColor:a45?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta45(!a45);seta35(!a35);seta44(!a44);seta55(!a55)}}></div>
    </div>
    <div style={{display:'flex', gap: 2}}>
      <div style={{backgroundColor:a51?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta51(!a51);seta41(!a41);seta52(!a52)}}></div>
      <div style={{backgroundColor:a52?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta52(!a52);seta42(!a42);seta51(!a51);seta53(!a53)}}></div>
      <div style={{backgroundColor:a53?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta53(!a53);seta43(!a43);seta52(!a52);seta54(!a54)}}></div>
      <div style={{backgroundColor:a54?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta54(!a54);seta44(!a44);seta53(!a53);seta55(!a55)}}></div>
      <div style={{backgroundColor:a55?'green':'lemonchiffon',width:50,height:50}}
      onClick={()=>{seta55(!a55);seta45(!a45);seta54(!a54)}}></div>
    </div>
    {status}
    </>
  )
}

export default App
