import React, { useState } from 'react';
import { motion } from 'framer-motion';
import lessons from '../data/lessons';
import LessonCard from '../components/ui/LessonCard';
import FilterTabs from '../components/ui/FilterTabs';
import { useUserProgress } from '../context/UserProgressContext';

const categories = ['All', ...Array.from(new Set(lessons.map(l => l.category)))];

const LearningPaths = () => {
  const [active, setActive] = useState('All');
  const { user } = useUserProgress();
  const filtered = active === 'All' ? lessons : lessons.filter(l => l.category === active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold tracking-tight">Learning Paths</h1>
        <FilterTabs tabs={categories} active={active} onChange={setActive} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((lesson) => (
          <LessonCard
            key={lesson.id}
            id={lesson.id}
            title={lesson.title}
            description={lesson.description}
            icon={lesson.icon}
            level={lesson.level}
            duration={lesson.duration}
            completed={user.completedLessons.includes(lesson.id)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LearningPaths;
