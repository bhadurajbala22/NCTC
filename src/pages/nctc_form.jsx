// import React from "react";
// import "../styles/TransportForm.css";

// const TransportForm = () => {
//   return (
//     <div className="transport-form">
//       <header>
//         <h1>|| Shree Guru Jambheshwaraya Namah ||</h1>
//         <h2>NEW CHAUDHARY TRANSPORT COMPANY</h2>
//       </header>

//       <div className="form-section">
//         <div className="row">
//           <label>Chalan No.: <input type="text" /></label>
//           <label>Page No.: <input type="text" /></label>
//           <label>Serial No.: <input type="text" /></label>
//         </div>
//         <div className="row">
//           <label>Profit: <input type="text" /></label>
//           <span>to</span>
//           <label>Loss: <input type="text" /></label>
//           <label>Weight: <input type="text" /></label>
//         </div>
//         <div className="row">
//           <label>Krman No.: <input type="text" /></label>
//           <label>Gaadi No.: <input type="text" /></label>
//         </div>
//       </div>

//       <div className="details-section">
//         <div className="row">
//           <label>Loading Heti: <input type="text" /></label>
//           <label>Loading Date: <input type="date" /></label>
//           <label>Mail Delivery Tay Date: <input type="date" /></label>
//         </div>

//         <div className="row">
//           <label>Gaadi Driver No.: <input type="text" /></label>
//           <label>Gaadi Khalasi No.: <input type="text" /></label>
//           <label>Gaadi WhatsApp No.: <input type="text" /></label>
//           <label>Gaadi Malik No.: <input type="text" /></label>
//         </div>

//         <div className="row">
//           <label>Gaadi Khata Vivran:</label>
//           <label>Khata Dharkh Naam: <input type="text" /></label>
//           <label>Khata Sankhya: <input type="text" /></label>
//           <label>Bank and Shakha: <input type="text" /></label>
//           <label>Bank IFSC Code: <input type="text" /></label>
//         </div>
//       </div>

//       <div className="unloading-section">
//         <h3>Unloading Details</h3>
//         <div className="row">
//           <label>Gaadi Booking Transport Company:</label>
//           <label>Name: <input type="text" /></label>
//           <label>Mobile No. 1: <input type="text" /></label>
//           <label>Mobile No. 2: <input type="text" /></label>
//         </div>
//       </div>

//       <div className="party-section">
//         <h3>Party Details</h3>
//         <div className="row">
//           <label>Gaadi Malik:</label>
//           <label>Gaon: <input type="text" /></label>
//           <label>Tehseel: <input type="text" /></label>
//           <label>Jeela: <input type="text" /></label>
//         </div>
//         <div className="row">
//           <label>Tay Gaadi Mada (PMT): <input type="text" /></label>
//           <label>Tay Dala Mukana (PMT): <input type="text" /></label>
//           <label>Gaadi Any Kharcha: <input type="text" /></label>
//         </div>

//         <div className="row">
//           <label>Party Kul Mada: <input type="text" /></label>
//           <label>Party Advance Date: <input type="date" /></label>
//           <label>Party Poch Date: <input type="date" /></label>
//         </div>

//         <div className="row">
//           <label>Maadi Kul Mada: <input type="text" /></label>
//           <label>Gaadi Advance Date: <input type="date" /></label>
//           <label>Gaadi Poch Date: <input type="date" /></label>
//         </div>
//       </div>

//       <div className="factory-section">
//         <h3>Factory Details</h3>
//         <div className="row">
//           <label>Gaadi Loading Factory Vivran:</label>
//           <label>Factory Ka Naam: <input type="text" /></label>
//           <label>Address: <textarea /></label>
//           <label>Party Ban: <input type="text" /></label>
//           <label>NCTC Bank: <input type="text" /></label>
//         </div>

//         <div className="row">
//           <label>Gaadi Unloading Factory Vivran:</label>
//           <label>Factory Ka Naam: <input type="text" /></label>
//           <label>Address: <textarea /></label>
//           <label>Broker/Transport Name: <input type="text" /></label>
//           <label>Mobile No.: <input type="text" /></label>
//         </div>
//       </div>

//       <div className="remarks-section">
//         <div>
//           <h3>Party Remarks</h3>
//           <textarea rows="4"></textarea>
//         </div>
//         <div>
//           <h3>Gaadi Remarks</h3>
//           <textarea rows="4"></textarea>
//         </div>
//       </div>

//       <footer>
//         <p>Signature Proprietor</p>
//       </footer>
//     </div>
//   );
// };

// export default TransportForm;

import React from "react";
import "../styles/TransportForm.css";

