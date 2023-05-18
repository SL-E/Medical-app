import React from "react";
import "./drug.css";
import touxing from "../../images/touxing.webp";
import {Tabs, Input} from "antd";

import drug from "../../images/drug.png";
import {
  LeftOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";

export default class drugs extends React.Component {
  render() {
    return (
      <div className="drug_boxs">
        <div className="drug_left">
          <img src={drug}></img>
        </div>

        <div className="drug_right">
          <div className="drug_fenye">
            <span>
              <DoubleLeftOutlined />
              Frist
            </span>
            &nbsp;&nbsp;&nbsp;{" "}
            <span>
              <LeftOutlined />
              Previous
            </span>
            &nbsp; &nbsp;&nbsp;&nbsp;
            <span>Page 1 of 4&nbsp; &nbsp;&nbsp;&nbsp;</span>
            <span>
              Next
              <DoubleRightOutlined />
            </span>
            &nbsp;&nbsp;&nbsp;
            <span>
              Last
              <DoubleRightOutlined />
            </span>
          </div>
          <div className="tdrug_ab">
            <div className="drug_one">Protein Name</div>
            <div className="drue_tow">Gene Name</div>
            <div className="drug_one">Poymoephisrn
                Rules
            </div>
            <div className="drue_tow">Drug
            Ligand
             Name</div>
            <div className="drug_one">Drug
            Classification</div>
            <div className="drue_tow">Disease Name</div>
            <div className="drug_one">Links to related entries</div>
          </div>



           <div className="tdrug_ab tdrug_abt">
           
           
           
           
           
            <div className="drug_one">Protein Name</div>
            <div className="drue_tow">Gene Name</div>
            <div className="drug_one">Poymoephisrn
                Rules
            </div>
            <div className="drue_tow">Drug
            Ligand
             Name</div>
            <div className="drug_one">Drug
            Classification</div>
            <div className="drue_tow">Disease Name</div>
            <div className="drug_one">Links to related entries</div>
          </div>




          <div className="tdrug_ab tdrug_abt drug_trwe">
            <div className="drug_one">Protein Name</div>
            <div className="drue_tow">Gene Name</div>
            <div className="drug_one">Poymoephisrn
                Rules
            </div>
            <div className="drue_tow">Drug
            Ligand
             Name</div>
            <div className="drug_one">Drug
            Classification</div>
            <div className="drue_tow">Disease Name</div>
            <div className="drug_one">Links to related entries</div>
          </div> 
          
          
          
          
          
          
          
          <div className="tdrug_ab tdrug_abt">
            <div className="drug_one">Protein Name</div>
            <div className="drue_tow">Gene Name</div>
            <div className="drug_one">Poymoephisrn
                Rules
            </div>
            <div className="drue_tow">Drug
            Ligand
             Name</div>
            <div className="drug_one">Drug
            Classification</div>
            <div className="drue_tow">Disease Name</div>
            <div className="drug_one">Links to related entries</div>
          </div> 
          
          <div className="tdrug_ab tdrug_abt drug_trwe">
            <div className="drug_one">Protein Name</div>
            <div className="drue_tow">Gene Name</div>
            <div className="drug_one">Poymoephisrn
                Rules
            </div>
            <div className="drue_tow">Drug
            Ligand
             Name</div>
            <div className="drug_one">Drug
            Classification</div>
            <div className="drue_tow">Disease Name</div>
            <div className="drug_one">Links to related entries</div>
          </div> <div className="tdrug_ab tdrug_abt">
            <div className="drug_one">Protein Name</div>
            <div className="drue_tow">Gene Name</div>
            <div className="drug_one">Poymoephisrn
                Rules
            </div>
            <div className="drue_tow">Drug
            Ligand
             Name</div>
            <div className="drug_one">Drug
            Classification</div>
            <div className="drue_tow">Disease Name</div>
            <div className="drug_one">Links to related entries</div>
          </div> <div className="tdrug_ab tdrug_abt">
            <div className="drug_one">Protein Name</div>
            <div className="drue_tow">Gene Name</div>
            <div className="drug_one">Poymoephisrn
                Rules
            </div>
            <div className="drue_tow">Drug
            Ligand
             Name</div>
            <div className="drug_one">Drug
            Classification</div>
            <div className="drue_tow">Disease Name</div>
            <div className="drug_one">Links to related entries</div>
          </div>
        </div>
      </div>
    );
  }
}
