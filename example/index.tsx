import * as ReactDOM from "react-dom"
import * as React from "react"
import  { useEffect } from "react"
import Event from '../src';
const App = () => {
    console.log(Event);
    const eventInstance = Event.getInstance();

    useEffect(() => {
        function getData(params) {
          console.log('发布内容：' + params);
        }
        // 添加事件监听
        eventInstance.addEventListener('load', getData);
    
        return () => {
          // 移除load事件
          eventInstance.removeEventListener('load', getData);
        };
      }, []);
    // 事件派发发布
      function dispatchEvent() {
        eventInstance.dispatchEvent('load', '触发load事件通知'+ new Date());
      }
	return (
		<div>
			<button onClick={dispatchEvent}>点击</button>
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById("app") as HTMLElement)
