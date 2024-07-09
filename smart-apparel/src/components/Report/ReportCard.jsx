import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";


//Structure for Report Cards
export default function ReportCard(props) {

  return (
    <MDBCard>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage src={props.image} fluid alt="..." />
        <a>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{ fontWeight: 'bold', textAlign: 'center' }}>{props.title}</MDBCardTitle>
        <MDBCardText style={{ textAlign: 'center' }}>{props.content}</MDBCardText>
        <MDBBtn href={props.url}>Generate Report</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
