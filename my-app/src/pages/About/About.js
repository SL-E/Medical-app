import React from "react";
import "./About.css";
// import touone from "../../images/touone.webp";
import {

  DesktopOutlined
} from "@ant-design/icons";

import getapp from "../../images/getapp.jpg"

import { Button, Space, Select, App } from 'antd';

const { Option } = Select;

export default class About extends React.Component {
  render() {
    return (
      
      <div className="about_boxsB">
       <div className="about_boxs">
        <div className="lerel_box">Picture 1</div>
        <div className="lerel_box">Picture 2</div>
        <div className="lerel_box">Picture 3</div>
        <div className="lerel_box">Picture 4</div>
        <div className="lerel_box">Picture 5</div>
       
       </div>
       <div className="canter_nbox">

        <div className="about_select">
        <Select
    mode="multiple"
    style={{
      width: '100%',
    }}
    placeholder="select one country"
    defaultValue={['New Zealand']}
   
    optionLabelProp="label"
  >
    <Option value="New Zealand" label="New Zealand">
      <Space>
        <span role="img" aria-label="New Zealand">
          NZ
        </span>
        New Zealand 
      </Space>
    </Option>
    <Option value="Australia" label="Australia">
      <Space>
        <span role="img" aria-label="Australia">
          Aus
        </span>
        Australia 
      </Space>
    </Option>
    <Option value="japan" label="Japan">
      <Space>
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan 
      </Space>
    </Option>
    <Option value="korea" label="Korea">
      <Space>
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea 
      </Space>
    </Option>
  </Select>
        </div>
        <div className="about_select">
        <Select
    mode="multiple"
    style={{
      width: '100%',
    }}
    placeholder="select one country"
    defaultValue={['New Zealand']}
   
    optionLabelProp="label"
  >
    <Option value="New Zealand" label="New Zealand">
      <Space>
        <span role="img" aria-label="New Zealand">
          NZ
        </span>
        New Zealand 
      </Space>
    </Option>
    <Option value="Australia" label="Australia">
      <Space>
        <span role="img" aria-label="Australia">
          Aus
        </span>
        Australia 
      </Space>
    </Option>
    <Option value="japan" label="Japan">
      <Space>
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan 
      </Space>
    </Option>
    <Option value="korea" label="Korea">
      <Space>
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea 
      </Space>
    </Option>
  </Select>
        </div><div className="about_select">
        <Select
    mode="multiple"
    style={{
      width: '100%',
    }}
    placeholder="select one country"
    defaultValue={['New Zealand']}
   
    optionLabelProp="label"
  >
    <Option value="New Zealand" label="New Zealand">
      <Space>
        <span role="img" aria-label="New Zealand">
          NZ
        </span>
        New Zealand 
      </Space>
    </Option>
    <Option value="Australia" label="Australia">
      <Space>
        <span role="img" aria-label="Australia">
          Aus
        </span>
        Australia 
      </Space>
    </Option>
    <Option value="japan" label="Japan">
      <Space>
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan 
      </Space>
    </Option>
    <Option value="korea" label="Korea">
      <Space>
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea 
      </Space>
    </Option>
  </Select>
        </div>
        <Button type="primary">search</Button>
       </div>

       <div className="about_zhu">

        <div className="about_xiang">
        <span className="about_biao">
        <DesktopOutlined />
        </span>

        <div className="about_title">Make it easy!</div>
        <div className="about_titleone">Book in mintes!</div>
        <div className="about_titleone">No waiting, no quering!</div>
        <div className="about_titleone">NZ cheapest onling doctor service!</div>
        <div className="about_titleone">Search for the nearest hospital!</div>
        </div>
        <div className="about_xiang">
        <span className="about_biao">
        <DesktopOutlined />
        </span>

        <div className="about_title">Best online service!</div>
        <div className="about_titleone">Book in mintes</div>
        <div className="about_titleone">No waiting, no quering</div>
        <div className="about_titleone">NZ cheapest onling doctor service</div>
        <div className="about_titleone">Book waiting, no queuing</div>
        </div>
        <div className="about_xiang">
        <span className="about_biao">
        <DesktopOutlined />
        </span>

        <div className="about_title">Comprehensive doctors!</div>
        <div className="about_titleone">Book in mintes</div>
        <div className="about_titleone">No waiting, no quering</div>
        <div className="about_titleone">NZ cheapest onling doctor service</div>
        <div className="about_titleone">Book waiting, no queuing</div>
        </div>


       </div>
       <div className="about_ipone-app">
        <div className="about_iponeImg">
            <img src={getapp}></img>
        </div>

        <div className="about_book"><p className="aboutBook_title">
            4 steps: Easy to make a book</p>
            
            <p className="about_asa"> 1. Click "Get the app".</p>
            <p className="about_asa"> 2. Download the app to the phone.</p>
            <p className="about_asa"> 3. Open the app and log in.</p>
            <p className="about_asa"> 4. Make a book directly.</p>
            </div>

       </div>
      </div>
    );
  }
}
