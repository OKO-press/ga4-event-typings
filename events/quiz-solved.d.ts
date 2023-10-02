

export type QuizType = "compass";

export interface DataLayerQuizSolved {
  event: "quiz-solved";

  /**
   * Name of the quiz based on QuizType 
   * (should be complemented in case of another quizes)
   */
  title: QuizType;

  /**
   * Quiz result - depending on quiz type
   */
  result: string;

  /**
   * Auth0 user ID
   */  
  user_id?: string;
}