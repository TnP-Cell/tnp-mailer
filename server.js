const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

app.get("/", (req, res) => {
  res.send("API is working correctly.");
});

app.post(`/sendMail`, async (req, res) => {
  let check = await sender(req.body);
  if (check.status == -1) return res.status(400).json(check);
  return res.status(200).json(check);
});

const sender = async (data) => {
  let mailOptions = {
    from: process.env.USER,
    to: "tpo@iiitbh.ac.in, tnp_fic@iiitbh.ac.in",
    bcc: "prateek.ece.20035@iiitbh.ac.in, prem.cse.20011@iiitbh.ac.in, harshit.cse.20012@iiitbh.ac.in, harshit.ece.20069@iiitbh.ac.in, saurabh.mea.20102@iiitbh.ac.in, rajiv.mea.20096@iiitbh.ac.in",
    subject: "JAF Received || IIITBH",
    // text: "Test Mail",
    html: `<div
      style="
        text-align: center;
        border: 2px solid rgb(239, 200, 25);
        color: rgb(239, 200, 25);
        border-radius: 20px;
        margin: 2% 5%;
      "
    >
      <h1>Training and Placement Cell JAF Form</h1>
    </div>
    <div
      style="
        border: 2px solid rgb(239, 200, 25);
        border-radius: 20px;
        margin-top: 2%;
        padding: 3%;
        margin: 0% 5%;
      "
    >
      <h3 style="text-decoration: underline; text-align: center;">1. General Information</h3>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 0 20px 0 20px"><b>Name of Organization:</b> <span>${
          data.orgName
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Website:</b> <a href="${
          data.website
        }">${data.website}</a></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Location:</b> <span>${
          data.postalAddress
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Category:</b> <span>${
          data.category
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Industry Sector:</b> <span>${
          data.industrySector
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>About Company:</b> <span>${
          data.aboutOrg
        }</span></p>
      </div>
      <h3 style="text-decoration: underline; text-align: center;">2.a Contact Details: Head HR</h3>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b></b>Name of Head HR:</b> <span>${
          data.contact.headHR.name
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b></b>Phone:</b> <a href="tel:${
          data.contact.headHR.mobile
        }"
            >${data.contact.headHR.mobile}</a
          ></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Email:</b> <a href="mailto:${
          data.contact.headHR.email
        }"
            >${data.contact.headHR.email}</a
          ></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Landline:</b> <a href="tel:${
          data.contact.headHR.landline
        }"
            >${data.contact.headHR.landline}</a
          ></p>
      </div>
      <h3 style="text-decoration: underline; text-align: center;">
        2.b Contact Details: First Contact Person
      </h3>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Name of First Contact Person:</b> <span>${
          data.contact.firstContactPerson.name
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Phone:</b> <a href="tel:${
          data.contact.firstContactPerson.mobile
        }"
            >${data.contact.firstContactPerson.mobile}</a
          ></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Email:</b> <a href="mailto:${
          data.contact.firstContactPerson.email
        }"
            >${data.contact.firstContactPerson.email}</a
          ></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Landline:</b> <a href="tel:${
          data.contact.firstContactPerson.landline
        }"
            >${data.contact.firstContactPerson.landline}</a
          ></p>
      </div>
      <h3 style="text-decoration: underline; text-align: center;">3. Job Profile Details</h3>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Job Offer Type:</b> <span>${
          data.jobProfile.jobOffer
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Selection Type:</b> <span>${
          data.jobProfile.selectionProcess
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Eligible Batches:</b> <span>${showList(
          data.jobProfile.eligibleBatches
        )}</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Eligible Branches:</b> <span>${showList(
          data.branches.bTech
        )}</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Job Designation:</b> <span>${
          data.bTech.jobDesignation
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Place of Posting:</b> <span>${
          data.bTech.jobLocation
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Job Description / Summary:</b> <span>${
          data.bTech.jobDescription
        }</span></p>
      </div>
      <h3 style="text-decoration: underline; text-align: center;">4. Salary Details</h3>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Remuneration for Internship:</b> <span>${
          data.salary.renumeration
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Cost to Co. (CTC):</b> <span>${
          data.bTech.CTC
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Gross:</b> <span>${
          data.bTech.gross
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Take-Home:</b> <span>${
          data.bTech.takeHome
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Bonus/Perks/Incentives:</b> <span>${
          data.bTech.bonus
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Re-Location:</b> <span>${
          data.bTech.relocationBonus
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Bond or Contract (Specify details if any):</b> <span>${
          data.bTech.contract
        }</span></p>
      </div>
      <h3 style="text-decoration: underline; text-align: center;">5. Process</h3>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Mode of Selection:</b> <span>${showList(
          data.programs.bTech
        )}</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Number of Rounds:</b> <span>${
          data.selectionProcess.rounds
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Eligibility Criteria (CPI cutoff on a scale of 0-10):</b> <span>${
          data.selectionProcess.eligibility
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Preferred Period of Visit for Recruitment:</b> <span>${
          data.selectionProcess.sppov
        }</p></p>
      </div>
      <h3 style="text-decoration: underline; text-align: center;">6. Preferance & Requirements</h3>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Preferred Location:</b> <span>${
          data.selectionProcess.preferredLocation
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Number of offers (expected):</b> <span>${
          data.selectionProcess.offers
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Number of members visiting IIIT Bhagalpur campus:</b> <span>${
          data.logisticalDetails.members
        }</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>No. of rooms & Days required for the selection process:</b> <span>${
          data.logisticalDetails.rooms
        }, ${data.logisticalDetails.days}</span></p>
      </div>
      <div
        style="
          width: 80vw;
          margin: 0.1%;
          padding: 0;
        "
      >
        <p style="margin: 10px 20px 10px 20px"><b>Other requirements if any:</b> <span>${
          data.otherRequirements
        }</span></p>
      </div>
    </div>
    `,
  };

  await transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.log("Message sent: %s", info.messageId);
    })
    .catch((err) => {
      return { status: -1, error: err.message };
    });
  return { status: 0 };
};

const showList = (data) => {
  var x = "";
  for (var i = 0; i < data.length; i++) {
    if (i < data.length - 1) x += data[i] + ", ";
    else x += data[i];
  }
  return x;
};

app.listen(4000, () => {
  console.log("Server is running at port 4000...");
});
