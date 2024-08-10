import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { AlertTriangle, Heart, Scale } from 'lucide-react';

const ReportHarm = () => {
  const [harmType, setHarmType] = useState("");
  const [reported, setReported] = useState("");
  const [details, setDetails] = useState("");
  const [supportType, setSupportType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Report submitted:", {
      harmType,
      reported,
      details,
      supportType,
    });
    alert("Report submitted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-primary flex items-center">
          <AlertTriangle className="mr-2" /> Report Online Harm
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="harmType" className="text-lg">Type of Online Harm</Label>
            <Select value={harmType} onValueChange={setHarmType}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select harm type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sexual-harassment">Sexual Harassment</SelectItem>
                <SelectItem value="cyberbullying">Cyberbullying</SelectItem>
                <SelectItem value="impersonation">Impersonation</SelectItem>
                <SelectItem value="defamation">Defamation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="reported" className="text-lg">Have you reported this via in-app reporting?</Label>
            <Select value={reported} onValueChange={setReported}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="not-available">Reporting is not a feature on the platform</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="details" className="text-lg">Details of the incident</Label>
            <Textarea
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Please provide details about the incident..."
              className="h-32 mt-2"
            />
          </div>
          <div>
            <Label htmlFor="supportType" className="text-lg">Type of Support Needed</Label>
            <Select value={supportType} onValueChange={setSupportType}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select support type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mental-health">Mental Health Support</SelectItem>
                <SelectItem value="legal">Legal Assistance</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <button type="submit" className="w-full mt-6 bg-blue-500 text-white p-2 rounded">Submit Report</button>
        </form>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-primary">Support Resources</h2>
        <div className="space-y-6">
          <div className="resource-section">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Heart className="mr-2 text-red-500" /> Mental Health Contacts
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>IMH Mental Health Helpline: 6389 2222 (24 hours, daily)</li>
              <li>Samaritans of Singapore (SOS): 1-767 (24 hours, daily)</li>
              <li>HELP123 by TOUCH Youth Integrated Team: 1800 6123 123 (Mon - Fri: 9am - 6pm, excluding PH)</li>
              <li>Association of Women for Action and Research (AWARE): 1800 777 5555 (Mon - Fri: 10am - 6pm)</li>
            </ul>
          </div>
          <div className="resource-section">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Scale className="mr-2 text-blue-500" /> Pro Bono Legal Contacts
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pro Bono SG: 6536 0650 (Mon - Fri: 10am - 1pm, 2pm - 4pm, excluding PH)</li>
              <li>Youth and Community Legal Clinic: 6536 0650 (Mon - Fri: 10am - 1pm, 2pm - 4pm, excluding PH)</li>
              <li>SHECARES@SCWO Online Harms Support Centre: 8001 01 4616 (Mon - Fri: 9am - 9pm, excluding PH)</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-sm text-gray-600 p-4 border border-gray-300 rounded-md bg-gray-50">
          The information provided does not constitute legal advice. You should obtain specific legal advice from a lawyer before taking any legal action. Although we try our best to ensure the accuracy of the information on this website, you rely on it at your own risk.
        </p>
      </div>
    </div>
  );
};

export default ReportHarm;