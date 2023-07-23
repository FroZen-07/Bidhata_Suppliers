import { useState } from "react";
import CollapsibleExample from "../components/Navbar";
// import { GoogleSpreadsheet } from 'google-spreadsheet'


//   //Import environmental varialbles
//   const {
//     REACT_APP_PRIVATE_KEY,
//     REACT_APP_CLIENT_EMAIL,
//     REACT_APP_SPREADSHEET_ID,
//     REACT_APP_SHEET_ID
//   } = process.env

//   //creating new object of google spreadsheet
// const doc = new GoogleSpreadsheet(REACT_APP_SPREADSHEET_ID);

//Function append spreadsheet to add row into google sheet
// const appendSpreadsheet = async (row) => {
//   try {
//     const credentials = await doc.auth.getServiceAccountCredentials({
//         client_email: REACT_APP_CLIENT_EMAIL,
//         private_key: REACT_APP_PRIVATE_KEY,
//       });
//     await doc.loadInfo();
//     const sheet = doc.sheetsById[REACT_APP_SHEET_ID];
//     const result = await sheet.addRow(row);
//     return result;
//   } catch (e) {
//     console.error("Error: ", e);
//   }
// };
  //end

  const FormPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name, email, message);
    };
  
    return (
      <div>
        <CollapsibleExample/>
        <h1>Get Quotation</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default FormPage;