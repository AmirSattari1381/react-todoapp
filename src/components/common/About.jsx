import React from "react";

const About = ({ teachersName }) => {
  return (
    <div className="card text-center">
      <div className="card-header">درباره سازنده</div>
      <div className="card-body">
        <h5 className="card-title ">دوره جامع ری اکت</h5>
        <p className="card-text  ">مدرس دوره : {teachersName}</p>
        <a href="https://toplearn.com/" className="btn btn-primary ">
          برو به تاپ لرن
        </a>
      </div>
      <div className="card-footer text-muted  ">زیاد نمونده دوره تموم بشه</div>
    </div>
  );
};

export default About;
