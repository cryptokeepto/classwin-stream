import React, { Component } from "react";
import styled from "styled-components";
import Player from "../player";

const LiveWrapper = styled.div`

`
class Watch extends Component {
  render() {
    return (
      <LiveWrapper>
        <h1>Watch Component</h1>
        <Player />
      </LiveWrapper>
    )
  }
}

export default Watch