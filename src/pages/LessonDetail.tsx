import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import lessons from '../data/lessons';
import { useLessonProgress } from '../hooks/useLessonProgress';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const LessonDetail = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = lessons.find((l) => l.id === lessonId);
  const { isCompleted, completeLesson } = useLessonProgress(lessonId || '');
  const navigate = useNavigate();

  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <div className="text-2xl font-bold mb-2">Lesson not found</div>
        <Button icon={<ArrowLeft />} onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-2xl mx-auto bg-surface-2 rounded-2xl shadow-lg p-8 border border-border"
    >
      <Button icon={<ArrowLeft />} variant="ghost" className="mb-4" onClick={() => navigate(-1)}>
        Back
      </Button>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          {React.createElement(require('lucide-react')[lesson.icon] || require('lucide-react').BookOpen, { className: 'w-8 h-8' })}
        </div>
        <div>
          <div className="text-2xl font-bold text-text-primary">{lesson.title}</div>
          <div className="text-sm text-text-secondary mt-1">{lesson.description}</div>
        </div>
      </div>
      <div className="text-base text-text-primary leading-relaxed mb-6">{lesson.content}</div>
      <div className="mb-6">
        <div className="text-sm font-semibold mb-2">Key Tips:</div>
        <ul className="list-disc pl-6 space-y-1 text-text-secondary">
          {lesson.tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </div>
      {isCompleted ? (
        <div className="flex items-center gap-2 text-success font-semibold">
          <CheckCircle className="w-5 h-5" /> Lesson Completed
        </div>
      ) : (
        <Button
          icon={<CheckCircle />}
          onClick={() => completeLesson(lesson.id)}
          className="mt-2"
        >
          Mark as Completed
        </Button>
      )}
    </motion.div>
  );
};

export default LessonDetail;
