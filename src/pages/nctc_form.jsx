// import React from "react";
// import '../styles/TransportForm.css';


// const TransportForm = () => {
//   return (
//     <div className="p-8 max-w-4xl mx-auto bg-white">
//       <form className="border border-gray-300 p-4">
//         {/* Header Section */}
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex gap-4">
//             <div>
//               <label className="text-sm">चालान नं.</label>
//               <input type="text" className="border p-1 w-24" />
//             </div>
//             <div>
//               <label className="text-sm">पेज नं.</label>
//               <input type="text" className="border p-1 w-24" />
//             </div>
//             <div>
//               <label className="text-sm">सीरियल नं.</label>
//               <input type="text" className="border p-1 w-24" />
//             </div>
//           </div>
          
//           <div className="text-center text-xl font-bold">
//             न्यू चौधरी ट्रांसपोर्ट कम्पनी
//           </div>
          
//           <div className="flex gap-4">
//             <div>
//               <label className="text-sm">क्रमांक</label>
//               <input type="text" className="border p-1 w-24" defaultValue="25501" />
//             </div>
//             <div>
//               <label className="text-sm">गाड़ी नं.</label>
//               <input type="text" className="border p-1 w-24" />
//             </div>
//             <div>
//               <label className="text-sm">वजन</label>
//               <input type="text" className="border p-1 w-24" />
//             </div>
//           </div>
//         </div>

//         {/* Date Section */}
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="text-sm block">लोडिंग हेतु गाड़ी फैक्ट्री पहुंचने की दिनांक</label>
//             <input type="date" className="border p-1 w-full" />
//           </div>
//           <div>
//             <label className="text-sm block">लोडिंग दिनांक</label>
//             <input type="date" className="border p-1 w-full" />
//           </div>
//         </div>

//         {/* Address Section */}
//         <div className="grid grid-cols-3 gap-4 mb-4">
//           <div>
//             <label className="text-sm block">ग्राम</label>
//             <input type="text" className="border p-1 w-full" />
//           </div>
//           <div>
//             <label className="text-sm block">तहसील</label>
//             <input type="text" className="border p-1 w-full" />
//           </div>
//           <div>
//             <label className="text-sm block">जिला</label>
//             <input type="text" className="border p-1 w-full" />
//           </div>
//         </div>

//         {/* Payment Details */}
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="text-sm block">पार्टी कुल भाड़ा</label>
//             <input type="number" className="border p-1 w-full" />
//           </div>
//           <div>
//             <label className="text-sm block">बैंक IFSC कोड</label>
//             <input type="text" className="border p-1 w-full" />
//           </div>
//         </div>

//         {/* Party Details */}
//         <div className="mb-4">
//           <label className="text-sm block font-bold">पार्टी विवरण :-</label>
//           <div className="grid grid-cols-1 gap-2">
//             {[1, 2, 3, 4].map((num) => (
//               <input
//                 key={num}
//                 type="text"
//                 className="border p-1 w-full"
//                 placeholder={`पार्टी विवरण ${num}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Additional Party Details */}
//         <div>
//           <label className="text-sm block font-bold">गाड़ी विवरण :-</label>
//           <div className="grid grid-cols-1 gap-2">
//             {[1, 2, 3, 4].map((num) => (
//               <input
//                 key={num}
//                 type="text"
//                 className="border p-1 w-full"
//                 placeholder={`गाड़ी विवरण ${num}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-4 text-right">
//           <label className="text-sm">हस्ताक्षर प्राधिकृत</label>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default TransportForm;

import React from 'react';

