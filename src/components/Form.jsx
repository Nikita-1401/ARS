import React, { useState } from "react";

const Form = () => {
  // Personal Information States
  const [studentName, setStudentName] = useState("");

  const [hearAbout, setHearAbout] = useState({
    socialMedia: false,
    website: false,
    direct: false,
    referral: false
  });
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("Select");
  const [schoolClub, setSchoolClub] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [photograph, setPhotograph] = useState(null);

  // Sports Information States
  const [sports, setSports] = useState({
    cricket: false,
    football: false
  });

const handlePhotographChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setPhotograph(file);
  }
};
  const [location, setLocation] = useState("Select");
  const [email, setEmail] = useState("");

  // Package Selection States
  const [packages, setPackages] = useState({
    skillAssessment: false,
    playerDevelopment: false
  });

  // Parent/Guardian Details States
  const [fatherName, setFatherName] = useState("");
  const [occupation, setOccupation] = useState("Select");
  const [fatherContact, setFatherContact] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");

  // Payment Options States
  const [payment, setPayment] = useState({
    upi: false,
    card: false,
    netBanking: false,
    cash: false
  });

  // Handlers for checkbox groups (ensuring only one can be selected per section)
  const handleHearAboutChange = (key) => {
    setHearAbout({
      socialMedia: false,
      website: false,
      direct: false,
      referral: false,
      [key]: true
    });
  };

  const handleSportsChange = (key) => {
    setSports({
      cricket: false,
      football: false,
      [key]: true
    });
  };

  const handlePackageChange = (key) => {
    setPackages({
      skillAssessment: false,
      playerDevelopment: false,
      [key]: true
    });
  };

  const handlePaymentChange = (key) => {
    setPayment({
      upi: false,
      card: false,
      netBanking: false,
      cash: false,
      [key]: true
    });
  };


  return (
    <div className="flex justify-center bg-amber-100 py-2">

      {/* A4 PAGE */}
      <div className="w-[150mm] h-[200mm] bg-white px-4 py-3 text-[10px] leading-none overflow-hidden">
       <div className="border-b border-gray-400 pb-[1px] mb-[1px] mt-0">

  {/* Top Row */}
  <div className="flex items-center justify-between relative h-[42px]">

    {/* LOGO - More left and down */}
    <div className="w-[140px] flex items-center flex-shrink-0 -ml-2 mt-1">
      <img
        src="/logo.jpeg"
        alt="Kreed Logo"
        className="w-[130px] h-auto object-contain"
      />
    </div>

    {/* COMPANY NAME - Absolute positioned to prevent line break */}
    <div className="absolute left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap">
      <h2 className="text-[16px] font-extrabold tracking-wide text-green-700 leading-tight">
        ARS KREEDASHALA PRIVATE LIMITED
      </h2>

      <p className="text-[10px] leading-tight">
        Daladali Chowk, Near Sarna Hotel,
        <span className="font-semibold"> Ranchi, Jharkhand</span>
      </p>
    </div>

    {/* Spacer (reduced width) */}
    <div className="w-[140px] flex-shrink-0"></div>

  </div>

  {/* PHONE NUMBERS - Compact */}
  <div className="flex justify-center -mt-[2px]">
    <div className="border border-yellow-500 rounded-full px-2 py-0 text-[10px] flex gap-1 items-center">
      <span>📞 +91 6514073327</span>
      <span>|</span>
      <span>+91 9205200015</span>
      <span>|</span>
      <span>+91 9386693444</span>
    </div>
  </div>

  {/* WEBSITE - Compact */}
  <div className="flex justify-center -mt-[1px] text-[10px] font-medium">
    🌐 www.arskreedashala.com
  </div>

</div>
        {/* HEADER */}
        <div className="flex justify-center items-center my-2 w-full h-[20px]">
          <div className="relative flex items-center h-full">
            {/* 1. The Golden Base (The wider layer behind) */}
            <div
              className="absolute inset-0 bg-yellow-500 z-0 translate-y-[1px]"
              style={{
                width: 'calc(100% + 40px)',
                left: '-20px',
                clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)'
              }}
            ></div>

            {/* 2. The Green Box (The top layer with the text) */}
            <div
              className="relative bg-green-900 text-white px-8 py-1 z-10 flex items-center justify-center"
              style={{
                clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)'
              }}
            >
              <span className="font-bold text-[13px] tracking-widest whitespace-nowrap">
                PLAYER REGISTRATION FORM
              </span>
            </div>
          </div>
        </div>

        {/* STUDENT NAME + PHOTO */}
        <div className="grid grid-cols-2 gap-[3px] mb-[2px]">
          <div>
            <label className="block mb-[1px]">Student Name</label>
            <input
              className="w-full border border-gray-400 px-1 py-[1px]"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-[1px]">Upload Photograph</label>
            <input
              type="file"
              className="w-full border border-gray-400 px-1 py-[1px]"
               onChange={handlePhotographChange}
            />
          </div>
        </div>

        {/* HEAR + JOIN DATE */}
        <div className="grid grid-cols-2 gap-[3px] mb-[2px]">

          <div>
            <label className="block mb-[1px]">
              How did you hear about ARS Kreedashala?
            </label>

            <div className="flex gap-[6px] flex-wrap">
              <label className="flex items-center gap-[2px]">
                <input
                  type="checkbox"
                  checked={hearAbout.socialMedia}
                  onChange={() => handleHearAboutChange('socialMedia')}
                />Social Media
              </label>
              <label className="flex items-center gap-[2px]">
                <input
                  type="checkbox"
                  checked={hearAbout.website}
                  onChange={() => handleHearAboutChange('website')}
                />Website
              </label>
              <label className="flex items-center gap-[2px]">
                <input
                  type="checkbox"
                  checked={hearAbout.direct}
                  onChange={() => handleHearAboutChange('direct')}
                />Direct
              </label>
              <label className="flex items-center gap-[2px]">
                <input
                  type="checkbox"
                  checked={hearAbout.referral}
                  onChange={() => handleHearAboutChange('referral')}
                />Referral
              </label>
            </div>
          </div>

          <div>
            <label className="block mb-[1px]">Date of Joining</label>
            <input
              type="date"
              className="w-full border border-gray-400 px-1 py-[1px]"
              value={dateOfJoining}
              onChange={(e) => setDateOfJoining(e.target.value)}
            />
          </div>

        </div>

        {/* PERSONAL INFO */}
        <div className="mb-[2px]">

          <div className="flex items-center my-[2px] w-full h-[24px]">
            <div className="relative flex items-center h-full">
              {/* 1. The Golden Base - Wider and slanted */}
              <div
                className="absolute inset-0 bg-yellow-500 z-0 translate-y-[2px]"
                style={{
                  width: 'calc(100% + 24px)', // Increased width for the golden "tail"
                  clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'
                }}
              ></div>

              {/* 2. The Green Box - Slanted to match, but width fits the text */}
              <div
                className="relative bg-green-900 text-white px-5 py-[3px] z-10"
                style={{
                  width: 'calc(100% + 12px)', // Slightly shorter than gold to let gold peek out
                  clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'
                }}
              >
                <span className="font-bold text-[11px] tracking-widest whitespace-nowrap">
                  PERSONAL INFORMATION
                </span>
              </div>
            </div>

            {/* 3. The Gold Horizontal Line - Adjusted margin to meet the tip */}
            <span className="flex-1 h-[1.5px] bg-yellow-500 -ml-1"></span>
          </div>

          <div className="grid grid-cols-2 gap-[2px]">

            <div>
              <label className="block mb-[1px]">Date of Birth</label>
              <input
                type="date"
                className="w-full border border-gray-400 px-1 py-[1px]"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-[1px]">Gender</label>
              <select
                className="w-full border border-gray-400 px-1 py-[1px]"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

          </div>

          <div>
            <label className="block mb-[1px]">Name of School / Club</label>
            <input
              className="w-full border border-gray-400 px-1 py-[1px]"
              value={schoolClub}
              onChange={(e) => setSchoolClub(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-[1px]">School / Club Address</label>
            <input
              className="w-full border border-gray-400 px-1 py-[1px]"
              value={schoolAddress}
              onChange={(e) => setSchoolAddress(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-[2px]">
            <div>
              <label className="block mb-[1px]">Contact Number</label>
              <input
                className="w-full border border-gray-400 px-1 py-[1px]"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-[1px]">WhatsApp</label>
              <input
                className="w-full border border-gray-400 px-1 py-[1px]"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block mb-[1px]">Aadhaar Card Number</label>
            <input
              className="w-full border border-gray-400 px-1 py-[1px]"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value)}
            />
          </div>

        </div>

        {/* SPORTS */}
        <div className="mb-[2px]">

          <div className="flex items-center my-[2px] w-full h-[24px]">
            <div className="relative flex items-center h-full">
              {/* 1. The Golden Base - Wider and slanted */}
              <div
                className="absolute inset-0 bg-yellow-500 z-0 translate-y-[2px]"
                style={{
                  width: 'calc(100% + 24px)', // Increased width for the golden "tail"
                  clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'
                }}
              ></div>

              {/* 2. The Green Box - Slanted to match, but width fits the text */}
              <div
                className="relative bg-green-900 text-white px-5 py-[3px] z-10"
                style={{
                  width: 'calc(100% + 12px)', // Slightly shorter than gold to let gold peek out
                  clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'
                }}
              >
                <span className="font-bold text-[11px] tracking-widest whitespace-nowrap">
                  SPORTS INFORMATION
                </span>
              </div>
            </div>

            {/* 3. The Gold Horizontal Line - Adjusted margin to meet the tip */}
            <span className="flex-1 h-[1.5px] bg-yellow-500 -ml-1"></span>
          </div>

          <div className="flex gap-[6px] mb-[2px]">
            <label className="flex items-center gap-[2px]">
              <input
                type="checkbox"
                checked={sports.cricket}
                onChange={() => handleSportsChange('cricket')}
              />Cricket
            </label>
            <label className="flex items-center gap-[2px]">
              <input
                type="checkbox"
                checked={sports.football}
                onChange={() => handleSportsChange('football')}
              />Football
            </label>
          </div>

          <div>
            <label className="block mb-[1px]">Select Academic Location</label>
            <select
              className="w-full border border-gray-400 px-1 py-[1px]"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>Select</option>
              <option>Ranchi</option>
              <option>Hazaribagh</option>
              <option>Gaya</option>
            </select>
          </div>

          <div>
            <label className="block mb-[1px]">Email ID</label>
            <input
              className="w-full border border-gray-400 px-1 py-[1px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

        </div>

        {/* PACKAGE */}
        <div className="mb-[2px]">
          <div className="flex items-center my-[2px] w-full h-[24px]">
            <div className="relative flex items-center h-full">
              {/* 1. The Golden Base - Wider and slanted */}
              <div
                className="absolute inset-0 bg-yellow-500 z-0 translate-y-[2px]"
                style={{
                  width: 'calc(100% + 24px)', // Increased width for the golden "tail"
                  clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'
                }}
              ></div>

              {/* 2. The Green Box - Slanted to match, but width fits the text */}
              <div
                className="relative bg-green-900 text-white px-5 py-[3px] z-10"
                style={{
                  width: 'calc(100% + 12px)', // Slightly shorter than gold to let gold peek out
                  clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'
                }}
              >
                <span className="font-bold text-[11px] tracking-widest whitespace-nowrap">
                  PACKAGE SELECTION
                </span>
              </div>
            </div>

            {/* 3. The Gold Horizontal Line - Adjusted margin to meet the tip */}
            <span className="flex-1 h-[1.5px] bg-yellow-500 -ml-1"></span>
          </div>

          <div className="flex flex-col gap-[2px]">
            <label className="flex items-center gap-[2px]">
              <input
                type="checkbox"
                checked={packages.skillAssessment}
                onChange={() => handlePackageChange('skillAssessment')}
              />Skill Assessment Through Video – ₹2249
            </label>

            <label className="flex items-center gap-[2px]">
              <input
                type="checkbox"
                checked={packages.playerDevelopment}
                onChange={() => handlePackageChange('playerDevelopment')}
              />Player Development Program – ₹599
            </label>
          </div>

        </div>

        {/* PARENTS */}
        <div className="mb-[2px]">

          <div className="flex items-center my-[2px] w-full h-[24px]">
            <div className="relative flex items-center h-full">
              {/* 1. The Golden Base - Wider and slanted */}
              <div
                className="absolute inset-0 bg-yellow-500 z-0 translate-y-[2px]"
                style={{
                  width: 'calc(100% + 24px)', // Increased width for the golden "tail"
                  clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'
                }}
              ></div>

              {/* 2. The Green Box - Slanted to match, but width fits the text */}
              <div
                className="relative bg-green-900 text-white px-5 py-[3px] z-10"
                style={{
                  width: 'calc(100% +13px)', // Slightly shorter than gold to let gold peek out
                  clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'
                }}
              >
                <span className="font-bold text-[11px] tracking-widest whitespace-nowrap">
                  PARENT/GUARDIANS DETAIL
                </span>
              </div>
            </div>

            {/* 3. The Gold Horizontal Line - Adjusted margin to meet the tip */}
            <span className="flex-1 h-[1.5px] bg-yellow-500 -ml-1"></span>
          </div>

          <div>
            <label className="block mb-[1px]">Father / Guardian Name</label>
            <input
              className="w-full border border-gray-400 px-1 py-[1px]"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-[1px]">Occupation</label>
            <select
              className="w-full border border-gray-400 px-1 py-[1px]"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            >
              <option>Select</option>
              <option>Public Sector</option>
              <option>Private Sector</option>
              <option>Self / Business</option>
              <option>Other</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-[2px]">
            <div>
              <label className="block mb-[1px]">Father Contact Number</label>
              <input
                className="w-full border border-gray-400 px-1 py-[1px]"
                value={fatherContact}
                onChange={(e) => setFatherContact(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-[1px]">Email ID</label>
              <input
                className="w-full border border-gray-400 px-1 py-[1px]"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block mb-[1px]">Full Address</label>
            <input
              className="w-full border border-gray-400 px-1 py-[1px]"
              value={fullAddress}
              onChange={(e) => setFullAddress(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-[2px]">
            <div>
              <label className="block mb-[1px]">Landmark</label>
              <input
                className="w-full border border-gray-400 px-1 py-[1px]"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-[1px]">PIN Code</label>
              <input
                className="w-full border border-gray-400 px-1 py-[1px]"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
          </div>

        </div>

        {/* PAYMENT */}
        <div>

          <div className="flex items-center my-[2px] w-full h-[24px]">
            <div className="relative flex items-center h-full">
              {/* 1. The Golden Base - Wider and slanted */}
              <div
                className="absolute inset-0 bg-yellow-500 z-0 translate-y-[2px]"
                style={{
                  width: 'calc(100% + 24px)', // Increased width for the golden "tail"
                  clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'
                }}
              ></div>

              {/* 2. The Green Box - Slanted to match, but width fits the text */}
              <div
                className="relative bg-green-900 text-white px-5 py-[3px] z-10"
                style={{
                  width: 'calc(100% + 12px)', // Slightly shorter than gold to let gold peek out
                  clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'
                }}
              >
                <span className="font-bold text-[11px] tracking-widest whitespace-nowrap">
                  PAYMENT OPTIONS
                </span>
              </div>
            </div>

            {/* 3. The Gold Horizontal Line - Adjusted margin to meet the tip */}
            <span className="flex-1 h-[1.5px] bg-yellow-500 -ml-1"></span>
          </div>

          <div className="flex gap-[6px]">
            <label className="flex items-center gap-[2px]">
              <input
                type="checkbox"
                checked={payment.upi}
                onChange={() => handlePaymentChange('upi')}
              />UPI
            </label>
            <label className="flex items-center gap-[2px]">
              <input
                type="checkbox"
                checked={payment.card}
                onChange={() => handlePaymentChange('card')}
              />Card
            </label>
            <label className="flex items-center gap-[2px]">
              <input
                type="checkbox"
                checked={payment.netBanking}
                onChange={() => handlePaymentChange('netBanking')}
              />Net Banking
            </label>
            <label className="flex items-center gap-[2px]">
              <input
                type="checkbox"
                checked={payment.cash}
                onChange={() => handlePaymentChange('cash')}
              />Cash
            </label>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Form;