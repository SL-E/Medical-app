import React from "react";
import "./book.css";
import {useState} from "react";
import touxing from "../../images/touxing.webp";
import {Select, Space,Button, Modal } from "antd";
const {Option} = Select;

export default function book() {
  const [data, setData] = useState([
    {
      id: 456545345232,
      hospital: "纽约市第一人民医院", //所属医院
      doctors: "约翰", //医生名字
      detail: "神经内科，专治一切疑难杂症2",
      bookriqi: [
        {
          date: 1, //日期 精确到日
          time: [
            {
              day: 1,
              book: [
                {
                  shangwu: "上午",
                  haoma: [
                    {
                      paixu: 1, //排序
                      status: 1, //预约的状态1可以 0不可以，2已经预定
                    },
                    {
                      paixu: 2, //排序
                      status: 0, //预约的状态1可以 0不可以，2已经预定
                    },
                    {
                      paixu: 3, //排序
                      status: 3, //预约的状态1可以 0不可以，2已经预定
                    },
                    {
                      paixu: 4, //排序
                      status: 3, //预约的状态1可以 0不可以，2已经预定
                    }, {
                      paixu: 5, //排序
                      status: 3, //预约的状态1可以 0不可以，2已经预定
                    }, {
                      paixu: 6, //排序
                      status: 3, //预约的状态1可以 0不可以，2已经预定
                    }, {
                      paixu: 7, //排序
                      status: 3, //预约的状态1可以 0不可以，2已经预定
                    }, {
                      paixu: 8, //排序
                      status: 3, //预约的状态1可以 0不可以，2已经预定
                    }, {
                      paixu: 9, //排序
                      status: 3, //预约的状态1可以 0不可以，2已经预定
                    }, {
                      paixu: 10, //排序
                      status: 3, //预约的状态1可以 0不可以，2已经预定
                    }, {
                      paixu: 11, //排序
                      status: 3, //预约的状态1可以 0不可以，2已经预定
                    }, {
                      paixu: 12, //排序
                      status: 3, //预约的状态1可以 0不可以，2已经预定
                    }, {
                      paixu: 13, //排序
                      status: 3, //预约的状态1可以 0不可以，2已经预定
                    }, {
                      paixu: 14, //排序
                      status: 3, //预约的状态1可以 0不可以，2已经预定
                    },
                    {
                      paixu: 15, //排序
                      status: 0, //预约的状态1可以 0不可以，2已经预定
                    },
                    {
                      paixu: 16, //排序
                      status: 0, //预约的状态1可以 0不可以，2已经预定
                    },
                    {
                      paixu: 17, //排序
                      status: 1, //预约的状态1可以 0不可以，2已经预定
                    },
                  ],
                },
                {
                  shangwu: "下午",
                  haoma: [
                    {
                      paixu: 1, //排序
                      status: 1, //预约的状态1可以 0不可以，2已经预定
                    },
                  ],
                },
              ],
            },

            {
              day: 2,
              book: [
                {
                  shangwu: "上午",
                  haoma: [
                    {
                      paixu: 1, //排序
                      status: 1, //预约的状态1可以 0不可以，2已经预定
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          date: 2, //日期 精确到日
          time: [
            {
              day: "上午",
              book: [
                {
                  weizhi: 1,
                  status: 1, //预约的状态1可以 0不可以，2已经预定
                },
                {
                  weizhi: 2,
                  status: 1, //预约的状态1可以 0不可以，2已经预定
                },
              ],
            },
            {
              day: "下午",
              book: [
                {
                  weizhi: 1,
                  status: 1, //预约的状态1可以 0不可以，2已经预定
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3346542313,
      hospital: "纽约市第一人民医院", //所属医院
      doctors: "汤姆", //医生名字
      bookriqi: [
        {
          date: 1, //日期 精确到日
          time: [
            {
              day: "上午",
              book: [
                {
                  status: 1, //预约的状态1可以 0不可以，2已经预定
                },
              ],
            },

            {
              day: "下午",
              book: [
                {
                  status: 1, //预约的状态1可以 0不可以，2已经预定
                },
              ],
            },
          ],
        },

        {
          date: 2, //日期 精确到日
          time: [
            {
              day: "上午",
              book: [
                {
                  weizhi: 1,
                  status: 1, //预约的状态1可以 0不可以，2已经预定
                },
                {
                  weizhi: 2,
                  status: 1, //预约的状态1可以 0不可以，2已经预定
                },
              ],
            },
            {
              day: "下午",
              book: [
                {
                  weizhi: 1,
                  status: 1, //预约的状态1可以 0不可以，2已经预定
                },
              ],
            },
          ],
        },
      ],
    },

    {
      hospital: "华盛顿三甲医院", //所属医院
      doctors: "约翰", //医生名字
      heard: "https://t10.baidu.com/it/u=988188945,954460719&fm=58",
      id: 2323232,
      bookriqi: [
        {
          date: 1, //日期 精确到日
          time: [
            {
              day: "上午",
              book: [
                {
                  status: 1, //预约的状态1可以 0不可以，2已经预定
                },
              ],
            },

            {
              day: "下午",
              book: [
                {
                  status: 1, //预约的状态1可以 0不可以，2已经预定
                },
              ],
            },
          ],
        },

        {
          date: 2, //日期 精确到月
          time: [
            {
              day: 1,
              book: [
                {
                  weizhi: 1,
                  status: 1, //预约的状态1可以 0不可以，2已经预定
                },
                {
                  weizhi: 2,
                  status: 1, //预约的状态1可以 0不可以，2已经预定
                },
              ],
            },
            {
              day: "下午",
              book: [
                {
                  weizhi: 1,
                  status: 1, //预约的状态1可以 0不可以，2已经预定
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  const [options, setOptions] = useState([
    {
      value: "纽约市第一人民医院",
      label: "纽约市第一人民医院",
    },
    {
      value: "华盛顿三甲医院",
      label: "华盛顿三甲医院",
    },
    {
      value: "白宫中医诊所",
      label: "白宫中医诊所",
    },
    // {
    //   value: 'disabled',
    //   label: 'Disabled',
    //   disabled: true,
    // },
  ]);

  let [optiont, setOptiont] = useState([
    // {
    //   value: 'disabled',
    //   label: 'Disabled',
    //   disabled: true,
    // },
  ]);
  let [optionf, setOptionf] = useState([
    // {
    //   value: 'disabled',
    //   label: 'Disabled',
    //   disabled: true,
    // },
  ]);
  let [optione, setOptione] = useState([
    // {
    //   value: 'disabled',
    //   label: 'Disabled',
    //   disabled: true,
    // },
  ]);
  // 这是选择医院后的医生资料
  let [doutr, setDoutr] = useState([]);
  // 这是选择医院后的医生日期后的数据
  let [doutrri, setDoutrri] = useState([]);
  // 这是选择月份后的数据
  let [doutrda, setDoutrda] = useState([]);
  // 上午的数据
  let [shangwu, setShangwu] = useState({haoma:[]});
  // 下午的数据
  let [xiawu, setXiawu] = useState({haoma:[]});
  // 筛选号
  const handleChangec = (value) => {
    doutrri.time.forEach((item) => {
      if (item.day == value) {
        //  这是最后的数据
        setDoutrda((doutrda = item));
        console.log(doutrda);
      }
    });
    doutrda.book.forEach((item)=>{
      if(item.shangwu=='上午'){
        setShangwu(shangwu=item)
        console.log(shangwu);
      }
      if(item.shangwu=='下午'){
        setXiawu(xiawu=item)
        console.log(xiawu);
      }
    })

  };
  // 筛选月份
  const handleChangeM = (value) => {
    console.log(value);
    doutr.bookriqi.forEach((item) => {
      if (item.date == value) {
        setDoutrri((doutrri = item));
      }
    });

    let num = [];
    doutrri.time.forEach((item) => {
      let arr = {};
      arr.value = item.day;
      arr.label = item.day + "号";
      num.push(arr);
    });
    setOptione((optione = num));
  };

  // 筛选医生
  const handleChanged = (value) => {
    data.forEach((item) => {
      if (item.id == value) {
        setDoutr((doutr = item));
        console.log(doutr);
      }
    });
    let num = [];
    // 获取时间
    doutr.bookriqi.forEach((item) => {
      let arr = {};
      arr.value = item.date;
      arr.label = item.date + "月";
      num.push(arr);
    });
    setOptionf((optionf = num));
  };

  const handleOk = () => {

    if(onc==2){
      setIsModalOpen(false);
      let arr={...shangwu}
      arr.haoma.forEach((item,index)=>{
  
    if(item.paixu==tanz.paixu){
   return arr.haoma[index].status=3
  
  
    }
  
  })
  
    }

    if(onc==1){
      setIsModalOpen(false);
      let arr={...xiawu}
      arr.haoma.forEach((item,index)=>{
  
    if(item.paixu==tanz.paixu){
   return arr.haoma[index].status=3
  
  
    }
  
  })
  
    }

    // console.log(1111);
  };



  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange = (value) => {
 
    // 筛选医院
    let num = [];
    data.forEach((item) => {
      if (item.hospital == value) {
        let arr = {};
        arr.value = item.id;
        arr.label = item.doctors;
        num.push(arr);
      }
      setOptiont((optiont = num));
    });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
   
  };
 let [onc, setOnc] = useState(0);
  let [tanz, setTanz] = useState({});
  const tan=(value,a)=>{
    setOnc(onc=a)
    console.log(a);
    setIsModalOpen(true);
    setTanz(tanz=value)
    
 
  }
  return (
    <div>
      <div className="main w">
        <div className="nav">
          <Select
            placeholder="Choose a hospital"
            style={{
              width: 200,
            }}
            onChange={handleChange}
            options={options}
          />
          <Select
            placeholder="Choose a Doctor"
            style={{
              width: 200,
            }}
            onChange={handleChanged}
            options={optiont}
          />
          <Select
            placeholder="Choose a Months"
            style={{
              width: 200,
            }}
            onChange={handleChangeM}
            options={optionf}
          />
          <Select
            placeholder="Choose a day"
            style={{
              width: 200,
            }}
            onChange={handleChangec}
            options={optione}
          />
        </div>
        <div className="banxin">
          {/* <div className="biaoti">
            <div className="wen">
              <div className="xiaoren"></div>
              <div className="zi">
                <h4>Wcsa daihdd hdabdui hdnaoih?</h4>
                <p>ahd uiahduh hadu iahgd di ahidai hdihawd ihisafs fgsaf</p>
              </div>
            </div>
            <div className="money">
              <div className="dada">
                <h4>dgdad</h4>
                <p>da aod da wdih daio</p>
              </div>
            </div>
          </div> */}
          <div className="lianxi">
            <div className="lafao">



    {doutr.length!==0? <div>
      <div className="user_fs">
                <div className="ueras_das">
                  <img src={touxing}></img>
                </div>
                <div className="ueras_xdas">
                  <p>{doutr.doctors}</p>
                  <p> 你好！</p>
                </div>
              </div>

              <p className="detail">detail:{doutr.detail}</p>

              <p className="details">detail:{doutr.detail}</p>

 
</div>:<p>Please select the hospital, doctor and date for your appointment!</p>}

            
            </div>
            <div className="paixu">
              <div className="li">
                <ul>
                  <li>Morning </li>
                  <li></li>
                  <li> </li>
                  <li className="adflkm"> </li>
                  <li> Afternoon</li>
                  <li> </li>
                </ul>
              </div>
              <div className="shuzi">
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                  <li>10</li>
               
                </ul>
              </div> 


       
      <Modal title="have an appointment with a doctor" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p className="dsdshiacv">Are you sure to make an appointment?</p>
      </Modal>


              <div className="dahezi">
              {shangwu.haoma.map(item => {
                 if(item.status==0){
                
                 return <li className="boxxx" key={item.paixu}>
             
               
                 </li>
                }

                if(item.status==1){
             
                  return <li onClick={()=>tan(item,2)} className="boxxx boxxx1" key={item.paixu}>
                 
               
                 </li>
                }
                if(item.status==3){
              
                  return <li className="boxxx boxxx2" key={item.paixu}>
                 
                 On reservation
                 </li>
                }
              }
     
      )}
               
{/*                 
                <div className="boxxx"></div>
                <div className="boxxx"></div>
                <div className="boxxx"></div>
                <div className="boxxx boxxx1"></div>
                <div className="boxxx boxxx1"></div>
                <div className="boxxx boxxx1"></div>
                <div className="boxxx boxxx1"></div>
                <div className="boxxx boxxx1"></div>
                <div className="boxxx boxxx1"></div>
                <div className="boxxx"></div>
                <div className="boxxx boxxx1"></div>
                <div className="boxxx boxxx1"></div>
                <div className="boxxx boxxx1"></div>
                <div className="boxxx boxxx1"></div>
                <div className="boxxx boxxx1"></div>
                <div className="boxxx"></div>
                <div className="boxxx"></div>
                <div className="boxxx"></div>
                <div className="boxxx"></div>
                <div className="boxxx"></div>
                <div className="boxxx"></div>
                <div className="boxxx boxxx2"></div>
                <div className="boxxx boxxx2"></div>
                <div className="boxxx boxxx2"></div>
                <div className="boxxx boxxx2"></div>
                <div className="boxxx boxxx2"></div>
                <div className="boxxx boxxx2"></div>
                <div className="boxxx"></div>
                <div className="boxxx"></div>
                <div className="boxxx"></div>
           */}
              </div>
          
              <div className="dazi">
              {xiawu.haoma.map(item => {
                 if(item.status==0){
                  console.log(1111);
                 return <li className="boxxx" key={item.paixu}>
             
               
                 </li>
                }

                if(item.status==1){
                
                  return <li onClick={()=>tan(item,1)} className="boxxx boxxx1" key={item.paixu}>
                 
               
                 </li>
                }
                if(item.status==3){
              
                  return <li className="boxxx boxxx2" key={item.paixu}>
                 
                 On reservation
                 </li>
                }
              }
     
      )}
                
              </div>
              <div className="xian"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
