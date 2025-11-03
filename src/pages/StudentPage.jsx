import React, { useState, useEffect } from "react";
import { GraduationCap, Plus, Edit, Trash2, X, Save, ArrowLeft, Sparkles } from "lucide-react";

export default function StudentPage() {
  const [students, setStudents] = useState([
    { id: 1, student_number: "2021-001", first_name: "Juan", last_name: "Dela Cruz", course: "BSIT", year_level: 3 },
    { id: 2, student_number: "2022-045", first_name: "Maria", last_name: "Santos", course: "BSCS", year_level: 2 },
    { id: 3, student_number: "2023-102", first_name: "Pedro", last_name: "Garcia", course: "BSIT", year_level: 1 },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({
    student_number: "",
    first_name: "",
    last_name: "",
    course: "",
    year_level: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleOpenModal = (student = null) => {
    if (student) {
      setEditingStudent(student);
      setFormData({
        student_number: student.student_number ?? "",
        first_name: student.first_name ?? "",
        last_name: student.last_name ?? "",
        course: student.course ?? "",
        year_level: student.year_level?.toString() ?? ""
      });
    } else {
      setEditingStudent(null);
      setFormData({ student_number: "", first_name: "", last_name: "", course: "", year_level: "" });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingStudent(null);
    setFormData({ student_number: "", first_name: "", last_name: "", course: "", year_level: "" });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.student_number || !formData.first_name || !formData.last_name) {
      return alert("Please fill required fields.");
    }

    if (editingStudent) {
      setStudents(students.map(s => s.id === editingStudent.id ? { ...s, ...formData, year_level: parseInt(formData.year_level) } : s));
    } else {
      const newStudent = {
        ...formData,
        id: Math.max(0, ...students.map(s => s.id)) + 1,
        year_level: parseInt(formData.year_level) || 0
      };
      setStudents([...students, newStudent]);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-black to-gray-900">
      <nav className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-xl border-b border-yellow-600 border-opacity-30 shadow-lg shadow-yellow-600/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="text-yellow-500" size={24} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Portfolio
              </h1>
            </div>
            <a href="/" className="text-gray-300 hover:text-yellow-400 transition-all flex items-center gap-2 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-xl shadow-lg shadow-yellow-600/50">
              <GraduationCap className="text-black" size={32} />
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Student Management
              </h2>
              <p className="text-gray-400 mt-1">Manage and view all student records</p>
            </div>
          </div>

          <button
            onClick={() => handleOpenModal()}
            className="group relative px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-800 text-black rounded-xl font-semibold shadow-lg shadow-yellow-600/50 hover:shadow-xl hover:shadow-yellow-600/70 transition-all hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <Plus size={20} />
              Add Student
            </span>
          </button>
        </div>

        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-xl rounded-2xl border border-yellow-600 border-opacity-30 shadow-2xl shadow-yellow-600/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-600/20 to-yellow-800/20 border-b border-yellow-600 border-opacity-30">
                  <th className="px-6 py-4 text-left text-yellow-400 font-semibold">ID</th>
                  <th className="px-6 py-4 text-left text-yellow-400 font-semibold">Student Number</th>
                  <th className="px-6 py-4 text-left text-yellow-400 font-semibold">First Name</th>
                  <th className="px-6 py-4 text-left text-yellow-400 font-semibold">Last Name</th>
                  <th className="px-6 py-4 text-left text-yellow-400 font-semibold">Course</th>
                  <th className="px-6 py-4 text-left text-yellow-400 font-semibold">Year Level</th>
                  <th className="px-6 py-4 text-center text-yellow-400 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan="7" className="px-6 py-8 text-center text-gray-400">Loading…</td></tr>
                ) : (
                  students.map((student) => (
                    <tr
                      key={student.id}
                      className="border-b border-gray-800 hover:bg-yellow-600/10 transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-300">{student.id}</td>
                      <td className="px-6 py-4 text-gray-300 font-mono">{student.student_number}</td>
                      <td className="px-6 py-4 text-white font-medium">{student.first_name}</td>
                      <td className="px-6 py-4 text-white font-medium">{student.last_name}</td>
                      <td className="px-6 py-4 text-gray-300">{student.course}</td>
                      <td className="px-6 py-4 text-gray-300">{student.year_level}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleOpenModal(student)}
                            className="p-2 bg-yellow-600 hover:bg-yellow-700 text-black rounded-lg transition-all hover:scale-110"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(student.id)}
                            className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all hover:scale-110"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
                {error && <tr><td colSpan="7" className="px-6 py-4 text-red-500 text-center">{error}</td></tr>}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Total Students: <span className="text-yellow-400 font-semibold">{students.length}</span>
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-yellow-600 border-opacity-30 shadow-2xl shadow-yellow-600/50 w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-yellow-600 border-opacity-20">
              <h3 className="text-2xl font-bold text-white">
                {editingStudent ? "Edit Student" : "Add New Student"}
              </h3>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="text-gray-400 hover:text-white" size={24} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-yellow-400 font-semibold mb-2">Student Number</label>
                <input
                  type="text"
                  name="student_number"
                  value={formData.student_number}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-yellow-600/40 rounded-lg text-yellow-100 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all font-mono"
                  placeholder="e.g., 2024-001"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-yellow-400 font-semibold mb-2">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-yellow-600/40 rounded-lg text-yellow-100 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all"
                    placeholder="First name"
                  />
                </div>

                <div>
                  <label className="block text-yellow-400 font-semibold mb-2">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-yellow-600/40 rounded-lg text-yellow-100 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-yellow-400 font-semibold mb-2">Course</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-yellow-600/40 rounded-lg text-yellow-100 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all"
                >
                  <option value="">Select Course</option>
                  <option value="BSIT">BSIT</option>
                  <option value="BSCS">BSCS</option>
                  <option value="BSIS">BSIS</option>
                  <option value="BSCpE">BSCpE</option>
                </select>
              </div>

              <div>
                <label className="block text-yellow-400 font-semibold mb-2">Year Level</label>
                <select
                  name="year_level"
                  value={formData.year_level}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-yellow-600/40 rounded-lg text-yellow-100 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all"
                >
                  <option value="">Select Year Level</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-700 hover:to-yellow-900 text-black rounded-xl font-semibold shadow-lg shadow-yellow-600/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Save size={20} />
                  {editingStudent ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}