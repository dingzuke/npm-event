import * as React from "react"
import { useEffect, useState } from "react"
// import Event from "../src"
import Event from "../dist/"
// import Event from "publish-subscribe-event";
const Demo = () => {
  const [reData, setReData] = useState(undefined)
  const eventInstance = Event.getInstance()
  // 接收数据函数
  function getData(params) {
    setReData(params)
  }
	useEffect(() => {
		// 添加事件监听
		eventInstance.addEvent("my-message", getData)

		return () => {
			// 移除事件
			eventInstance.removeEvent("my-message", getData)
		}
	}, [])
	return (
		<div>
			<h3>接收数据页</h3>
			<div>
        接收内容： {reData}
      </div>
      <button onClick={()=> eventInstance.removeEvent("my-message", getData)}>移除该事件</button> &nbsp;&nbsp;
      <button onClick={()=> eventInstance.removeEventAll()}>移除所有事件</button>
		</div>
	)
}
export default Demo;
