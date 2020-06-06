import React, { useEffect, useRef, useState } from "react";

import style from "./Style.module.css";

const Personal = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("cv")));
  }, []);
  const fromData = useRef();
  fromData.current = data && data;
  const { from, fromGroup } = style;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (e.target.name == "profilePic")
      fromData.current.profilePic = e.target.value;
    if (e.target.name == "name") fromData.current.name = e.target.value;
    const { profilePic, name } = fromData.current;
    console.log(fromData.current);
    localStorage.setItem("cv", JSON.stringify({ profilePic, name }));
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className={from}>
      <div className={fromGroup}>
        <label>Photo Url</label>
        <input
          type="url"
          className="form-control"
          placeholder="https://profileImage.jpg"
          name="profilePic"
          ref={fromData.profilePic}
          onChange={onChange}
          value={data && data.profilePic}
        />
      </div>
      <div className={fromGroup}>
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="name"
          name="name"
          ref={fromData.name}
          onChange={onChange}
          value={data && data.name}
        />
      </div>
    </form>
  );
};

export default Personal;
