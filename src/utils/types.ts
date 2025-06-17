export type typeServicesStateType ={
    workflowAutomation:number,
    recruitment:number,
    trainingAndDevelopment:number,
    worklifeIntegrationConsulting:number

}


export interface allJobsType<S = string, N = number> {
    _id: S;
    jobTitle: S;
    aboutJob: S;
    salary:S,
    googleFormLink:S,
    roleOverview: S;
    requirements: S[];
    responsibilities: S[];
    workPlace: S;
    createdAt: S;
    updatedAt: S;
    __v: N;
  }
  