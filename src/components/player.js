import React, { Component } from "react";
import styled from "styled-components";

import Shaka from "shaka-player";

const PlayerWrapper = styled.div`
  position: relative;
`

const PlayerInner = styled.div`

`

class Player extends Component {
  
  componentDidMount() {
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

  render() {
    const style = {
      width: 640,
      height: 360,
      backgroundColor: "black"
    }

    return (
      <PlayerWrapper>
        <PlayerInner>
          <video style={style} ref={(player) => this.player = player} controls poster="https://linkassistive.com/wp-content/uploads/2012/12/big-buck-bunny-poster.png" />
        </PlayerInner>
      </PlayerWrapper>
    )
  }
}

export default Player