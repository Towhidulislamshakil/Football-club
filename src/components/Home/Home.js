import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Home.css'
const Home = () => {
    const [Leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    }, [])

    const friendStyle = {
        height:'300px',
        width:'2000px'
    }
    return (
        <div>
            <img src= "https://www.itl.cat/pngfile/big/297-2975925_transparent-1080p-png-wallpaper-football-stadium-png.png" style={friendStyle} alt=""/>
            <div class="centered">Football League</div>
            {
                 Leagues.map(le =><League League={le}></League>)
            }

        </div>
    );
};

export default Home;