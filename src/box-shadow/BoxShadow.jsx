import { useState } from 'react';
import './BoxShadow.css'

const BoxShadow = () => {
    const [hori , setHori] = useState(10);
    const [veri , setVeri] = useState(50);
    const [blur , setBlur] = useState(30);
    const [spread , setSpread] = useState(0);
    const [color , setColor] = useState('red');
console.log(hori,veri,blur,spread,color);

    return ( 
    <div className="app">
        <div className="control">
            <div className="form-group">
                <label className="form-label" >طول افقی </label>
                <input className="form-range" 
                type="range" 
                min="-200" 
                max="200"
                value={hori}
                onChange={(e)=>{setHori(e.target.value)}}
                />
            </div>
            <div className="form-group">
                <label className="form-label" >طول عمودی </label>
                <input className="form-range" 
                type="range" 
                min="-200" 
                max="200"
                value={veri}
                onChange={(e)=>{setVeri(e.target.value)}}
                />
            </div>
            <div className="form-group">
                <label className="form-label" >تاری </label>
                <input className="form-range" 
                type="range" 
                min="0" 
                max="100"
                value={blur}
                onChange={(e)=>{setBlur(e.target.value)}}
                />
            </div>
            <div className="form-group">
                <label className="form-label" >گسترش رنگ </label>
                <input className="form-range" 
                type="range" 
                min="-100" 
                max="50"
                value={spread}
                onChange={(e)=>{setSpread(e.target.value)}}
                />
            </div>
            <div className="form-group">
                <label className="form-label"> رنگ</label>
                <input className="form-color" 
                type="color" 
                value={color}
                onChange={(e)=>{setColor(e.target.value)}}
                />
            </div>
        </div>
        <div className="outpot" style={{boxShadow : `${hori}px ${veri}px ${blur}px ${spread}px ${color}`}}>
            <div className="box">
                <p>{`box-shadow : ${hori}px ${veri}px ${blur}px ${spread}px ${color}`}</p>
            </div>
        </div>
    </div> 
    );
}
 
export default BoxShadow;