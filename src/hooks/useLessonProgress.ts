import { useUserProgress } from '../context/UserProgressContext';

export function useLessonProgress(lessonId: string) {
  const { user, completeLesson } = useUserProgress();
  const isCompleted = user.completedLessons.includes(lessonId);
  return { isCompleted, completeLesson };
}
