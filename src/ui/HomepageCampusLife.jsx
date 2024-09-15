const entertainmentNews = [
  {
    title: "New Blockbuster Movie Tops Box Office Charts",
    imageUrl: "https://picsum.photos/600/400?random=1",
  },
  {
    title: "Top Music Awards: Who Took Home the Most Trophies?",
    imageUrl: "https://picsum.photos/600/400?random=2",
  },
  {
    title: "Celebrity Couple Announces Surprise Engagement",
    imageUrl: "https://picsum.photos/600/400?random=3",
  },
  {
    title: "Music Festival Brings Thousands Together for a Weekend of Fun",
    imageUrl: "https://picsum.photos/600/400?random=4",
  },
  {
    title: "Award-Winning Director Teases New Sci-Fi Film",
    imageUrl: "https://picsum.photos/600/400?random=5",
  },
  {
    title: "Pop Star's New Album Breaks Streaming Records",
    imageUrl: "https://picsum.photos/600/400?random=6",
  },
  {
    title: "Iconic TV Show Announces Final Season",
    imageUrl: "https://picsum.photos/600/400?random=7",
  },
  {
    title: "Indie Film Festival Highlights Up-and-Coming Talent",
    imageUrl: "https://picsum.photos/600/400?random=8",
  },
  {
    title: "Comedian's New Stand-Up Special Goes Viral",
    imageUrl: "https://picsum.photos/600/400?random=9",
  },
  {
    title: "Legendary Rock Band Announces Reunion Tour",
    imageUrl: "https://picsum.photos/600/400?random=10",
  },
];

const HomepageCampusLife = () => {
  return (
    <div className="h-fit w-full px-5 pt-5 font-roboto md:px-8 md:pt-5 lg:mt-10 lg:px-24">
      <div className="relative right-0 mb-[10px] w-fit bg-darkCyan px-4 py-2 text-white">
        Campus Life
      </div>

      <div className="md:no-scrollbar relative h-[15rem] w-full gap-5 overflow-x-auto">
        {entertainmentNews.map((news, i) => (
          <div
            key={i}
            className={`absolute left-0 top-0 flex h-[13rem] w-[15rem] flex-col gap-2 shadow-lg`}
            style={{ transform: `translateX(${i * 110}%)` }}
          >
            <div className="h-4/6 w-full">
              <img src={news.imageUrl} className="h-full w-full object-cover" />
            </div>
            <div className="h-2/6 px-2 text-sm">
              <p className="font-lora">{news.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageCampusLife;
// https://blhwzdvt-5173.uks1.devtunnels.ms/
