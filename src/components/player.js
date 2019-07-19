import React, { Component } from "react";
import styled from "styled-components";

import Hls from "hls.js";

const PlayerWrapper = styled.div`
  position: relative;
`

const PlayerInner = styled.div`

`

class Player extends Component {
  componentDidMount() {
    if (Hls.isSupported() && this.player) {
      const streamUrl = "http://165.22.253.166:8081/vod/BigBuckBunny_320x180.mp4";
      const video = this.player;
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("running...")
        video.play();
      })
    } else {
      alert("Hls is not support")
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
          <video style={style} ref={(player) => this.player = player} autoPlay={true}></video>
        </PlayerInner>
      </PlayerWrapper>
    )
  }
}

export default Player