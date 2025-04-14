import { Question } from "./question";

export interface ApiResponse{
  status: string;
  message: string;
  data: {
    testId: string;
    questions: Question[];
  };
  activity: {
    id: string;
    userId: string;
    type: string;
    coinType: string;
    coins: number;
    description: string;
    createdAt: string;
  };
}
  