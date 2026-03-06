"use client";
import { dispatchType, RootStateType } from "@/store";
import { closeModal } from "@/store/slices/form-modal-slice";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const FormModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch<dispatchType>();
  const { isOpen } = useSelector((items: RootStateType) => {
    return items.formModalReducer;
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      companyName: formData.get("companyName"),
      role: formData.get("role"),
      email: formData.get("email"),
    };
    if (!data.companyName || !data.email || !data.name || !data.role) {
      alert("please fill all the fields");
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      setIsLoading(false);
      if (res.ok) {
        toast.success("Joined successfully!");
        dispatch(closeModal());
      } else {
        toast.error(result.message || "unable to process request");
      }
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "20px",
              //   width: "100%",
              //   maxWidth: "440px",
              position: "relative",
              boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
            }}
            className="lg:max-w-md md:w-sm w-[95%] mx-auto"
          >
            <button
              onClick={() => dispatch(closeModal())}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                color: "#6B7280",
              }}
            >
              ✕
            </button>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "8px",
                color: "#111",
              }}
            >
              Get Early Access
            </h3>
            <p
              style={{
                color: "#6B7280",
                fontSize: "14px",
                marginBottom: "28px",
                lineHeight: 1.5,
              }}
            >
              Join the waitlist to be among the first to experience StreetOps.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "6px",
                    color: "#374151",
                  }}
                >
                  Name *
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    fontSize: "14px",
                    outline: "none",
                    fontFamily: '"Montserrat", sans-serif',
                  }}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "6px",
                    color: "#374151",
                  }}
                >
                  Company Name{" "}
                  <span style={{ color: "#9CA3AF", fontWeight: 400 }}>
                    (Optional)
                  </span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Acme Inc."
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    fontSize: "14px",
                    outline: "none",
                    fontFamily: '"Montserrat", sans-serif',
                  }}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "6px",
                    color: "#374151",
                  }}
                >
                  Role *
                </label>
                <select
                  defaultValue={""}
                  name="role"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    fontSize: "14px",
                    outline: "none",
                    background: "#fff",
                    fontFamily: '"Montserrat", sans-serif',
                  }}
                >
                  <option value={""} disabled>
                    Select your role
                  </option>
                  <option value="CEO/Founder">CEO / Founder</option>
                  <option value="C-Suite">C-Suite Executive</option>
                  <option value="HR Manager">HR Manager</option>
                  <option value="Team Lead">Team Lead</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div style={{ marginBottom: "28px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "6px",
                    color: "#374151",
                  }}
                >
                  Work Email *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="jane@acme.com"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    fontSize: "14px",
                    outline: "none",
                    fontFamily: '"Montserrat", sans-serif',
                  }}
                />
              </div>

              <button
                type="submit"
                className="hbtn flex items-center justify-center"
                style={{ width: "100%", padding: "14px", fontSize: "15px" }}
              >
                {isLoading ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
