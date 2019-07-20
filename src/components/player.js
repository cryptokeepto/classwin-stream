import React, { Component } from "react";
import styled from "styled-components";

import Hls from "hls.js";

const PlayerWrapper = styled.div`
  position: relative;
`

const PlayerInner = styled.div`

`

const VideoTitle = styled.h2`
  font-size: 22px;
  line-height: 25px;
`

const VideoLiveButton = styled.span`
  display: inline;
  padding 7px;
  color: white;
  margin-right: 10px;
  background-color: red;
  line-height: 25px;
  font-size: 14px;
`

class Player extends Component {
  
  componentDidMount() {
    this.initPlayer()
  }
  
  initPlayer = () => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("http://192.168.1.133/hls/equals.m3u8")
      hls.attachMedia(this.player)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        this.player.play()
      })
      hls.on("hlsError", (e, data) => {
        console.log(data)
      })
    } else {
      alert("Browser is not supported")
    }
  }

  togglePlayPause = () => {
    if (this.player.paused) {
      this.player.play()
    } else {
      this.player.pause() 
    }
  }

  render() {
    const style = {
      width: 640,
      height: 360,
      backgroundColor: "black"
    }

    return (
      <PlayerWrapper>
        <PlayerInner>
          <video
            style={style} 
            autoPlay={true} 
            ref={(player) => this.player = player} 
            onClick={this.togglePlayPause}
            controls={false} 
            poster="http://mizhollywood.com/wp-content/uploads/2016/09/equals-film-poster-563x353.jpg" />
          <VideoTitle>
            <VideoLiveButton>Live</VideoLiveButton>
            EQUALS
          </VideoTitle>
        </PlayerInner>
      </PlayerWrapper>
    )
  }
}

export default Player