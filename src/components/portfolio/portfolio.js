import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

export const MainLinks = styled(Link)`
    color: white;
    font-size: 30px;
    text-decoration: none;
    margin: 25px;
`;
const PortfolioContainer = styled.div`
    position: absolute;
    top: 25%;
    left: 35%;
    width: 30%;
    height: 15%;
    background: rgba(0,0,0, 0);
    display: flex;
    flex-direction: column;
    z-index: 99;
`; 

const MidSec = styled.div`
    flex: 50%;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 60px;
`;

const MapContainer = styled.div`
    margin: 4%;
    margin-bottum: 9%;
    display: flex;
    flex-direction: column;
`;
export function Portfolio(){
    return <PortfolioContainer>
        <MapContainer>
            <MidSec>
               Coming Soon...
            </MidSec>
        </MapContainer>
    </PortfolioContainer>
}