const TransportForm = () => {
  return (
    <div className="transport-form">
      <header>
        <h1>|| श्री गुरु जम्भेश्वराय नमः ||</h1>
        <h2>न्यू चौधरी ट्रांसपोर्ट कंपनी</h2>
      </header>

      <div className="form-section">
        <div className="row">
          <label>चालान नंबर: <input type="text" /></label>
          <label>पेज नंबर: <input type="text" /></label>
          <label>सीरियल नंबर: <input type="text" /></label>
        </div>
        <div className="row">
          <label>लाभ: <input type="text" /></label>
          <span>से</span>
          <label>हानि: <input type="text" /></label>
          <label>वजन: <input type="text" /></label>
        </div>
        <div className="row">
          <label>क्रमांक नंबर: <input type="text" /></label>
          <label>गाड़ी नंबर: <input type="text" /></label>
        </div>
      </div>

      <div className="details-section">
        <div className="row">
          <label>लोडिंग हेती: <input type="text" /></label>
          <label>लोडिंग तारीख: <input type="date" /></label>
          <label>मेल डिलीवरी तय तारीख: <input type="date" /></label>
        </div>

        <div className="row">
          <label>गाड़ी चालक नंबर: <input type="text" /></label>
          <label>गाड़ी खलासी नंबर: <input type="text" /></label>
          <label>गाड़ी व्हाट्सएप नंबर: <input type="text" /></label>
          <label>गाड़ी मालिक नंबर: <input type="text" /></label>
        </div>

        <div className="row">
          <label>गाड़ी खाता विवरण:</label>
          <label>खाता धारक नाम: <input type="text" /></label>
          <label>खाता संख्या: <input type="text" /></label>
          <label>बैंक और शाखा: <input type="text" /></label>
          <label>बैंक IFSC कोड: <input type="text" /></label>
        </div>
      </div>

      <div className="unloading-section">
        <h3>अनलोडिंग विवरण</h3>
        <div className="row">
          <label>गाड़ी बुकिंग ट्रांसपोर्ट कंपनी:</label>
          <label>नाम: <input type="text" /></label>
          <label>मोबाइल नंबर 1: <input type="text" /></label>
          <label>मोबाइल नंबर 2: <input type="text" /></label>
        </div>
      </div>

      <div className="party-section">
        <h3>पार्टी विवरण</h3>
        <div className="row">
          <label>गाड़ी मालिक:</label>
          <label>गांव: <input type="text" /></label>
          <label>तहसील: <input type="text" /></label>
          <label>जिला: <input type="text" /></label>
        </div>
        <div className="row">
          <label>तय गाड़ी मादा (PMT): <input type="text" /></label>
          <label>तय डाला मुकाना (PMT): <input type="text" /></label>
          <label>गाड़ी अन्य खर्चा: <input type="text" /></label>
        </div>

        <div className="row">
          <label>पार्टी कुल मादा: <input type="text" /></label>
          <label>पार्टी एडवांस तारीख: <input type="date" /></label>
          <label>पार्टी पहुँच तारीख: <input type="date" /></label>
        </div>

        <div className="row">
          <label>माड़ी कुल मादा: <input type="text" /></label>
          <label>गाड़ी एडवांस तारीख: <input type="date" /></label>
          <label>गाड़ी पहुँच तारीख: <input type="date" /></label>
        </div>
      </div>

      <div className="factory-section">
        <h3>फैक्ट्री विवरण</h3>
        <div className="row">
          <label>गाड़ी लोडिंग फैक्ट्री विवरण:</label>
          <label>फैक्ट्री का नाम: <input type="text" /></label>
          <label>पता: <textarea /></label>
          <label>पार्टी बन: <input type="text" /></label>
          <label>NCTC बैंक: <input type="text" /></label>
        </div>

        <div className="row">
          <label>गाड़ी अनलोडिंग फैक्ट्री विवरण:</label>
          <label>फैक्ट्री का नाम: <input type="text" /></label>
          <label>पता: <textarea /></label>
          <label>ब्रोकर/ट्रांसपोर्ट का नाम: <input type="text" /></label>
          <label>मोबाइल नंबर: <input type="text" /></label>
        </div>
      </div>

      <div className="remarks-section">
        <div>
          <h3>पार्टी टिप्पणी</h3>
          <textarea rows="4"></textarea>
        </div>
        <div>
          <h3>गाड़ी टिप्पणी</h3>
          <textarea rows="4"></textarea>
        </div>
      </div>

      <footer>
        <p>हस्ताक्षर: मालिक</p>
      </footer>
    </div>
  );
};

export default TransportForm;
