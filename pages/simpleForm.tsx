import { useRouter } from 'next/router';
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
        salaryBenchmark: '',
        specialSkills: '',
        achievements: '',
        reasonForNegotiation: '',
        goals: '',
        reportsTo: '',
        desiredSalary: '',
      });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the API
    const data = {
        // Add necessary parameters here
        formData: formData,
      };

    const payload = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:`
            You are a boss at a hackathon and super stressed. 
            Answer all questions as if you are in this persona
            `,
          },
          { 
            role: "user", 
            content:`
            Background Information on me:
            Job Title: ${formData.jobTitle}
            Company: ${formData.company}
            Number of People: ${formData.numOfPeople}
            Type of Organization: ${formData.orgType}
            Current Salary: ${formData.currentSalary}
            Experience: ${formData.experience}
            Salary Benchmark: ${formData.salaryBenchmark}
            Special Skills: ${formData.specialSkills}
            Achievements: ${formData.achievements}
            Reason for Negotiation: ${formData.reasonForNegotiation}
            Goals: ${formData.goals}
            Reports To: ${formData.reportsTo}
            Desired Salary: ${formData.desiredSalary}

            Using the information above generate a negotiation transcript I can
            take to my boss. 
            `
          },
        ],
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 2000,
        n: 1,
      };
  
      try {
        // Make a POST request to the OpenAI API
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY ?? ""}`, // Replace with your OpenAI API key
          },
          body: JSON.stringify(payload),
        });
  
        // Handle the response
        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          // Use the response data in your application
        } else {
          console.error('Request to OpenAI API failed');
        }
      } catch (error) {
        console.error('An error occurred while making a request to the OpenAI API:', error);
      }

    router.push({
      pathname: '/transcriptPage', // the path of the next page
      query: { ...formData }, // query params can be retrieved using router.query in the next page
    });
    console.log(formData)
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
        <input
            type="text"
            name="salaryBenchmark"
            placeholder="Salary Benchmark"
            value={formData.salaryBenchmark}
            onChange={handleChange}
            className="border p-2 rounded"
        />
        <input
            type="text"
            name="specialSkills"
            placeholder="Special Skills"
            value={formData.specialSkills}
            onChange={handleChange}
            className="border p-2 rounded"
        />
        <input
            type="text"
            name="achievements"
            placeholder="Achievements"
            value={formData.achievements}
            onChange={handleChange}
            className="border p-2 rounded"
        />
        <input
            type="text"
            name="reasonForNegotiation"
            placeholder="Reason for Negotiation"
            value={formData.reasonForNegotiation}
            onChange={handleChange}
            className="border p-2 rounded"
        />
        <input
            type="text"
            name="goals"
            placeholder="Goals"
            value={formData.goals}
            onChange={handleChange}
            className="border p-2 rounded"
        />
        <input
            type="text"
            name="reportsTo"
            placeholder="Reports To"
            value={formData.reportsTo}
            onChange={handleChange}
            className="border p-2 rounded"
        />
        <input
            type="number"
            name="desiredSalary"
            placeholder="Desired Salary"
            value={formData.desiredSalary}
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
