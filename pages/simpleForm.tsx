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
    
    const messages = [
        {
            role: "user",
            content: "say hello if you can respond to this message"
        },
        {
            role: "user",
            content: "say hello if you can respond to this message"
        }
    ]

    const payload = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a tech hiring manager. You are to only provide feedback on the interview candidate's transcript. If it is not relevant and does not answer the question, make sure to say that. Do not be overly verbose and focus on the candidate's response.",
          },
          { 
            role: "user", 
            content: "how often do you think about the roman empire?" 
          },
        ],
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 450,
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
