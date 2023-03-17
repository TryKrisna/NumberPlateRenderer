import { useEffect, useState } from 'react'
import { getData, verifySignature } from '@govtechsg/open-attestation'
export default function BACIICertificate(props) {
  const data = getData(props.wrappedDocument);
  const imageRatio = 1440 / 2037;
  const [imageSize, setImageSize] = useState([0, 0])
  const url = `/api/template/render?wrappedDocument=${encodeURIComponent(JSON.stringify(props.wrappedDocument))}`
   useEffect(() => {
    console.log("Here is the raw dataa document", data);
    const observer = new ResizeObserver(() => {
      const width = clamp(document.body.clientWidth, 0, 720);
      setImageSize([width, width / (imageRatio)])
    })
    observer.observe(document.body);
    return () => observer.disconnect()
  }, [])

  return (<>
    <div className='renderer'>
      {/* fixed-canvas-wrapper  */}
      {/* <h1>Digital Asset Transfer</h1>
      <p> <span>Owner : </span> <span>{data.recipient?.name}</span></p>
      <p> <span>Address : </span> <span>{data.recipient?.address}</span></p>
      <hr></hr>
      <h3>Asset</h3>
      <p> <span>Type : </span> <span>{data.asset?.type}</span></p>
      <p> <span>Model : </span> <span>{data.asset?.model}</span></p>
      <p> <span>IssuDate : </span> <span>{data.asset?.issuDate}</span></p>
      <h3>Image</h3> */}
      {/* <h3 style={{paddingBottom:"20px"}}>Asset image</h3>
      <img src={data?.asset?.image} width={250} height={250}></img> */}

{/*  */}
{/* <table >
  <tr>
    <th>Owner</th>
    <th> Address</th>
    <th>Type</th>
    <th>Model</th>
    <th>IssuDate</th>
  </tr>
  <tr>
    <td> {data.recipient?.name} </td>
    <td>{data.recipient?.address}</td>
    <td>{data.asset?.type}</td>
    <td>{data.asset?.model}</td>
    <td>{data.asset?.issuDate}</td>
  </tr>

</table> */}
<div style={{ display: 'flex', flexDirection:'column',justifyContent: 'center', margin:"auto",width:"80%" }}>


    <div className="profile-image-container" style={{textAlign:"center"}}>
      <img src={data?.owner?.image} alt="Profile" className="profile-image" />
    </div>

      <table>
        <thead>
          <tr>
            <th colSpan={2} style={{color:"white"}}>ព័ត៌មានយានជំនិះ</th>
            {/* <th>Column 2</th> */}
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>ម្ចាស់កម្មសិទ្ធ</td>
            <td>{data?.owner?.name}</td>
          </tr>
          <tr>
            <td>អត្តសញ្ញាណប័ណ្ណលេខ</td>
            <td>{data?.owner?.nationalIdCard}</td>
          </tr>
          <tr>
            <td>អាសយដ្ឋាន</td>
            <td>{data?.owner?.address}</td>
          </tr>
          <tr>
            <td>ផ្លាកលេខ</td>
            <td>{data?.asset?.NumberPlate}</td>
          </tr>
          <tr>
            <td>ម៉ាក</td>
            <td>{data?.asset?.brand}</td>
          </tr>
          <tr>
            <td>ប្រភេទ</td>
            <td>{data?.asset?.type }</td>
          </tr>
          <tr>
            <td>ពណ៌</td>
            <td>{data?.asset?.Color }</td>
          </tr>
          <tr>
            <td>លេខម៉ាសុីន</td>
            <td>{data?.asset?.engineNo }</td>
          </tr>
          <tr>
            <td>លេខតួ</td>
            <td>{data?.asset?.frameNo }</td>
          </tr>
          <tr>
            <td>កម្លាំងម៉ាសុីន</td>
            <td>{data?.asset?.hPower }</td>
          </tr>
          <tr>
            <td>ទំហំសុីឡាំង</td>
            <td>{data?.asset?.CYLINDERSDISP }</td>
          </tr>
          <tr>
            <td>ឆ្នាំផលិត</td>
            <td>{data?.asset?.yearOfMFG} </td>
          </tr>
          <tr>
            <td>ថ្ងៃចេញបណ្ណដំបូង</td>
            <td>NIL</td>
          </tr>
          <tr>
            <td style={{textAlign:"center"}} colSpan={2}>រូបភាព</td>
          </tr>
          <tr>
            <td style={{height:"auto",width:"auto"}} colSpan={2}>
              <img style={{width:"100%",height:"100%"}} src={data?.asset.image}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


    </div>
  </>)


}


function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
};