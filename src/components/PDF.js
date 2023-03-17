import React, { useState } from "react";
import { Cloudinary } from "cloudinary-core";

function PDF() {
  const [resume, setResume] = useState(null);
  const [resumeUrl, setResumeUrl] = useState(null);
  const [coverletter, setCoverletter] = useState(null);
  const [coverletterUrl, setCoverletterUrl] = useState(null);

  // <---------------RESUME------------------>

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };
  
  const handleResumeSubmit = async () => {
    if (!resume) {
      console.log("no pdf here...")
      return;
    }
    const formData = new FormData();
    formData.append("file", resume);
    formData.append("upload_preset", 'xk3vv8aa');

    const cloudinary = new Cloudinary({
      cloud_name: 'dfmxbcddb',
      secure: true,
    });

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      setResumeUrl(data.secure_url);
      setResume(null);
    } catch (error) {
      console.error(error);
    }
  };

  // <---------------COVER LETTER------------------>

  const handleCoverletterUpload = (event) => {
    const file = event.target.files[0];
    setCoverletter(file);
  };

  const handleCoverletterSubmit = async () => {
    if (!coverletter) {
      console.log("no pdf here...")
      return;
    }
    const formData = new FormData();
    formData.append("file", coverletter);
    formData.append("upload_preset", 'xk3vv8aa');

    const cloudinary = new Cloudinary({
      cloud_name: 'dfmxbcddb',
      secure: true,
    });

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      setCoverletterUrl(data.secure_url);
      setCoverletter(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Resume</h2>
      <input type="file" accept="application/pdf" onChange={handleResumeUpload} />
      <button onClick={handleResumeSubmit}>Upload PDF</button>
      {resumeUrl && <p>Uploaded resume URL: {resumeUrl}</p>}

      <h2>Cover letter</h2>
      <input type="file" accept="application/pdf" onChange={handleCoverletterUpload} />
      <button onClick={handleCoverletterSubmit}>Upload PDF</button>
      {coverletterUrl && <p>Uploaded coverletter URL: {coverletterUrl}</p>}
    </div>
  );
}
export default PDF;