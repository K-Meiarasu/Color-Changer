import React,{useState} from 'react';

var list=[{color:'Lime', value:'lime'},
            {color:'Lavendar', value:'lavendar'},
            {color:'Crimson', value:'crimson'},
            {color:'Darkblue', value:'darkblue'},
            {color:'Teal', value:'teal'},
            {color:'Rebecca Purple', value:'rebeccapurple'},
            {color:'Ghost White', value:'ghostwhite'},
            {color:'Aqua Marine', value:'aquamarine'},
            {color:'Alice Blue', value:'aliceblue'}];

var flag=true

const Color = (props) => {
    const [colors, selectColor]=useState('lime')
    function change(){
        if(flag){
            for(let i=0;i<list.length;i++)
            {
                var division=document.createElement('div')
                division.setAttribute('class','Div1')
                division.setAttribute('id','ele'+i)
                var c=document.createElement('h1')
                c.innerHTML=list[i].color
                division.appendChild(c)
                document.getElementById('box').appendChild(division)
                division.onclick=function(){
                    selectColor(list[i].value)
                    flag=true
                    remove()
                }
            }
            flag=false
        }
    }
    function remove(){
        var r=document.getElementById('box')
        for(let i=0;i<9;i++){
            let j=0;
            r.removeChild(r.childNodes[j])
        }
    }
    return(
        <div>
            <div id="color" className="color">
                <button onClick={change} style={{background: colors}}>{colors}</button>
            </div>
            <div id="box" className="box"></div><br/>
            <div id="bg" className="bg"  style={{background: colors}}></div>
        </div>
    );
}

export default Color