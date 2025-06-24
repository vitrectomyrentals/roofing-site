import { useState, useEffect } from "react";

// Define InfoCard before it's used
export const InfoCard = ({ title, content, icon }) => {
  // Changed 'description' to 'content' to match your data
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      {icon}
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{content}</p>
    </div>
  );
};

const VitrectomyCards = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const cardData = [
    {
      title: "What is the purpose of a vitrectomy?",
      content:
        "A vitrectomy is a surgical procedure that involves removing the gel-like substance called the vitreous humor from the eye...",
      icon: <svg /* Your SVG Icon */></svg>,
    },
    {
      title: "Why is posturing necessary after a vitrectomy?",
      content:
        "Posturing refers to the positioning of the head and body after a vitrectomy...",
      icon: <svg /* Your SVG Icon */></svg>,
    },
    {
      title: "How can you prepare for posturing after a vitrectomy?",
      content:
        "To prepare for posturing after a vitrectomy, consider arranging the rental of equipment...",
      icon: <svg /* Your SVG Icon */></svg>,
    },
  ];

  return isClient ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 py-12 px-4">
      {cardData.map((card, index) => (
        <InfoCard
          key={index}
          title={card.title}
          content={card.content}
          icon={card.icon}
        />
      ))}
    </div>
  ) : null;
};

export default VitrectomyCards;
