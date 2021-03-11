import React from 'react';
import { useHistory } from 'react-router';
import './League.css';
const League = (props) => {
    // console.log(props.League)
const {strLeague,idLeague} = props.League;
const history = useHistory();
const showInfo = idLeague => {
    const url = `League/${idLeague}`;
    history.push(url);
}
    return (
        <div class = "cart">
            <img src= "https://www.thesportsdb.com/images/media/league/logo/yrxxpx1421700436.png" className="size" alt=""/>
            <h2><b>{strLeague}</b></h2>
            <strong style={{opacity:.5}}>Sports type football</strong><br/>
            <button onClick={() => showInfo(idLeague)} class="btn btn-info btn-lg"><b>INFO</b></button>
        </div>
    );
};

export default League;