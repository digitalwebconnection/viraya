import { useEffect } from "react";


const PrivacyPolicy = () => {
    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 👈 smooth scroll
    });
  }, []);
  return (
    <div  className="bg-[#f9fafb] py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg">
        <button
            onClick={() => window.history.back()}
        className="mb-6 text-[#FC763A] font-semibold"
      >
        ← Back to Home
      </button>

        <h1 className="text-4xl font-bold text-[#222] mb-4">
          Privacy Policy
        </h1>

        <p className="text-gray-500 mb-10">
          Effective Date: <span className="font-medium">01 January 2026</span>
        </p>

        {/* 1 */}
        <Section
          title="1. Introduction"
          content={`Welcome to Viraya. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website https://viraya.in/, including any other media form, media channel, or mobile website related or connected thereto.`}
        />

        {/* 2 */}
        <Section
          title="2. Information We Collect"
          content={
            <ul className="list-disc pl-5 space-y-2">
              <li><b>Contact Data:</b> Name, email address, phone number, and mailing address.</li>
              <li><b>Real Estate Preferences:</b> Property interests, location preferences, budget, and buying intent.</li>
              <li><b>Financial Data:</b> Information shared for property consultation or eligibility (if applicable).</li>
              <li><b>Technical Data:</b> IP address, browser type, device information, and website interaction behavior.</li>
            </ul>
          }
        />

        {/* 3 */}
        <Section
          title="3. How We Use Your Information"
          content={
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide personalized property recommendations</li>
              <li>Connect you with real estate consultants</li>
              <li>Schedule site visits and consultations</li>
              <li>
                <b>Advertising:</b> Deliver targeted ads via Google Ads and Meta (Facebook/Instagram)
              </li>
            </ul>
          }
        />

        {/* 4 */}
        <Section
          title="4. Cookies and Online Tracking"
          content={
            <>
              <p className="mb-3">
                Our website uses cookies and tracking technologies such as Meta Pixel and Google Tag to improve user experience.
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <b>Remarketing:</b> We show ads based on your browsing behavior across other platforms.
                </li>
                <li>
                  <b>Opt-Out:</b>{" "}
                  <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    className="text-[#FC763A] underline"
                  >
                    Google Ads Settings
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://optout.aboutads.info/"
                    target="_blank"
                    className="text-[#FC763A] underline"
                  >
                    Digital Ad Preferences
                  </a>
                </li>
              </ul>
            </>
          }
        />

        {/* 5 */}
        <Section
          title="5. Sharing of Your Information"
          content={
            <ul className="list-disc pl-5 space-y-2">
              <li>With service providers (CRM, marketing platforms)</li>
              <li>With partners (developers, banks) only with your consent</li>
              <li>When required by law</li>
            </ul>
          }
        />

        {/* 6 */}
        <Section
          title="6. Communication & SMS Consent"
          content={`By providing your phone number and submitting any form on our website, you agree to receive calls, SMS, or WhatsApp messages from Viraya. Consent is not a condition of purchase. Message and data rates may apply. You may opt out anytime by replying STOP.`}
        />

        {/* 7 */}
        <Section
          title="7. Fair Housing Statement"
          content={`Viraya fully supports fair housing practices and does not discriminate based on race, religion, gender, nationality, or any protected category. All data is used strictly for professional real estate services.`}
        />

        {/* 8 */}
        <Section
          title="8. Your Rights & Data Retention"
          content={`You may request access, correction, or deletion of your personal data by contacting us. We retain your data only as long as necessary to provide services or comply with legal obligations.`}
        />

        {/* 9 */}
        <Section
          title="9. Contact Us"
          content={
            <>
              <p><b>Viraya</b></p>
              <p>Website: https://viraya.in/</p>
              <p>Email: param@viraya.in</p>
              <p>Phone: +91 9821377645</p>
              <p>Address: 730 Sun Gravitas, Shyamal Cross Rd, Rajmani Society, Shyamal, Ahmedabad, Gujarat 380015</p>
            </>
          }
        />

      </div>
    </div>
  );
};

/* REUSABLE SECTION */
const Section = ({ title, content }: any) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold text-[#FC763A] mb-3">
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed">{content}</div>
  </div>
);

export default PrivacyPolicy;