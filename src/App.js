import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Component/FunctionComponent';
import ClassComponent from './Component/ClassComponent';
import TagSanPham from './Component/TagSanPham';
import BaiTapLayout from './Component/BaiTapLayout/BaiTapLayout';
import DemoStyles from './Component/DemoStyles';
import Databinding from './Databinding/Databinding';
import EventBinding from './EventBinding/EventBinding';
import DemoState from './State/DemoState';
import BaiTapChonXe from './State/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DemoProps from './Props/DemoProps/DemoProps';
import BTProductList from './Props/BTDanhSachSP/BTProductList';
import Shop from './ReduxExcersice/CartRedux/Shop';
import BTGameXucXac from './ReduxExcersice/BTGameXucSac/BTGameXucXac';
import LifeCycle from './LifeCycle/LifeCycle';

function App() {
  return (
    <div className="App">
        {/* <BaiTapLayout /> */}
        {/* <DemoStyles />
        <p className="pTextRed">thẻ p trong app component</p>
        <p className="pTextGreen">thẻ p trong app component</p> */}
        {/* <Databinding /> */}
        {/* <EventBinding /> */}
        {/* <DemoState /> */}
        {/* <BaiTapChonXe /> */}
        {/* <RenderWithMap /> */}
        {/* <DemoProps/> */}
        {/* <BTProductList></BTProductList> */}
        {/* <Shop/> */}
        {/* <BTGameXucXac/> */}
        <LifeCycle/>
    </div>
  );


}

export default App;
