import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("http://localhost:4000/", config);
        setData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        navigate("/login");
      }
    };

    fetchPrivateDate();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div>
      <nav className="border-b py-2">
        <div className="container flex justify-between items-center mx-auto px-4">
          <div className=" rounded">
            <img
              className=" rounded-full"
              src="https://neokredwebsite.s3.ap-south-1.amazonaws.com/svg/neokred_logo.svg"
              alt="logo"
              width={100}
              height={100}
            />{" "}
          </div>
          <div className="flex">
            <div>
              {" "}
              <p className="mr-4 text-[#A0ABC0] text-base">
                {data && data.Name}
              </p>
              <p className=" text-[#4D5E80]">NK Admin</p>
            </div>
            <div>
              <button onClick={handleLogout} className="bg-[#194DFF] text-white p-1 rounded-md">Logout</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-8 flex justify-center mt-10">
        <div className="mr-10 rounded-full">
          <img
            className=" rounded-full w-40 h-40"
            src="data:image/jpeg;base64,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"
            alt="logo"
          />
        </div>

        <div className="p-4 border">
          <h2 className=" text-base mb-4 text-[#7181A1] mt-1">P R O F I L E</h2>

          <table class="max-w-[10rem]">
            <tbody className="">
              {data &&
                Object.entries(data).map(([key, value]) => (
                  <tr key={key} className="text-[#7181A1] text-sm">
                    <td class="pr-3 py-2">{key}</td>
                    <td className="">{value} </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Profile;
