/**
 * You recently started freelance software development and have been offered a variety of job opportunities.
 * Each job has a deadline, meaning there is no value in completing the work after the deadline.
 * Additionally, each job has an associated payment representing the profit for completing that job.
 * Given this information, write a function that returns the maximum profit that can be obtained in a 7-day period.
 *
 * Each job will take 1 full day to complete, and the deadline will be given as the number of days left to complete the job.
 * For example, if a job has a deadline of 1, then it can only be completed if it is the first job worked on.
 * If a job has a deadline of 2, then it could be started on the first or second day.
 *
 * Note: There is no requirement to complete all of the jobs.
 * Only one job can be worked on at a time, meaning that in some scenarios it will be impossible to complete them all.
 */
type Job = { deadline: number; payment: number }

function maxPayingJobForDay(jobs: Job[], deadline: number, jobsToIgnore: Set<Job>): Job | null {
  let maxJob: Job | null = null
  for (const job of jobs) {
    if (jobsToIgnore.has(job)) {
      continue
    }
    if (job.deadline >= deadline) {
      if (!maxJob) {
        maxJob = job
      } else if (maxJob.payment == job.payment && maxJob.deadline < job.deadline) {
        maxJob = job
      } else if (maxJob.payment < job.payment) {
        maxJob = job
      }
    }
  }
  return maxJob
}

export function optimalFreelancing(jobs: Job[]) {
  // Write your code here.
  const jobPicked = new Set<Job>()
  let maxPayment = 0
  for (let deadline = 7; deadline > 0; deadline--) {
    const pickedJob = maxPayingJobForDay(jobs, deadline, jobPicked)
    // console.log(deadline, pickedJob)
    if (pickedJob) {
      jobPicked.add(pickedJob)
      maxPayment += pickedJob.payment
    }
  }

  return maxPayment
}
