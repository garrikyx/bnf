import React from 'react';
import '../styles/Resources.css';

const Resources = () => {
  return (
    <div className="resources">
      <h2 className="text-2xl font-bold mb-6">Support Resources</h2>
      <div className="resource-section">
        <h3 className="text-xl font-semibold mb-2">Mental Health Contacts</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>IMH Mental Health Helpline: 6389 2222 (24 hours, daily)</li>
          <li>Samaritans of Singapore (SOS): 1-767 (24 hours, daily)</li>
          <li>HELP123 by TOUCH Youth Integrated Team: 1800 6123 123 (Mon - Fri: 9am - 6pm, excluding PH)</li>
          <li>Association of Women for Action and Research (AWARE): 1800 777 5555 (Mon - Fri: 10am - 6pm)</li>
        </ul>
      </div>
      <div className="resource-section">
        <h3 className="text-xl font-semibold mb-2">Pro Bono Legal Contacts</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Pro Bono SG: 6536 0650 (Mon - Fri: 10am - 1pm, 2pm - 4pm, excluding PH)</li>
          <li>Youth and Community Legal Clinic: 6536 0650 (Mon - Fri: 10am - 1pm, 2pm - 4pm, excluding PH)</li>
          <li>SHECARES@SCWO Online Harms Support Centre: 8001 01 4616 (Mon - Fri: 9am - 9pm, excluding PH)</li>
        </ul>
      </div>
      <p className="disclaimer mt-6 text-sm text-gray-600 p-4 border border-gray-300 rounded">
        The information provided does not constitute legal advice. You should obtain specific legal advice from a lawyer before taking any legal action. Although we try our best to ensure the accuracy of the information on this website, you rely on it at your own risk.
      </p>
    </div>
  );
};

export default Resources;