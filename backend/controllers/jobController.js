import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { Job } from "../models/jobSchema.js";
import ErrorHandler from "../middlewares/error.js";
import mongoose from "mongoose";

export const getAllJobs = catchAsyncErrors(async (req, res, next) => {
  const jobs = await Job.find({ expired: false });
  res.status(200).json({
    success: true,
    jobs,
  });
});

export const postJob = catchAsyncErrors(async (req, res, next) => {
    const { role } = req.user;
    if (role === "Job Seeker") {
      return next(
        new ErrorHandler("Job Seeker not allowed to access this resource.", 400)
      
    )}
    const {
      title,
      description,
      category,
      country,
      city,
      location,
      fixedSalary,
      salaryFrom,
      salaryTo,
    } = req.body;
  
    if (!title || !description || !category || !country || !city || !location) {
      return next(new ErrorHandler("Please provide full job details.", 400));
    }
  
    if ((!salaryFrom || !salaryTo) && !fixedSalary) {
      return next(
        new ErrorHandler(
          "Please either provide fixed salary or ranged salary.",
          400
        )
      );
    }
  
    if (salaryFrom && salaryTo && fixedSalary) {
      return next(
        new ErrorHandler("Cannot Enter Fixed and Ranged Salary together.", 400)
      );
    }
    const postedBy = req.user._id;
    const job = await Job.create({
      title,
      description,
      category,
      country,
      city,
      location,
      fixedSalary,
      salaryFrom,
      salaryTo,
      postedBy,
    });
    res.status(200).json({
      success: true,
      message: "Job Posted Successfully!",
      job,
    });
  });

  export const getMyJobs = catchAsyncErrors(async (req, res, next) => {
    const { role } = req.user;
    if (role === "Job Seeker") {
      return next(
        new ErrorHandler("Job Seeker not allowed to access this resource.", 400)
      );
    }
    const myJobs = await Job.find({ postedBy: req.user._id });
    res.status(200).json({
      success: true,
      myJobs,
    });
  });

  export const updateJob = catchAsyncErrors(async (req, res, next) => {
    const { role } = req.user;
    if (role === "Job Seeker") {
      return next(
        new ErrorHandler("Job Seeker not allowed to access this resource.", 400)
      );
    }
    const { id } = req.params;
    let job = await Job.findById(id);
    if (!job) {
      return next(new ErrorHandler("OOPS! Job not found.", 404));
    }
    job = await Job.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "Job Updated!",
    });
  });

  export const deleteJob = catchAsyncErrors(async (req, res, next) => {
    const { role } = req.user;
    if (role === "Job Seeker") {
      return next(
        new ErrorHandler("Job Seeker not allowed to access this resource.", 400)
      );
    }
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
      return next(new ErrorHandler("OOPS! Job not found.", 404));
    }
    await job.deleteOne();
    res.status(200).json({
      success: true,
      message: "Job Deleted!",
    });
  });
  
  // export const getSinglejob = catchAsyncErrors(async (req, res, next) =>{
  //   const { id } = req.params;
  //   try{
  //     const job = await job.findById(id);
  //     if(!job){
  //       return next(new ErrorHandler("Job not found.", 404));
  //     }
  //     res.status(200).json({
  //       success: true,
  //       job
  //     })
  //   } catch (error){
  //     return next(new ErrorHandler("Invalid ID/ CastError.", 400));
  //   }
  // });
  
  export const getSinglejob = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;

    // Check if the ID is a valid MongoDB ObjectID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new ErrorHandler("Invalid Job ID format.", 400));
    }

    try {
        const job = await Job.findById(id);
        if (!job) {
            return next(new ErrorHandler("Job not found.", 404));
        }
        res.status(200).json({
            success: true,
            job
        });
    } catch (error) {
        return next(new ErrorHandler("An error occurred while retrieving the job.", 500));
    }
});
