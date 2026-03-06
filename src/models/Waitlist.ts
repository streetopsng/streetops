import mongoose, { Schema, models, model } from "mongoose";

const EarlyAccessWaitlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      trim: true,
      default: "",
    },
    role: {
      type: String,
      required: true,

      //   enum: ["CEO/Founder", "C-Suite", "HR Manager", "Team Lead", "Others"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const EarlyAccessWaitlist =
  models.EarlyAccessWaitlist ||
  model("EarlyAccessWaitlist", EarlyAccessWaitlistSchema);
