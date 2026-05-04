const ProgressBar = ({ value, className }: { value: number; className?: string }) => (
  <div className={`w-full h-2 bg-surface-2 rounded-full overflow-hidden ${className || ''}`}>
    <div
      className="h-2 bg-primary rounded-full transition-all duration-500"
      style={{ width: `${value}%` }}
    />
  </div>
);

export default ProgressBar;
