import React, { Component } from "react"
import styled from "styled-components"

const AppWrapper = styled.div`
	background-color: red;
`
const PageTitle = styled.h1`
	color: yellow;
`

class App extends Component {
	render() {
		return (
			<AppWrapper>
				<PageTitle>AppWorked</PageTitle>
			</AppWrapper>
		)
	}
}

export default App
