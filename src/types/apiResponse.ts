import { Question } from "./question";

export interface ApiResponse {
  testId: string;
  questions: Question[];
}
