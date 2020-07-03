import * as React from "react"
import { useEffect, useState } from "react"
// import Event from "../src"
// import Event from "../dist/"
import Event from "publish-subscribe-event";
const Demo = () => {
  const [reData, setReData] = useState(undefined)
	const eventInstance = Event.getInstance()
	useEffect(() => {
    // 接收数据函数
		function getData(params) {
      setReData(params)
		}
		// 添加事件监听
		eventInstance.addEventListener("my-message", getData)

		return () => {
			// 移除事件
			eventInstance.removeEventListener("my-message", getData)
		}
	}, [])
	return (
		<div>
			<h3>接收数据页</h3>
			<div>
        接收内容： {reData}
      </div>
		</div>
	)
}
export default Demo;
