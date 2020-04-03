import React,{useState,useEffect} from 'react';
import '../css/keyboard.css';

const Keyboard=()=>{
    useEffect(()=>{document.getElementById('audio').playbackRate=3})
    const [text,setText]=useState("");
    const [asskey,setAsskey]=useState();
    const asskeychange=(event)=>{
        setAsskey(event.which || event.keyCode);
    }
    var up=-16.8;
    const onchange=(e)=>{
        setText(e.target.value);
        document.getElementById('audio').play()
        if(document.getElementById(e.target.value[e.target.value.length-1])!==null){
        document.getElementById(e.target.value[e.target.value.length-1]).style.background="blue";
        document.getElementById(e.target.value[e.target.value.length-1]).style.color="white";
        }
        if(asskey===32)
        document.getElementById('space').style.background="blue";
        if(asskey===13){
        up=up-16.8;
        console.log("working");
        var div=document.querySelector('p');
        var br=document.createElement('br');
        var span = document.createElement('span');
        span.textContent = e.target.value;
        div.appendChild(br);
        div.appendChild(span);
        div.style.transform=`translateY(${up}px)`;
        const arr=document.querySelectorAll('li')
        for(var i=0;i<arr.length;i++){
            arr[i].style.background="white";
            arr[i].style.color="black";
        }
        setText("");
       }

    }
    return(
        <div className="container">
            <p className="p">Ready to Start!!!!</p>
            <textarea id="write" onKeyPress={asskeychange} onChange={onchange} value={text}></textarea>
            <ul id="keyboard">
            <li className="symbol" id="`"><span className="off">`</span><span className="on">~</span></li>
            <li className="symbol" id="1"><span className="off">1</span><span className="on">!</span></li>
            <li className="symbol" id="2"><span className="off">2</span><span className="on">@</span></li>
            <li className="symbol" id="3"><span className="off">3</span><span className="on">#</span></li>
            <li className="symbol" id="4"><span className="off">4</span><span className="on">$</span></li>
            <li className="symbol" id="5"><span className="off">5</span><span className="on">%</span></li>
            <li className="symbol" id="6"><span className="off">6</span><span className="on">^</span></li>
            <li className="symbol" id="7"><span className="off">7</span><span className="on">&amp;</span></li>
            <li className="symbol" id="8"><span className="off">8</span><span className="on">*</span></li>
            <li className="symbol" id="9"><span className="off">9</span><span className="on">(</span></li>
            <li className="symbol" id="0"><span className="off">0</span><span className="on">)</span></li>
            <li className="symbol" id="-"><span className="off">-</span><span className="on">_</span></li>
            <li className="symbol" id="="><span className="off">=</span><span className="on">+</span></li>
            <li className="delete lastitem">delete</li>
            <li className="tab" >tab</li>
            <li className="letter" id="q">q</li>
            <li className="letter" id="w">w</li>
            <li className="letter" id="e">e</li>
            <li className="letter" id="r">r</li>
            <li className="letter" id="t">t</li>
            <li className="letter" id="y">y</li>
            <li className="letter" id="u">u</li>
            <li className="letter" id="i">i</li>
            <li className="letter" id="o">o</li>
            <li className="letter" id="p">p</li>
            <li className="symbol" id="["><span className="off">{"["}</span><span className="on">{"{"}</span></li>
            <li className="symbol" id="]"><span className="off">{"]"}</span><span className="on">{"}"}</span></li>
            <li className="symbol lastitem" id="\"><span className="off">\</span><span className="on">|</span></li>
            <li className="capslock">caps lock</li>
            <li className="letter" id="a">a</li>
            <li className="letter" id="s">s</li>
            <li className="letter" id="d">d</li>
            <li className="letter" id="f">f</li>
            <li className="letter" id="g">g</li>
            <li className="letter" id="h">h</li>
            <li className="letter" id="j">j</li>
            <li className="letter" id="k">k</li>
            <li className="letter" id="l">l</li>
            <li className="symbol" id=";"><span className="off">;</span><span className="on">:</span></li>
            <li className="symbol" id="'"><span className="off">'</span><span className="on">&quot;</span></li>
            <li className="return lastitem" id="enter">Enter</li>
            <li className="left-shift">shift</li>
            <li className="letter" id="z">z</li>
            <li className="letter" id="x">x</li>
            <li className="letter" id="c">c</li>
            <li className="letter" id="v">v</li>
            <li className="letter" id="b">b</li>
            <li className="letter" id="n">n</li>
            <li className="letter" id="m">m</li>
            <li className="symbol" id=","><span className="off">,</span><span className="on">&lt;</span></li>
            <li className="symbol" id="."><span className="off">.</span><span className="on">&gt;</span></li>
            <li className="symbol" id="/"><span className="off">/</span><span className="on">?</span></li>
            <li className="right-shift lastitem">shift</li>
            <li className="space lastitem" id="space">&nbsp;</li>
        </ul>
        
        </div>
        
    );
}

export default Keyboard;