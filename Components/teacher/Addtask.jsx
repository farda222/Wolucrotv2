import { useState } from "react";
import Icontask from "../../assets/img/Icontask.svg"; // Import gambar
import { useNavigate } from "react-router-dom";

function TaskManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    points: "",
    deadline: "",
    link: "",
    createdAt: "",
    file: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      file: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      ...formData,
      createdAt: new Date().toLocaleDateString(), // Tanggal dibuat
    };
    setTasks([newTask, ...tasks]); // Menambahkan task baru ke depan array
    setIsOpen(false);
    setFormData({
      heading: "",
      deadline: "",
      createdAt: "",
      file: null,
    });
  };

  return (
    <div className="container mx-auto mt-8 font-Jakarta items-center align-middle flex-row">
      {tasks.map((task, index) => (
        <div key={index} onClick={() => navigate("/Detailtask")} className="border rounded-lg p-4 mb-4 flex w-full lg:w-[40rem] 2xl:w-[50rem] items-center align-middle container mx-auto">
          <div className="mr-4 lg:mr-4">
            <img src={Icontask} alt="Task Icon" /> {/* Menampilkan gambar */}
          </div>
          <div className="lg:mt-3">
            <div className="font-bold mb-2">{task.heading}</div>
            <div className="flex justify-between mb-2">
              <div className="mb-2 text-xs">{task.createdAt} -</div>
              <div className="text-xs ml-[0.20rem]">
                <span className="text-red-500 font-semibold">Deadline:</span> {task.deadline}
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => setIsOpen(true)}
        className="bg-white text-xs hover:bg-indigo-600 transition-all hover:text-white text-indigo-600 border-2 border-indigo-600 border-solid py-3 px-7 rounded ml-3 lg:px-16 lg:py-4 lg:ml-80 lg:mt-10 lg:mb-10 2xl:ml-64">
        Add Task
      </button>

      {/* Form untuk menambahkan task */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 py-8 rounded-lg relative w-[95%] lg:w-fit">
            <h2 className="text-lg font-bold mb-10">Add Task</h2>
            <form onSubmit={handleSubmit}>
              {/* Form input fields */}
              <div className="lg:flex lg:flex-col lg:gap-4">
                <div className="mb-4">
                  <input placeholder="Heading" type="text" id="heading" name="heading" value={formData.heading} onChange={handleInputChange} className="border rounded-2xl px-7 py-5 w-full text-xs font-semibold lg:w-[35rem]" required />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Description"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="border px-7 py-5 w-full text-xs font-semibold lg:w-[35rem] lg:h-[11rem] rounded-2xl"
                    rows="4"
                    required
                  />
                </div>
                <div className="mb-2 justify-center">
                  <div className="flex items-center justify-center gap-4 lg:flex-row">
                    <input type="file" id="file" name="file" onChange={handleFileChange} className="hidden justify-center" />
                    <label htmlFor="file" className="bg-white text-black py-4 px-7 rounded-2xl cursor-pointer text-xs border border-grey-200 lg:px-10 lg:w-full justify-center font-medium align-middle items-center text-center w-full">
                      Add File
                    </label>
                  </div>
                </div>
                <div className="lg:flex lg:gap-4 flex">
                  <div className="mb-4">
                    <label htmlFor="deadline" className="block text-gray-700 font-bold text-sm">
                      Deadline
                    </label>
                    <input type="date" id="deadline" name="deadline" value={formData.deadline} onChange={handleInputChange} className="border rounded px-3 py-2 w-full bg-gray-100 lg:px-16 lg:py-3" required />
                  </div>
                  <div className="mb-4 ml-10 lg:ml-0">
                    <label htmlFor="points" className="block text-gray-700 font-bold text-sm">
                      Points
                    </label>
                    <input type="number" id="points" name="points" value={formData.points} onChange={handleInputChange} className="border px-3 py-2 mx-auto rounded bg-gray-100 lg:px-5 lg:py-3" min="0" max="100" required />
                  </div>
                </div>
              </div>
              {/* Tombol untuk upload image atau file */}

              <div className="flex justify-start gap-2 lg:gap-16 lg:justify-center mt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover
                      text-black font-medium py-4 lg:px-16 px-8 rounded-xl
                      text-xs lg:w-full border border-gray-300">
                  Cancel
                </button>
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-16 rounded-xl text-xs lg:w-full">
                  Assigment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskManager;
