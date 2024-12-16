import { Schema, model, models, Types } from "mongoose";

const EventSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: 'User',
    required: [true, "User ID is required"],
  },
  title: {
    type: String,
    required: [true, "Event title is required"],
  },
  description: {
    type: String,
    default: null,
  },
  startDate: {
    type: Date,
    required: [true, "Start date is required"],
  },
  endDate: {
    type: Date,
    default: null,
  },
  // location: {
  //   type: String,
  //   default: null,
  // },
  // type: {
  //   type: String,
  //   enum: ['personal', 'professional', 'other'],
  //   default: 'personal',
  // },
  // isAllDay: {
  //   type: Boolean,
  //   default: false,
  // },
  // tags: [{
  //   type: String,
  //   default: []
  // }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true
});

const Event = models?.Event || model("Event", EventSchema);

export default Event;