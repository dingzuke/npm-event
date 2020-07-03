import * as ReactDOM from "react-dom";
import * as React from "react";
import { useState } from "react";
import Event from "../src";
// import Event from "../dist/index";
// import Event from "publish-subscribe-event";
import EventListerUI from "./eventListener.ui";
const styles = require("./index.less");

const App = () => {
	const [inData, setInputData] = useState(undefined);
	const eventInstance = Event.getInstance();
	// 事件派发发布
	function dispatchEvent() {
		eventInstance.dispatchEvent("my-message", inData);
	}
	return (
		<div className={styles.normal}>
			<div className={styles.sendBox}>
				<input
					type="text"
					onChange={(e) => setInputData(e.target.value)}
				/>
				<button onClick={dispatchEvent}>发布消息</button>
			</div>
			<EventListerUI />
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById("app") as HTMLElement);
