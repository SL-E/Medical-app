import React from "react";
import "./Doctors.css";
import touone from '../../images/touone.webp'
import { Select, Space } from 'antd';
import {

  SearchOutlined
} from "@ant-design/icons";
import { Button, Tooltip } from 'antd';
const { Option } = Select;
const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
export default class Doctors extends React.Component {
  render() {
    return (
      <div className="doctors_boxs">
      <div className="doctors_asasa">

      <div className="doctors_selcet">
        <Select
    mode="multiple"
    style={{
      width: '100%',
    }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <Space>
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </Space>
    </Option>
    <Option value="usa" label="USA">
      <Space>
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (美国)
      </Space>
    </Option>
    <Option value="japan" label="Japan">
      <Space>
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </Space>
    </Option>
    <Option value="korea" label="Korea">
      <Space>
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea (韩国)
      </Space>
    </Option>
  </Select>

        </div>
        <div className="doctors_selcet">
        <Select
    mode="multiple"
    style={{
      width: '100%',
    }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <Space>
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </Space>
    </Option>
    <Option value="usa" label="USA">
      <Space>
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (美国)
      </Space>
    </Option>
    <Option value="japan" label="Japan">
      <Space>
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </Space>
    </Option>
    <Option value="korea" label="Korea">
      <Space>
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea (韩国)
      </Space>
    </Option>
  </Select>

        </div> 
        <div className="doctors_selcet">
        <Select
    mode="multiple"
    style={{
      width: '100%',
    }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <Space>
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </Space>
    </Option>
    <Option value="usa" label="USA">
      <Space>
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (美国)
      </Space>
    </Option>
    <Option value="japan" label="Japan">
      <Space>
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </Space>
    </Option>
    <Option value="korea" label="Korea">
      <Space>
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea (韩国)
      </Space>
    </Option>
  </Select>

        </div>
        <div>
        <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
        </div>
      </div>
        <div className="doctors_title">
        Tend doctors
        </div>

        <div className="doctors_xbox">
            <div className="doctors_doctors">

            <div className="bdoc_sdas"></div>
                <div className="doctors_xheard">

              
                    <img src={touone}></img>
                </div>

                <div className="doctors_xright">
                    <p className="title">Dr.Graham Denyer</p>
                    <p className="titletw"> Clinice:Tend Kingsland</p>
                    <p className="titletr">English</p>
                    <p className="dsds">Profile</p>
                </div>
            </div>
            <div className="doctors_doctors">

<div className="bdoc_sdas"></div>
    <div className="doctors_xheard">

  
        <img src={touone}></img>
    </div>

    <div className="doctors_xright">
        <p className="title">Dr.Graham Denyer</p>
        <p className="titletw"> Clinice:Tend Kingsland</p>
        <p className="titletr">English</p>
        <p className="dsds">Profile</p>
    </div>
</div> <div className="doctors_doctors">

<div className="bdoc_sdas"></div>
    <div className="doctors_xheard">

  
        <img src={touone}></img>
    </div>

    <div className="doctors_xright">
        <p className="title">Dr.Graham Denyer</p>
        <p className="titletw"> Clinice:Tend Kingsland</p>
        <p className="titletr">English</p>
        <p className="dsds">Profile</p>
    </div>
</div> <div className="doctors_doctors">

<div className="bdoc_sdas"></div>
    <div className="doctors_xheard">

  
        <img src={touone}></img>
    </div>

    <div className="doctors_xright">
        <p className="title">Dr.Graham Denyer</p>
        <p className="titletw"> Clinice:Tend Kingsland</p>
        <p className="titletr">English</p>
        <p className="dsds">Profile</p>
    </div>
</div>
            <div className="doctors_doctors">

<div className="bdoc_sdas"></div>
    <div className="doctors_xheard">

  
        <img src={touone}></img>
    </div>

    <div className="doctors_xright">
        <p className="title">Dr.Graham Denyer</p>
        <p className="titletw"> Clinice:Tend Kingsland</p>
        <p className="titletr">English</p>
        <p className="dsds">Profile</p>
    </div>
</div>           <div className="doctors_doctors">

<div className="bdoc_sdas"></div>
    <div className="doctors_xheard">

  
        <img src={touone}></img>
    </div>

    <div className="doctors_xright">
        <p className="title">Dr.Graham Denyer</p>
        <p className="titletw"> Clinice:Tend Kingsland</p>
        <p className="titletr">English</p>
        <p className="dsds">Profile</p>
    </div>
</div>           <div className="doctors_doctors">

<div className="bdoc_sdas"></div>
    <div className="doctors_xheard">

  
        <img src={touone}></img>
    </div>

    <div className="doctors_xright">
        <p className="title">Dr.Graham Denyer</p>
        <p className="titletw"> Clinice:Tend Kingsland</p>
        <p className="titletr">English</p>
        <p className="dsds">Profile</p>
    </div>
</div>           <div className="doctors_doctors">

<div className="bdoc_sdas"></div>
    <div className="doctors_xheard">

  
        <img src={touone}></img>
    </div>

    <div className="doctors_xright">
        <p className="title">Dr.Graham Denyer</p>
        <p className="titletw"> Clinice:Tend Kingsland</p>
        <p className="titletr">English</p>
        <p className="dsds">Profile</p>
    </div>
</div>           <div className="doctors_doctors">

<div className="bdoc_sdas"></div>
    <div className="doctors_xheard">

  
        <img src={touone}></img>
    </div>

    <div className="doctors_xright">
        <p className="title">Dr.Graham Denyer</p>
        <p className="titletw"> Clinice:Tend Kingsland</p>
        <p className="titletr">English</p>
        <p className="dsds">Profile</p>
    </div>
</div>
        </div>
      </div>
    );
  }
}
