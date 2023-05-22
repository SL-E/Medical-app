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
    placeholder="select one city"
    defaultValue={['Wellington']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="Wellington" label="Wellington">
      <Space>
        <span role="img" aria-label="Wellington">
         WEL
        </span>
        Wellington 
      </Space>
    </Option>
    <Option value="Auckland" label="Auckland">
      <Space>
        <span role="img" aria-label="Auckland">
         AKL
        </span>
        Auckland
      </Space>
    </Option>
    <Option value="Christchurch" label="Christchurch">
      <Space>
        <span role="img" aria-label="Christchurch">
         CHC
        </span>
        Christchurch
      </Space>
    </Option>
    <Option value="Hamilton" label="Hamilton">
      <Space>
        <span role="img" aria-label="Hamilton">
         HMT
        </span>
        Hamilton
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
    placeholder="select one hospital"
    defaultValue={['Alice Springs Hospital']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="Alice Springs Hospital" label="Alice Springs Hospital">
      <Space>
        <span role="img" aria-label="Alice Springs Hospital">
          Hospital
        </span>
        Alice Springs Hospital 
      </Space>
    </Option>
    <Option value="Sen Health Clinic" label="Sen Health Clinic">
      <Space>
        <span role="img" aria-label="Sen Health Clinic">
          Clinic
        </span>
        Sen Health Clinic 
      </Space>
    </Option>
    <Option value="Enrich Living Sercives" label="Enrich Living Sercives">
      <Space>
        <span role="img" aria-label="Enrich Living Sercives">
        Sercives
        </span>
        Enrich Living Sercives 
      </Space>
    </Option>
    <Option value="Kimberley Clinic" label="Kimberley Clinic">
      <Space>
        <span role="img" aria-label="Kimberley Clinic">
          Clinic
        </span>
        Kimberley Clinic 
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
    placeholder="select one category"
    defaultValue={['Department of Liver']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="Department of Liver" label="Department of Liver">
      <Space>
        <span role="img" aria-label="Department of Liver">
          Liver
        </span>
        Department of Liver 
      </Space>
    </Option>
    <Option value="Department of Orthopedics" label="Department of Orthopedics">
      <Space>
        <span role="img" aria-label="Department of Orthopedics">
        Orthopedics
        </span>
        Department of Orthopedics 
      </Space>
    </Option>
    <Option value="Department of Ophthalmology" label="Department of Ophthalmology">
      <Space>
        <span role="img" aria-label="Department of Ophthalmology">
        Ophthalmology
        </span>
        Department of Ophthalmology
      </Space>
    </Option>
    <Option value="Department of Stomatology" label="Department of Stomatology">
      <Space>
        <span role="img" aria-label="Department of Stomatology">
        Stomatology
        </span>
        Department of Stomatology 
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
        All doctors
        </div>

        <div className="doctors_xbox">
            <div className="doctors_doctors">

            <div className="bdoc_sdas"></div>
                <div className="doctors_xheard">

              
                    <img src={touone}></img>
                </div>

                <div className="doctors_xright">
                    <p className="title">Dr.John Lee</p>
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
        <p className="title">Dr.Tom White</p>
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
