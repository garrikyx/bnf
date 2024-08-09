import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import '../styles/ReportHarm.css';

const ReportHarm = () => {
  const [harmType, setHarmType] = useState('');
  const [reported, setReported] = useState('');
  const [details, setDetails] = useState('');
  const [supportType, setSupportType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Report submitted:', { harmType, reported, details, supportType });
    alert('Report submitted successfully!');
  };

  return (
    <div className="report-harm">
      <h2 className="text-2xl font-bold mb-6">Report Online Harm</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="harmType">Type of Online Harm</label>
          <Select value={harmType} onValueChange={setHarmType}>
            <SelectTrigger>
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
          <Label htmlFor="reported">Have you reported this via in-app reporting?</Label>
          <Select value={reported} onValueChange={setReported}>
            <SelectTrigger>
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
          <Label htmlFor="details">Details of the incident</Label>
          <Textarea id="details" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Please provide details about the incident..." />
        </div>
        <div>
          <Label htmlFor="supportType">Type of Support Needed</Label>
          <Select value={supportType} onValueChange={setSupportType}>
            <SelectTrigger>
              <SelectValue placeholder="Select support type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mental-health">Mental Health Support</SelectItem>
              <SelectItem value="legal">Legal Assistance</SelectItem>
              <SelectItem value="both">Both</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full">Submit Report</Button>
      </form>
    </div>
  );
};

export default ReportHarm;