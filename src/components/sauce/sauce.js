import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

export const MainLinks = styled(Link)`
    color: white;
    font-size: 30px;
    text-decoration: none;
    margin: 25px;
`;
const SauceContainer = styled.div`
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

const LeftSec = styled.div`
    flex: 50%;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 50px;
`;
const RightSec = styled.div`
    flex: 50%;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 50px;
`;
const MidSec = styled.div`
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
export function Sauce(){
    return <SauceContainer>
        <MapContainer>
            <LeftSec>
               <a href='https://gitlab.com/hxyro'>Gitlab</a>
            </LeftSec>
            
            <MidSec>
                <a href='https://github.com/hxyro/web.portfolio'>Github</a>
            </MidSec>
        
            <RightSec>
                <a href='https://hub.docker.com/u/hxyro'>Dockerhub</a>
            </RightSec>
        </MapContainer>
    </SauceContainer>
}