const TransportForm = () => {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <form className="bg-white border-2 border-gray-400 p-6 relative">
        {/* Header with logo placeholders */}
        <div className="flex justify-between items-start mb-6">
          <div className="grid grid-cols-1 gap-2">
            <div className="border-b border-gray-400">
              <label className="text-sm">चालान नं.</label>
              <input type="text" className="border-none outline-none p-1 w-32" />
            </div>
            <div className="border-b border-gray-400">
              <label className="text-sm">पेज नं.</label>
              <input type="text" className="border-none outline-none p-1 w-32" />
            </div>
            <div className="border-b border-gray-400">
              <label className="text-sm">सीरियल नं.</label>
              <input type="text" className="border-none outline-none p-1 w-32" />
            </div>
          </div>

          {/* Center company title with profit/loss indicators */}
          <div className="flex flex-col items-center">
            {/* Small image placeholder */}
            <div className="w-8 h-8 bg-gray-200 mb-1"></div>
            <div className="flex items-center gap-4 text-sm mb-1">
              <span>Profit -{'>'}</span>
              <span className="border-b border-gray-400 w-32"></span>
              <span>Loss -{'>'}</span>
            </div>
            <h1 className="text-xl font-bold text-center">न्यू चौधरी ट्रांसपोर्ट कम्पनी</h1>
            {/* Small image placeholder */}
            <div className="w-8 h-8 bg-gray-200 mt-1"></div>
          </div>

          {/* Right side details */}
          <div className="grid grid-cols-1 gap-2">
            <div className="border-b border-gray-400">
              <label className="text-sm">क्रमांक</label>
              <input type="text" className="border-none outline-none p-1 w-32 text-red-600" defaultValue="25501" />
            </div>
            <div className="border-b border-gray-400">
              <label className="text-sm">गाड़ी नं.</label>
              <input type="text" className="border-none outline-none p-1 w-32" />
            </div>
            <div className="border-b border-gray-400">
              <label className="text-sm">वजन</label>
              <input type="text" className="border-none outline-none p-1 w-32" />
            </div>
          </div>
        </div>

        {/* Loading dates section */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="border border-gray-300 p-2">
            <label className="text-sm block">लोडिंग हेतु गाड़ी फैक्ट्री पहुंचने की दिनांक</label>
            <input type="date" className="border-none outline-none p-1 w-full" />
          </div>
          <div className="border border-gray-300 p-2">
            <label className="text-sm block">लोडिंग दिनांक</label>
            <input type="date" className="border-none outline-none p-1 w-full" />
          </div>
        </div>

        {/* Address Section with borders */}
        <div className="border border-gray-300 p-2 mb-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm block">ग्राम</label>
              <input type="text" className="border-b border-gray-400 outline-none p-1 w-full" />
            </div>
            <div>
              <label className="text-sm block">तहसील</label>
              <input type="text" className="border-b border-gray-400 outline-none p-1 w-full" />
            </div>
            <div>
              <label className="text-sm block">जिला</label>
              <input type="text" className="border-b border-gray-400 outline-none p-1 w-full" />
            </div>
          </div>
        </div>

        {/* Payment Details with borders */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="border border-gray-300 p-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm block">पार्टी कुल भाड़ा</label>
                <input type="text" className="border-b border-gray-400 outline-none p-1 w-full" />
              </div>
              <div>
                <label className="text-sm block">दिनांक</label>
                <input type="date" className="border-b border-gray-400 outline-none p-1 w-full" />
              </div>
            </div>
          </div>
          <div className="border border-gray-300 p-2">
            <div>
              <label className="text-sm block">बैंक IFSC कोड</label>
              <input type="text" className="border-b border-gray-400 outline-none p-1 w-full" />
            </div>
          </div>
        </div>

        {/* Party Details Section */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="border border-gray-300 p-2">
            <label className="text-sm block font-bold mb-2">पार्टी विवरण :-</label>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="border-b border-gray-400 mb-2">
                <input type="text" className="outline-none p-1 w-full" />
              </div>
            ))}
          </div>
          <div className="border border-gray-300 p-2">
            <label className="text-sm block font-bold mb-2">गाड़ी विवरण :-</label>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="border-b border-gray-400 mb-2">
                <input type="text" className="outline-none p-1 w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-right mt-6">
          <span className="text-sm border-t border-gray-400 pt-1">हस्ताक्षर प्राधिकृत</span>
        </div>
      </form>
    </div>
  );
};

export default TransportForm;