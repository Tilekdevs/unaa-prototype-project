import React, { useEffect, useState } from "react";
import axios from "axios";
import "./jobs.scss";
import CustomModalOverlay from "../../components/CustomModalOverlay/CustomModalOverlay";

const Jobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/job/jobs");
        setJobsData(response.data);
      } catch (error) {
        console.log("Error fetching jobs data:", error);
      }
    };

    fetchData();
  }, []);

  const openModal = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <section className="jobs">
      <div className="jobs__top">
        <h1 className="jobs__top-title">Вакансии</h1>
        <select name="" id="" className="jobs__top-select">
          <option value="" className="jobs__top-option">Бишкек</option>
        </select>
      </div>
      <div className="jobs__container">
        {jobsData.map((job) => (
          <div className="jobs__card" key={job.id}>
            <h3 className="jobs__title">{job.title}</h3>
            <p className="jobs__city">{job.city}</p>
            {/* <p className="jobs__notes">{job.note}</p> */}
            <button onClick={() => openModal(job)} className="jobs__btn">Откликнуться</button>
          </div>
        ))}
      </div>
      {selectedJob && (
        <CustomModalOverlay job={selectedJob} closeModal={closeModal} />
      )}
    </section>
  );
};

export default Jobs;
