import React from 'react';
import './HandCricket.css';

export default class HandCricket extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={player:[],comp:[],fb:[],finish:[]};
    }

    componentDidMount() 
    {
        this.setForGame();
    }

    setForGame()
    {
        const player=[];
        const comp=[];
        const fb=[]
        const finish=[]
        comp.push(0);
        player.push(0);
        fb.push(0);
        finish.push(0);
        this.setState({player,comp,fb,finish});
    }

    batfirst(c)
    {
        const {player,comp,fb,finish}=this.state;
        var co=randomin(1,6);
        const a=document.getElementById('a');
        const b=document.getElementById('b');
        a.innerHTML=c;
        b.innerHTML=co;
        if(co===c)
        {
            finish[0]=1;
            const st=document.getElementById('status');
            st.innerHTML='Status : Bowling';
            const z=document.getElementById('defend');
            z.style.display='inline-block';
            const y=document.getElementById('gamePlay');
            const x=document.getElementById('OUT');
            y.style.display='none';
            x.style.display='inline-block';
        }
        else
        {
            player[0]+=c;
        }
        this.setState({player,comp,fb,finish});
    }

    batsecond(c)
    {
        const st=document.getElementById('status');
        st.innerHTML='Status : Batting';
        const {player,comp,fb,finish}=this.state;
        var co=randomin(1,6);
        const a=document.getElementById('a');
        const b=document.getElementById('b');
        a.innerHTML=c;
        b.innerHTML=co;
        if(co===c)
        {
            if(player[0]===comp[0])
            {
                const y=document.getElementById('gamePlay');
                const x=document.getElementById('tie');
                y.style.display='none';
                x.style.display='inline-block';
            }
            else
            {
                const y=document.getElementById('gamePlay');
                const x=document.getElementById('chaseloss');
                y.style.display='none';
                x.style.display='inline-block';
            }
        }
        else
        {
            player[0]+=c;
            if(player[0]>comp[0])
            {
                const y=document.getElementById('gamePlay');
                const x=document.getElementById('chasewin');
                y.style.display='none';
                x.style.display='inline-block';
            }
        }
        this.setState({player,comp,fb,finish});
    }

    bowlfirst(c)
    {
        const {player,comp,fb,finish}=this.state;
        var co=randomin(1,6);
        const a=document.getElementById('a');
        const b=document.getElementById('b');
        a.innerHTML=c;
        b.innerHTML=co;
        if(co===c)
        {
            finish[0]=1;
            const st=document.getElementById('status');
            st.innerHTML='Status : Batting';
            const z=document.getElementById('chase');
            z.style.display='inline-block';
            const y=document.getElementById('gamePlay');
            const x=document.getElementById('OUT');
            y.style.display='none';
            x.style.display='inline-block';
        }
        else
        {
            comp[0]=comp[0]+c;
        }
        this.setState({player,comp,fb,finish});
    }

    bowlsecond(c)
    {
        const st=document.getElementById('status');
        st.innerHTML='Status : Bowling';
        const {player,comp,fb,finish}=this.state;
        var co=randomin(1,6);
        const a=document.getElementById('a');
        const b=document.getElementById('b');
        a.innerHTML=c;
        b.innerHTML=co;
        if(co===c)
        {
            if(player[0]===comp[0])
            {
                const y=document.getElementById('gamePlay');
                const x=document.getElementById('tie');
                y.style.display='none';
                x.style.display='inline-block';
            }
            else
            {
                const y=document.getElementById('gamePlay');
                const x=document.getElementById('defendwin');
                y.style.display='none';
                x.style.display='inline-block';
            }
        }
        else
        {
            comp[0]+=c;
            if(comp[0]>player[0])
            {
                const y=document.getElementById('gamePlay');
                const x=document.getElementById('defendloss');
                y.style.display='none';
                x.style.display='inline-block';
            }
        }
        this.setState({player,comp,fb,finish});
    }

    toss(x)
    {
        var t=randomin(0,1);
        const c=document.getElementById('toss');
        c.style.display='none';
        if(t===x)
        {
            const s=document.getElementById('startgame');
            s.style.display='inline-block';
        }
        else
        {
            var b=randomin(0,1);
            if(b===0)
            {
                const s=document.getElementById('startgamebat');
                s.style.display='inline-block';
            }
            else
            {
                const s=document.getElementById('startgamebowl');
                s.style.display='inline-block';
            }
        }
    }

    chose(c)
    {
        const {player,comp,fb,finish}=this.state;
        if(fb[0]===1)
        {
            console.log("batfirst");
            if(finish[0]===0)
            {
                this.batfirst(c);
            }
            else
            {
                this.bowlsecond(c);
            }
        }
        else
        {
            console.log("bowlfirst");
            if(finish[0]===0)
            {
                this.bowlfirst(c);
            }
            else
            {
                this.batsecond(c);
            }
        }
    }

    bob(x)
    {
        const {player,comp,fb,finish}=this.state;
        const c=document.getElementById('startgame');
        c.style.display='none';
        const d=document.getElementById('startgamebat');
        d.style.display='none';
        const e=document.getElementById('startgamebowl');
        e.style.display='none';
        const g=document.getElementById('gamePlay');
        g.style.display='inline-block'
        if(x===0)
        {
            const st=document.getElementById('status');
            st.innerHTML='Status : Batting';
            fb[0]=1;
            finish[0]=0;
            this.setState({player,comp,fb,finish});
        }
        else
        {
            const st=document.getElementById('status');
            st.innerHTML='Status : Bowling';
            fb[0]=0;
            finish[0]=0;
            this.setState({player,comp,fb,finish});
        }
        this.setState({player,comp,fb,finish});
    }

    continuegame()
    {
        const x=document.getElementById('gamePlay');
        const y=document.getElementById('OUT');
        y.style.display='none';
        x.style.display='inline-block';
    }

    render()
    {
        const {player,comp,fb,finish}=this.state;
        return(
            <div id="surface">
                <h1 id="head">Digital Hand Cricket</h1>
                <div id="toss">
                <br></br>
                <h1>Let's Play</h1>
                <br></br>
                <br></br>
                <button className="Coins" onClick={()=>this.toss(0)}>Heads</button>
                <button className="Coins" onClick={()=>this.toss(1)}>Tails</button>
                </div>
                <div id="startgame">
                <br></br>
                <h1>YOU HAVE WON THE TOSS</h1>
                <br></br>
                <br></br>
                <button className="Coin" onClick={()=>this.bob(0)}>Bat</button>
                <button className="Coin" onClick={()=>this.bob(1)}>Bowl</button>
                </div>
                <div id="startgamebat">
                <br></br>
                <h1>THE COMPUTER HAS WON THE TOSS AND ELECTED TO BAT</h1>
                <br></br>
                <br></br>
                <button className="Coin" onClick={()=>this.bob(1)}>CONTINUE</button>
                </div>
                <div id="startgamebowl">
                <br></br>
                <h1>THE COMPUTER HAS WON THE TOSS AND ELECTED TO BOWL</h1>
                <br></br>
                <br></br>
                <button className="Coin" onClick={()=>this.bob(0)}>CONTINUE</button>
                </div>
                <div id="gamePlay">
                <div className="p">YOU<br></br>{player[0]}</div>
                <div className="p">COMPUTER<br></br>{comp[0]}</div>
                <br></br>
                <div id="status">Status : </div>
                <div id="defend">COMPUTER NEEDS {player[0]-comp[0]+1} RUNS TO WIN</div>
                <div id="chase">YOU NEED {comp[0]-player[0]+1} RUNS TO WIN</div>
                <br></br>
                <button className="k" onClick={()=>this.chose(1)}>1</button>
                <button className="k" onClick={()=>this.chose(2)}>2</button>
                <button className="k" onClick={()=>this.chose(3)}>3</button>
                <button className="k" onClick={()=>this.chose(4)}>4</button>
                <button className="k" onClick={()=>this.chose(5)}>5</button>
                <button className="k" onClick={()=>this.chose(6)}>6</button>
                <br></br>
                <br></br>
                <div className="choice">YOU HAVE CHOSE<br></br><div id="a">0</div></div>
                <div className="choice">COMPUTER HAS CHOSE<br></br><div id="b">0</div></div>
                </div>
                <div id="defendwin">
                <br></br>
                <br></br>
                YOU HAVE WON THE GAME BY {player[0]-comp[0]} RUNS
                <br></br>
                <br></br>
                <button className="NG" onClick={()=>NG()}>NEW GAME</button>
                </div>
                <div id="chasewin">
                <br></br>
                <br></br>
                YOU HAVE WON THE GAME
                <br></br>
                <br></br>
                <button className="NG" onClick={()=>NG()}>NEW GAME</button>
                </div>
                <div id="defendloss">
                <br></br>
                <br></br>
                THE COMPUTER HAS WON THE GAME
                <br></br>
                <br></br>
                <button className="NG" onClick={()=>NG()}>NEW GAME</button>
                </div>
                <div id="chaseloss">
                <br></br>
                <br></br>
                THE COMPUTER HAS WON THE GAME BY {comp[0]-player[0]} RUNS
                <br></br>
                <br></br>
                <button className="NG" onClick={()=>NG()}>NEW GAME</button>
                </div>
                <div id="tie">
                <br></br>
                <br></br>
                THE GAME HAS ENDED UP IN A TIE
                <br></br>
                <br></br>
                <button className="NG" onClick={()=>NG()}>NEW GAME</button>
                </div>
                <div id="OUT">
                <br></br>
                <br></br>
                OUT
                <br></br>
                <br></br>
                <button id="continue" onClick={()=>this.continuegame()}>CONTINUE</button>
                </div>
            </div>
        );
    }
}

function randomin(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function NG()
{
    window.location.reload();
}