import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

export const MainLinks = styled(Link)`
    color: white;
    font-size: 30px;
    text-decoration: none;
    margin: 25px;
`;
const SocialContainer = styled.div`
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 28%;
    background: rgba(0,0,0, 0);
    display: flex;
    flex-direction: column;
    z-index: 99;
`; 

const TwitterSec = styled.div`
    flex: 50%;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 50px;
`;
const GithubSec = styled.div`
    flex: 50%;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 50px;
`;
const LinkedinSec = styled.div`
    flex: 50%;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 50px;
`;
const DiscordSec = styled.div`
    flex: 50%;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 50px;
`;

const MapContainer = styled.div`
    margin: 4%;
    margin-bottum: 9%;
    display: flex;
    flex-direction: column;
`;
export function Social(){
    return <SocialContainer>
        <MapContainer>
            <GithubSec>
                <a href='https://github.com/hxyro'>Github</a>
            </GithubSec>
        
            <DiscordSec>
                <a href='#'>Discord</a>
            </DiscordSec>

            <TwitterSec>
               <a href='https://twitter.com/hxyro0'>Twitter</a>
            </TwitterSec>
            
            <LinkedinSec>
                <a href='#'>Linkedin</a>
            </LinkedinSec>
        </MapContainer>
    </SocialContainer>
}
