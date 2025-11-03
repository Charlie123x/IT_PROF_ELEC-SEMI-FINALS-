import { useState, useEffect } from "react";
import { BookOpen, Save, ArrowLeft, Sparkles, Activity } from "lucide-react";
import Supabase from "../lib/supabase.js";
import { studentsAnalyzer } from "../lib/ai.js";
import { PDFViewer } from "@react-pdf/renderer";
import GradeReportPDF from "../template/GradeReportPDF.jsx";
import toast, { Toaster } from "react-hot-toast";

export default function GradePage() {
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [grades, setGrades] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  useEffect(() => {
    fetchStudents();
    fetchSubjects();
  }, []);

  useEffect(() => {
    if (selectedSubject) {
      fetchGrades(selectedSubject);
      setAnalysisResult(null);
    }
  }, [selectedSubject]);

  async function fetchStudents() {
    const { data } = await Supabase.from("students").select(
      "id, first_name, last_name, student_number"
    );
    setStudents(data || []);
  }

  async function fetchSubjects() {
    const { data } = await Supabase.from("subjects").select(
      "id, subject_code, subject_name"
    );
    setSubjects(data || []);
  }

  async function fetchGrades(subjectId) {
    setLoading(true);
    const { data } = await Supabase.from("grades")
      .select("id, student_id, subject_id, prelim, midterm, semifinal, final")
      .eq("subject_id", subjectId);
    setGrades(data || []);
    setLoading(false);
  }

  const handleGradeChange = (studentId, field, value) => {
    setGrades((prev) => {
      const updated = [...prev];
      const existing = updated.find((g) => g.student_id === studentId);
      if (existing) existing[field] = value;
      else
        updated.push({
          student_id: studentId,
          subject_id: selectedSubject,
          prelim: null,
          midterm: null,
          semifinal: null,
          final: null,
          [field]: value,
        });
      return updated;
    });
  };

  const calculateAverage = (g) => {
    const nums = [g.prelim, g.midterm, g.semifinal, g.final]
      .map(Number)
      .filter((n) => !isNaN(n));
    if (!nums.length) return "";
    return (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(2);
  };

  const handleSaveAll = async () => {
    setLoading(true);
    try {
      for (const grade of grades) {
        const { data: existing } = await Supabase.from("grades")
          .select("id")
          .eq("student_id", grade.student_id)
          .eq("subject_id", grade.subject_id)
          .single();

        if (existing) {
          await Supabase.from("grades")
            .update({
              prelim: grade.prelim ? parseFloat(grade.prelim) : null,
              midterm: grade.midterm ? parseFloat(grade.midterm) : null,
              semifinal: grade.semifinal ? parseFloat(grade.semifinal) : null,
              final: grade.final ? parseFloat(grade.final) : null,
            })
            .eq("id", existing.id);
        } else {
          await Supabase.from("grades").insert([
            {
              student_id: grade.student_id,
              subject_id: grade.subject_id,
              prelim: grade.prelim ? parseFloat(grade.prelim) : null,
              midterm: grade.midterm ? parseFloat(grade.midterm) : null,
              semifinal: grade.semifinal ? parseFloat(grade.semifinal) : null,
              final: grade.final ? parseFloat(grade.final) : null,
            },
          ]);
        }
      }
      toast.success("✅ Grades saved successfully!");
    } catch (error) {
      console.error(error);
      toast.error("❌ Error saving grades: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyzeStudents = async () => {
    if (!selectedSubject) return toast.error("Please select a subject first!");
    setLoading(true);
    try {
      const analysis = await studentsAnalyzer(selectedSubject);
      setAnalysisResult(analysis);
      toast.success("✅ Analysis complete!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to analyze students: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-900 via-black to-gray-900 text-white">
      <Toaster position="top-right" />
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-xl border-b border-yellow-600 border-opacity-30 shadow-lg shadow-yellow-600/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="text-yellow-500" size={24} />
              <h1 className="text-2xl font-bold bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
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

      {/* SUBJECT SELECT */}
      <div className="max-w-7xl mx-auto p-6">
        <select
          className="bg-gray-900 border border-yellow-600/30 text-yellow-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          {subjects.map((s) => (
            <option key={s.id} value={s.id}>
              {s.subject_code} - {s.subject_name}
            </option>
          ))}
        </select>

        {/* UPDATED TABLE STYLE */}
        {selectedSubject && (
          <div className="bg-gray-900 bg-opacity-70 backdrop-blur-xl rounded-2xl border border-yellow-600/30 shadow-2xl shadow-yellow-600/10 overflow-hidden mt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-linear-to-r from-yellow-600/20 to-yellow-800/20 border-b border-yellow-600/30">
                    <th className="px-6 py-4 text-yellow-400 font-semibold">Student</th>
                    <th className="px-6 py-4 text-yellow-400 font-semibold">Prelim</th>
                    <th className="px-6 py-4 text-yellow-400 font-semibold">Midterm</th>
                    <th className="px-6 py-4 text-yellow-400 font-semibold">Semifinal</th>
                    <th className="px-6 py-4 text-yellow-400 font-semibold">Final</th>
                    <th className="px-6 py-4 text-yellow-400 font-semibold text-right">Average</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => {
                    const g = grades.find((gr) => gr.student_id === s.id) || {};
                    return (
                      <tr
                        key={s.id}
                        className="border-b border-gray-800 hover:bg-yellow-600/10 transition-colors"
                      >
                        <td className="px-6 py-4 text-gray-300">
                          {s.first_name} {s.last_name}{" "}
                          <span className="text-gray-500 text-sm">
                            ({s.student_number})
                          </span>
                        </td>
                        {["prelim", "midterm", "semifinal", "final"].map((field) => (
                          <td key={field} className="px-6 py-3">
                            <input
                              type="number"
                              min="0"
                              max="100"
                              className="w-24 px-3 py-2 bg-black border border-yellow-600/40 rounded-lg text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                              value={g[field] ?? ""}
                              onChange={(e) =>
                                handleGradeChange(s.id, field, e.target.value)
                              }
                            />
                          </td>
                        ))}
                        <td className="px-6 py-4 text-right text-yellow-400 font-semibold">
                          {calculateAverage(g) || "-"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ACTION BUTTONS */}
        {selectedSubject && (
          <div className="flex gap-4 mt-6">
            <button
              className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-black font-semibold px-6 py-3 rounded-lg shadow-lg shadow-yellow-600/30 transition-all"
              onClick={handleSaveAll}
            >
              <Save size={18} /> Save All
            </button>

            <button
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg shadow-yellow-500/30 transition-all"
              onClick={handleAnalyzeStudents}
            >
              <Activity size={18} /> Analyze Students
            </button>
          </div>
        )}

        {/* PDF VIEWER */}
        {selectedSubject && grades.length > 0 && analysisResult && (
          <div className="mt-8 h-[600px] rounded-xl overflow-hidden border border-yellow-600/30 shadow-2xl shadow-yellow-600/10">
            <PDFViewer width="100%" height="100%">
              <GradeReportPDF
                students={students}
                grades={grades}
                subjectName={
                  subjects.find((s) => s.id === selectedSubject)?.subject_name || ""
                }
                aiOutput={analysisResult}
              />
            </PDFViewer>
          </div>
        )}

        {/* LOADING OVERLAY */}
        {loading && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500"></div>
          </div>
        )}
      </div>
    </div>
  );
}