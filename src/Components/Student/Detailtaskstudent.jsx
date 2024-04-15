import { useState } from "react";
import Navbar from "../../Components/teacher/NavbarUtama";
import Icontask from "../../assets/img/Icontask.svg";
import Back from "../../assets/img/mingcute_left-line.svg";
import Cardimage from "../../assets/img/Gambar-card.svg";
import Pdf from "../../assets/img/Convert_PDF_2.svg";
import Link from "../../assets/img/Link_Chain.svg";
import Delete from "../../assets/img/Delete.svg";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/img/Image_2.svg";

const Detailtask = () => {
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Icon mappings for different file types
  const iconMapping = {
    pdf: Pdf,
    jpg: Image,
    jpeg: Image,
    png: Image,
    mp4: Link,
  };

  // Function to handle file selection
  const handleFileSelect = (event) => {
    const filesArray = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
  };

  // Function to handle file upload
  const handleFileUpload = () => {
    // Perform file upload logic here
    selectedFiles.forEach((file) => {
      console.log("File uploaded:", file);
      // You can perform further actions like sending the file to a server
    });
  };

  // Function to handle file removal
  const removeSelectedFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
  };

  // Function to shorten filename if longer than 10 characters
  const shortenFilename = (filename) => {
    if (filename.length > 10) {
      return filename.substring(0, 20) + "...";
    }
    return filename;
  };

  return (
    <div className="font-Jakarta">
      <Navbar />
      <div onClick={() => navigate("/Detailclassstudent")} className="absolute mt-12 ml-4">
        <img className="w-7 lg:ml-20 lg:w-10" src={Back} alt="Back" />
      </div>
      <div className="flex mx-auto container align-middle items-center justify-center mt-10 lg:-ml-24 2xl:ml-20">
        <img className="ml-3 w-9 lg:w-11" src={Icontask} alt="Task Icon" />
        <div className="ml-5 -mt-1 flex-row">
          <h1 className="font-semibold text-sm lg:text-lg">English Listening - Chapter 2</h1>
          <p className="text-[10px] mt-1 font-semibold">
            12 February 2024 - <span className="text-red-500">Deadline</span> 15 February 2024{" "}
          </p>
        </div>
      </div>
      <div className="bg-indigo-600 py-[0.5px] w-60 ml-24 mt-5 flex mx-auto container align-middle items-center justify-center lg:ml-[29rem] lg:w-80 2xl:ml-[47.7rem]"></div>
      <div className="flex mx-auto container align-middle items-center justify-center lg:flex lg:mx-auto lg:align-middle lg:items-center lg:justify-center lg:container lg:w-full">
        <h1 className="text-xs w-80 mt-10 lg:flex lg:mx-auto lg:align-middle lg:items-center lg:justify-center lg:container lg:w-full">Please complete the assignment I have given and remain silent in the class during my teaching hours.</h1>
      </div>
      <div className="border-[1px] border-neutral-300 w-fit h-fit rounded-[8.87px] flex mx-auto container align-middle items-center justify-center gap-4 mt-10 lg:w-[30rem] lg:h-20 lg:mt-20">
        <img className="-ml-1 w-24 lg:-ml-[8rem] lg:w-32" src={Cardimage} alt="Card Image" />
        <h1 className="mr-3 text-xs lg:text-sm lg:ml-4">Learn to read and listen to English</h1>
      </div>
      <div className="border-[1px] border-neutral-300 w-fit h-fit rounded-[8.87px] flex mx-auto container align-middle items-center justify-center gap-4 mt-4 lg:w-[30rem] lg:h-fit">
        <div className="p-6 px-7 bg-neutral-300 lg:w-28 lg:-ml-28">
          <img className="w-6 lg:w-8 lg:flex lg:mx-auto lg:align-middle lg:items-center lg:justify-center lg:container" src={Pdf} alt="PDF Icon" />
        </div>
        <h1 className="mr-3 text-xs px-5 lg:text-sm">Click to download the file task</h1>
      </div>
      <div className="border-[1px] border-neutral-300 w-fit h-fit rounded-[8.87px] flex mx-auto container align-middle items-center justify-center gap-4 mt-4 lg:w-[30rem] lg:h-fit">
        <div className="p-6 px-7 bg-neutral-300 lg:w-28 lg:-ml-28">
          <img className="w-5 lg:w-5 lg:flex lg:mx-auto lg:align-middle lg:items-center lg:justify-center lg:container" src={Link} alt="Link Icon" />
        </div>
        <a className="mr-3 text-xs text-indigo-600 px-7 lg:text-sm" href="https://www.adidas.com/us" target="_blank" rel="noopener noreferrer">
          https://www.adidas.com...
        </a>
      </div>
      <div className="w-full h-full bg-white rounded-tl-2xl rounded-t-2xl shadow shadow-black flex-col justify-start items-center inline-flex mt-20 py-10 lg:rounded-none">
        <div className="flex gap-24 justify-center align-middle items-center container mx-auto mt-5 lg:mt-16">
          <h1 className="text-sm font-semibold">Answer Collection Place</h1>
          <p className="text-xs mt-1 text-neutral-500">Assignment</p>
        </div>
        <div className="w-72 h-[0.1rem] bg-neutral-300 mt-8 justify-center align-middle items-center container mx-auto flex"></div>
        {selectedFiles.map((file, index) => (
          <div key={index} className="flex items-center justify-between mt-3 mb-3 gap-10 w-full px-12 lg:px-[30rem] 2xl:px-[48rem]">
            <div className="flex items-center">
              <img src={iconMapping[file.name.split(".").pop()]} alt="File Icon" className="mr-2" />
              <p className="text-sm mr-2">{shortenFilename(file.name)}</p>
            </div>
            <button onClick={() => removeSelectedFile(index)} className="text-black text-xs mt-1 font-extrabold">
              <img src={Delete} alt="Delete Icon" />
            </button>
          </div>
        ))}
        <div className="w-80 h-[0.1rem] bg-neutral-200 justify-center align-middle items-center container mx-auto flex"></div>
        <button
          className="text-white bg-indigo-600 transition-all text-xs w-[318px] h-[38.37px] py-[11.19px] border-indigo-600 border-solid border-[1px] rounded-sm justify-center align-middle items-center container mx-auto flex mt-5"
          onClick={() => document.getElementById("file-upload").click()}>
          Add
        </button>
        <button
          className="text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all text-xs w-[318px] h-[38.37px] py-[11.19px] border-indigo-600 border-solid border-[1px] rounded-sm justify-center align-middle items-center container mx-auto flex mt-2 mb-20"
          onClick={handleFileUpload}>
          Upload
        </button>
        <input id="file-upload" type="file" accept=".pdf, .jpg, .jpeg, .png, .mp4" className="hidden" onChange={handleFileSelect} multiple />
      </div>
    </div>
  );
};

export default Detailtask;
