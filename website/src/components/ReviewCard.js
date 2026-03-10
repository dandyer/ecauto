export default function ReviewCard({ quote, name, city, service }) {
  return (
    <div className="card flex flex-col gap-4">
      <div className="flex text-yellow-400 text-xl">
        {'★★★★★'}
      </div>
      <p className="text-gray-700 italic text-sm leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100">
        <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-blue-900 text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{city}{service ? ` · ${service}` : ''}</p>
        </div>
      </div>
    </div>
  );
}
