interface PriorityBadgeProps {
  priority: 'Low' | 'Medium' | 'High';
}

const STATUS_STYLES: Record<string, string> = {
  High: 'bg-red-500/20 text-red-500 border-red-500',
  Medium: 'bg-yellow-500/20 text-yellow-600 border-yellow-600',
  Low: 'bg-blue-500/20 text-blue-500 border-blue-500',
};

function PriorityBadge({ priority }: PriorityBadgeProps) {
  const style = STATUS_STYLES[priority] ?? 'bg-gray-500/10 text-gray-500 border-slate-300';
  return <span className={`${style} rounded-full border px-3 py-1`}>Status: {priority}</span>;
}

export default PriorityBadge;
