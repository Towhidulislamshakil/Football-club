
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMarsStroke, faUserFriends} from '@fortawesome/free-solid-svg-icons'
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

const LeagueDetails = () => {
    const {idLeague} = useParams();
    const [id, setFriend] = useState({});
    const {intFormedYear,strCountry,strGender,strLogo,strLeague,strFanart2,strDescriptionEN,strTwitter,strYoutube,strFacebook} = id;
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data.leagues[0]));
    }, [])
    const BannerStyle = {
        height:'300px',
        width:'2000px'
    }
    return (
        <div>{
                    strGender === 'Male'? <img src="https://www.thesportsdb.com/images/media/league/fanart/917urb1547554025.jpg" class="centeredlogo" alt=""/>:<img src="https://i2.wp.com/cheapgoals.com/wp-content/uploads/2019/05/AUSTRALIA-FEMALE-TEAM.jpg?resize=608%2C403&ssl=1" class="centeredlogo" alt=""/>
                } 
            <img src= "https://www.itl.cat/pngfile/big/297-2975925_transparent-1080p-png-wallpaper-football-stadium-png.png" style={BannerStyle} alt=""/>
            <img src={strLogo} class="logo" alt=""/>
            {/* <img src={strFanart2} class="centeredlogo" alt=""/> */}
            <div class ="ClubDetails">
            <h1><b>{strLeague}</b></h1>
            <div class ="text">
            <h2><FontAwesomeIcon icon={faUserFriends} />  Founded: {intFormedYear}</h2>
            <h2><FontAwesomeIcon icon={faFlag} />  Country: {strCountry}</h2>
            <h2><FontAwesomeIcon icon={faFutbol} />  Sports: Football</h2>
            <h2><FontAwesomeIcon icon={faMarsStroke}/> Gender: {strGender}</h2>
            </div>
           </div>

           <div className="Description">
           <p>{strDescriptionEN}</p>
           </div>
           <div class="social-container d-flex ">
      <a href="https://www.youtube.com/watch?v=hvTT_4ecK0k&ab_channel=ManCity"><FaYoutube size="2x"/></a>
      <a href="https://www.facebook.com/premierleague/"><FaFacebook size="2x"/></a>
      <a href="https://twitter.com/EFL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><AiFillTwitterCircle size="2x"/></a>
     </div>
        </div>
        
    );
};

export default LeagueDetails;