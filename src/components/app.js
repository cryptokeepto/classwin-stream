import React, { Component } from "react"
import { Route, Switch } from "react-router-dom";
import styled from "styled-components"

import Watch from "./pages/watch";
import Home from "./pages/home";

const AppWrapper = styled.div`
`
const PageTitle = styled.h1`
	font-size: 30px;
	text-align: center;
`
const Container = styled.div`
	width: 960px;
	margin: 0 auto;
	padding: 10px;
`
class App extends Component {
	render() {
		return (
			<AppWrapper>
				<PageTitle>Classwin stream</PageTitle>
				<hr />
				<Container>
					<Switch>
						<Route exact path={"/"} component={Home} />
						<Route exact path={"/watch/:id"} component={Watch} />
					</Switch>
				</Container>
			</AppWrapper>
		)
	}
}

export default App
