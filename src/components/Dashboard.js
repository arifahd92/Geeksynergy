import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import classes from "./dashboard.module.css";
export default function Dashboard() {
  const [list, setList] = useState([]);
  const [request, setRequest] = useState(false);
  const getList = async () => {
    try {
      setRequest(true);
      const response = await axios.post("https://hoblist.com/api/movieList", {
        category: "movies",
        language: "kannad",
        genre: "all",
        sort: "voting",
      });
      const data = response.data.result;
      console.log(data);

      setList(data);
      setRequest(false);
    } catch (error) {
      console.log(error);
      alert(error.message);
      setRequest(false);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  const releasedDate = (timestamp) => {
    const date = new Date(timestamp * 1000);

    return date.toLocaleString("en-US", { day: "numeric", month: "short" });
  };
  return (
    <>
      <Header />
      <div className="container container-fluid">
        {request && (
          <div className={`${classes.alrtecontainer}`}>
            <div
              className={`${classes.alertContent} alert alert-info`}
              role="alert">
              please wait!
            </div>
          </div>
        )}
        <div className="row">
          {list.map((item, ind) => {
            return (
              <div className="col-md-6 col-lg-4" key={item._id}>
                <div className="border border-info shadow mb-2">
                  <div className=" flex-container d-flex justify-content-between ">
                    <div className="container d-flex justify-content-center align-items-center">
                      <div className="d-flext justify-content-between align-items-center flex-column ">
                        <div className={classes.upTriangle + " mt-2"}></div>
                        <p className="mt-3 mx-1"> 1</p>
                        <div className={classes.downTriangle}></div>
                        <p className="mt-4">votes</p>
                      </div>
                      <img
                        style={{
                          width: "100px",
                          height: "150px",
                          marginLeft: "20px",
                        }}
                        src={item.poster}
                        className="card-img-top"
                        alt="Placeholder"
                      />
                    </div>
                    <div className="container d-flex justify-content-center align-items-center">
                      <div>
                        <h5 className="card-title"> {item.title}</h5>
                        <div>genre:{item.genre}</div>
                        <div>director:{item.director}</div>

                        <div>
                          Mins | {item.language} |{" "}
                          {releasedDate(item.releasedDate)}
                        </div>
                        <div className="text-primary">
                          137 Views | Voted by {item.totalVoted} People
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" border border-info text-center bg-primary p-2 mb-1">
                    watch trailer
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
