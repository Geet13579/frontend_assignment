import React from 'react'
import './style.css'

function App() {
  return (
    <div className='MainContainer'>
      <div className='divContainer'>
        <div className='div1'>
          <div className='divFlex1'>
            <hr style={{ backgroundColor: "#C8C8C8" }} />
          </div>
          <div className='divFlex2'>
            <h1 className='headerStyle'>YAY! It’s BOGO</h1>
          </div>
          <div className='divFlex3'>
            <hr style={{ backgroundColor: "#C8C8C8" }} />


          </div>




        </div>
        <div className='div2'>
          <div className='div2Flex1'>
            <div><input type='radio' checked style={{ width: "20px", height: "20px",accentColor: 'indianred'  }}></input></div>
            <div style={{ marginLeft: "10px" }}>
              <h1 className='unitStyle'>1 Unit
                <span className='spanStyle' >10% off

                </span>
                <br />
                <span className='secondSpan' >Standard Price</span>

              </h1>

            </div>


          </div>
          <div className='div2Flex2'>

            <div style={{ marginLeft: "10px" }}>
              <h1 className='unitStyle'>$10.00 USD
                <br />
                <span className='thirdSpan' ><s>$24.00 USD</s></span>

              </h1>

            </div>
          </div>


        </div>
        <div className='mainBox'>
          <div className='boxStyle'></div>
          {/* <div style={{ display: "flex", justifyContent: "flex-end", width: "90%" }}> */}
            <div className='box1Style'>MOST POPULAR</div>
          {/* </div> */}
        </div >
        <div className='div3'>


          

          <div style={{display:"flex", justifyContent:"space-between",marginTop:"42px"}}>
          <div className='div2Flex1'>
            <div><input type='radio'  style={{ width: "20px", height: "20px",accentColor: 'indianred'  }}></input></div>
            <div style={{ marginLeft: "10px" }}>
              <h1 className='unitStyle'>2 Unit
                <span className='spanStyle'>20% off

                </span>
                <br />
                <span className='secondSpan'>Standard Price</span>

              </h1>

            </div>


          </div>
          <div className='div2Flex2'>

            <div style={{ marginLeft: "10px" }}>
              <h1 className='unitStyle'>$18.00 USD
                <br />
                <span className='thirdSpan'><s>$20.00 USD</s></span>

              </h1>

            </div>
          </div>
          </div>

<div className='chnageDiv'>
<div className='changeDiv1'>
  <br/>
  <br/>

<h1 className='textFont'>#1</h1>

<h1 className='textFont'>#1</h1>

</div>
<div className='changeDiv2'>
  <div className='chnageDiv21'>
    <h1 className='textFont'>Size</h1>
    <select className='selcetDiv'><option >S </option> </select>
    <br/>
    <select className='selcetDiv'><option >S </option> </select>


  </div>
  <div className='chnageDiv22'>
  <h1 className='textFont'>Color</h1>
  <select className='selcetDiv'><option >Black </option> </select>
  <br/>

  <select className='selcetDiv'><option >Colour </option> </select>





  </div>


</div>
</div>


       




        </div>
        <div className='div4'>
        <div className='div2Flex1'>
            <div><input type='radio' selected style={{ width: "20px", height: "20px",accentColor: 'indianred' }}></input></div>
            <div style={{ marginLeft: "10px", marginTop:"10px"}}>
            <span className='spanStyle' style={{marginLeft:"47px"}}>30% off

</span>
              <h1 className='unitStyle'>3 Unit
               
                <br />
                <span className='secondSpan'>Standard Price</span>

              </h1>

            </div>


          </div>
          <div className='div2Flex2'>

            <div style={{ marginLeft: "10px" }}>
              <h1 className='unitStyle'>$24.00 USD
                <br />
                <span className='thirdSpan'><s>$24.00 USD</s></span>

              </h1>

            </div>
          </div>

        </div>
        <div className='div5'>
        <div className='div2Flex1' style={{justifyContent:"flex-start"}}>
            <div >
              <h1 className='freestyle' >Free Delivery
             
              </h1>

            </div>


          </div>
          <div className='div2Flex2' style={{justifyContent:"flex-end"}}>

            <div style={{ marginLeft: "10px" }}>
              <h1 className='unitStyle'>Total:$10.00 USD
              
              </h1>

            </div>
          </div>
        </div>
        <div className='div6'>
          <button className='buttonStyle'>Add to Cart</button>
        </div>







      </div>




    </div>
  )
}

export default App