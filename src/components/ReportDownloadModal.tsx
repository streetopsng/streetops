"use client";

import { useState } from "react";
import { X, Loader2, Download, CheckCircle2 } from "lucide-react";

interface ReportDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportUrl: string;
}

export default function ReportDownloadModal({ isOpen, onClose, reportUrl }: ReportDownloadModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      country: formData.get("country"),
      role: formData.get("role"),
      email: formData.get("email"),
    };

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      
      // Trigger download
      const link = document.createElement("a");
      link.href = reportUrl;
      link.download = "Streetask_Issue01_Office_Romance_Report_by_Streetops_Consulting.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Optionally close after a delay
      setTimeout(() => {
        // onClose();
        // setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setIsSuccess(false), 300);
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-md px-4 py-6">
      <div className="bg-white dark:bg-[#1C1200] rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden animate-scaleIn border border-[rgba(26,15,0,0.08)] max-h-[98vh] flex flex-col">
        {isSuccess ? (
          <div className="p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-500" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-char dark:text-cream mb-3">
              Download Started!
            </h3>
            <p className="text-sm text-ink3 dark:text-[rgba(255,248,238,0.6)] font-light leading-relaxed mb-8 max-w-[280px]">
              Your details have been submitted successfully. The report should begin downloading in a few moments.
            </p>
            <button 
              onClick={handleClose}
              className="px-10 py-3 bg-burgundy text-white font-semibold rounded-xl hover:bg-burgundy/90 transition-all shadow-lg shadow-burgundy/10"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="p-5 pb-1 flex justify-between items-start flex-shrink-0">
              <div>
                <h3 className="text-xl font-serif font-semibold text-char dark:text-cream leading-tight mb-0.5">
                  Romance & Relationships
                </h3>
                <p className="text-[12px] text-ink3 dark:text-[rgba(255,248,238,0.42)] font-light leading-relaxed">
                  How do Nigerian workers feel about workplace romance?
                </p>
              </div>
              <button 
                onClick={handleClose}
                className="p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5 text-ink4" />
              </button>
            </div>

            {/* Form Area */}
            <div className="flex-1">
              <form onSubmit={handleSubmit} className="p-5 pt-1 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-burgundy/80">First Name *</label>
                    <input
                      required
                      name="firstName"
                      type="text"
                      placeholder="John"
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-[#241800] border border-[rgba(26,15,0,0.1)] dark:border-[rgba(255,248,238,0.1)] rounded-lg text-sm outline-none focus:border-burgundy transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-burgundy/80">Last Name *</label>
                    <input
                      required
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-[#241800] border border-[rgba(26,15,0,0.1)] dark:border-[rgba(255,248,238,0.1)] rounded-lg text-sm outline-none focus:border-burgundy transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-burgundy/80">Country *</label>
                  <input
                    required
                    name="country"
                    type="text"
                    placeholder="e.g. Nigeria"
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#241800] border border-[rgba(26,15,0,0.1)] dark:border-[rgba(255,248,238,0.1)] rounded-lg text-sm outline-none focus:border-burgundy transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-burgundy/80">Role *</label>
                  <input
                    required
                    name="role"
                    type="text"
                    placeholder="e.g. HR Manager"
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#241800] border border-[rgba(26,15,0,0.1)] dark:border-[rgba(255,248,238,0.1)] rounded-lg text-sm outline-none focus:border-burgundy transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-burgundy/80">Work Email *</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#241800] border border-[rgba(26,15,0,0.1)] dark:border-[rgba(255,248,238,0.1)] rounded-lg text-sm outline-none focus:border-burgundy transition-colors"
                  />
                </div>

                <div className="pt-1 flex justify-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-2.5 bg-burgundy hover:bg-burgundy/90 text-white font-semibold rounded-xl transition-all shadow-lg shadow-burgundy/10"
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Download Report
                        <Download className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="px-5 py-3 bg-gray-50 dark:bg-[#241800] border-t border-[rgba(26,15,0,0.05)] dark:border-[rgba(255,248,238,0.05)] flex-shrink-0">
              <p className="text-[9px] text-center text-ink4 leading-tight">
                By downloading, you agree to receive research updates. Unsubscribe anytime.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
