// src/components/NoteCard.jsx

const NoteCard = ({ title, content }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border hover:shadow-lg transition">
      <h2 className="font-semibold text-blue-600 text-xl">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
    </div>
  );
};

export default NoteCard;
