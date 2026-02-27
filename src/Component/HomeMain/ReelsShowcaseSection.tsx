

const ReelsShowcaseSection = () => {
  const reels = [
    {
      title: "Luxury Investment Perspective",
      description:
        "Understanding long-term capital positioning in West Ahmedabad.",
      video: "https://www.instagram.com/reel/DU2_Ew0Adlk/",
    },
    {
      title: "Commercial Asset Evaluation",
      description: "What defines Grade A+ investment quality?",
      video: "https://www.instagram.com/reel/DUp6xQVDOm3/",
    },
    {
      title: "Pre-Leased Income Strategy",
      description: "Structured approach to predictable rental returns.",
      video: "https://www.instagram.com/reel/DBtJeMiPAuU/",
    },
    {
      title: "Strategic Land Advisory",
      description:
        "Positioning before infrastructure transformation.",
      video: "https://www.instagram.com/reel/DT0EdncD26a/",
    },
  ];

  const getEmbedUrl = (url: string) => {
    const reelId = url.split("/reel/")[1]?.replace("/", "");
    return `https://www.instagram.com/reel/${reelId}/embed`;
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#C7A25A] uppercase tracking-[0.4em] text-xs mb-6">
            Media Insights
          </p>

          <h2 className="text-4xl md:text-5xl text-[#1F2A36] mb-6 font-serif">
            Instagram Reels & Market Perspectives
          </h2>

          <p className="text-[#1F2A36]/80 text-lg max-w-3xl mx-auto">
            Short-form insights designed to simplify complex investment decisions
            and decode micro-market movements.
          </p>
        </div>

        {/* Reel Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reels.map((reel, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              {/* Instagram Embed */}
              <div className="w-full h-125 overflow-hidden">
                <iframe
                  src={getEmbedUrl(reel.video)}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>

              <div className="p-6">
                <h3 className="text-[#1F2A36] text-lg font-bold mb-3 font-serif">
                  {reel.title}
                </h3>
                <p className="text-[#1F2A36]/70 text-sm leading-relaxed">
                  {reel.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsShowcaseSection;
