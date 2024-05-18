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

export default function ReportCard(props) {

  return (
    <MDBCard>
      
      <MDBCardBody>
        <MDBCardTitle style={{ fontWeight: 'bold', textAlign: 'center' }}>{props.title}</MDBCardTitle>
        <MDBCardText style={{ textAlign: 'center' }}>{props.content}</MDBCardText>
        <MDBBtn href={props.url}>Generate Report</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
