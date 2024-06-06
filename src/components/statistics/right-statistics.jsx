import { useState } from 'react';
import { Button} from 'antd';

// 引入样式文件
import './right.less';
const COLORS = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae']
function CountTotal() {
    const [btnType, setBtnType] = useState('default')
    const [startList, setStartList] = useState([])
    function clickBtnHandle() {
        setBtnType('primary')
        let obj = {
            class_name: 'count_img count-animation',
            style: {
                color: COLORS[Math.floor(Math.random() * COLORS.length)]
            }
        }
        
        setStartList((n) => {
            return [...n,obj]
        })
        setTimeout(() => {
            setBtnType('default')
            if(startList.length) {
                startList.splice(0,1)
                setStartList((n) => {
                    return [...n]
                })
                
            }else {
                setStartList(() => [])
            }
            console.log(startList,'startList')
        },600)
    }
    return (
        <div className="count-container">
            <div className="title_box">
                <span>欢迎回来！</span>
                <Button type={btnType} size="middle" onClick={clickBtnHandle}>打卡</Button>
                <div className="start_list">
                    {startList.map((item,index) => {
                    return <span className={item.class_name} key={index} style={{...item.style}}>+1</span>
                })}
                </div>
            </div>
        </div>
    )
}
export default CountTotal