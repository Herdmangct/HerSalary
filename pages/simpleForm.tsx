import React, { useState } from 'react';

export default function SimpleForm() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    numOfPeople: '',
    orgType: '',
    workConventions: '',
    currentSalary: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit your form logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
            className="border p-2 rounded"
        />
        <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="border p-2 rounded"
        />
        <input
            type="number"
            name="numOfPeople"
            placeholder="Number of People"
            value={formData.numOfPeople}
            onChange={handleChange}
            className="border p-2 rounded"
        />
        <select
            name="orgType"
            onChange={handleChange}
            className="border p-2 rounded"
        >
            <option value="" disabled selected>
            Type of Organization
            </option>
            <option value="na">N/A</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>
        <input
            type="number"
            name="currentSalary"
            placeholder="Current Salary"
            value={formData.currentSalary}
            onChange={handleChange}
            className="border p-2 rounded"
        />
        <input
            type="number"
            name="experience"
            placeholder="Experience (years)"
            value={formData.experience}
            onChange={handleChange}
            className="border p-2 rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
