import React from 'react'
import styled from 'styled-components';
import { BsArrowLeft } from "react-icons/bs";
import video1 from "../assets/video1.mp4";
import { useNavigate } from 'react-router-dom';

export default function Player() {
    const navigate = useNavigate();
  return (
    <Container>
        <div className="player">
            <div className="back">
                <BsArrowLeft onClick={() => navigate(-1)} />
            </div>
            <video src={video1} autoPlay loop controls muted ></video> {/* Corrected `scr` to `src` */}
        </div>
    </Container>
  );
}

const Container = styled.div``;
