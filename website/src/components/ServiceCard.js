import Link from 'next/link';

export default function ServiceCard({ icon, title, description, href }) {
  return (
    <div className="card flex flex-col gap-3 hover:shadow-lg transition-shadow">
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-bold text-blue-900">{title}</h3>
      <p className="text-gray-600 text-sm flex-1">{description}</p>
      {href && (
        <Link
          href={href}
          className="text-orange-500 hover:text-orange-600 font-semibold text-sm inline-flex items-center gap-1 mt-auto"
        >
          Learn More →
        </Link>
      )}
    </div>
  );
}
