import React, { Component } from "react";
import styled from "styled-components";

import Shaka from "shaka-player";

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
    Shaka.polyfill.installAll();
    if (Shaka.Player.isBrowserSupported()) {
      const player = new Shaka.Player(this.player)
      const url = "https://www.radiantmediaplayer.com/media/bbb-360p.mp4"
      player.load(url)
        .then(() => {
          console.log("video is playing")
        })
        .catch(e => {
          console.error(e)
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
            poster="https://linkassistive.com/wp-content/uploads/2012/12/big-buck-bunny-poster.png" 
           />
          <VideoTitle>
            <VideoLiveButton>Live</VideoLiveButton>
            Big Buck Bunny
          </VideoTitle>
        </PlayerInner>
      </PlayerWrapper>
    )
  }
}

export default Player