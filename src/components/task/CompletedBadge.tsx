interface CompletedBadgeProps {
  isCompleted: boolean;
}

const STATUS_STYLES: Record<string, string> = {
  completed: 'bg-green-500/20 text-green-600 border-green-600',
  notCompleted: 'bg-gray-500/10 text-gray-500 border-slate-300',
};

function CompletedBadge({ isCompleted }: CompletedBadgeProps) {
  const statusKey = isCompleted ? 'completed' : 'notCompleted';
  const style = STATUS_STYLES[statusKey];
  const statusText = isCompleted ? 'Selesai' : 'Belum selesai';

  return <span className={`${style} rounded-full border px-3 py-1`}>{statusText}</span>;
}

export default CompletedBadge;
