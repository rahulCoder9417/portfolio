import FeatureSection from "./FeatureSection";



const features = [
  {
    number: 1,
    title: "Home Page",
    description: (
      <p>
        The Home page presents a <span className="text-foreground font-medium">tweet slider</span> that 
        horizontally scrolls through trending tweets, followed by  recommended videos tailored 
        for engagement. It acts as the main discovery hub.
      </p>
    ),
    images: [{ src: "/Newtube/home.png", alt: "NewTube Home Page with tweet slider and recommended videos" }],
  },
  {
    number: 2,
    title: "Discover Page",
    description: (
      <p>
        A <span className="text-foreground font-medium">photo-first discovery feed</span> where users 
        explore uploaded images. Each post supports likes, dislikes, and comments, similar to a 
        lightweight Instagram-style experience.
      </p>
    ),
    images: [{ src: "/Newtube/discover.png", alt: "NewTube Discover Page with photo grid" }],
    reverse: true,
  },
  {
    number: 3,
    title: "Tweet Page",
    description: (
      <p>
        A dedicated tweet view that highlights the main tweet with full interaction support including 
        <span className="text-foreground font-medium"> like, dislike, retweet, and replies</span>. Built 
        to mirror Twitter-style engagement but within the NewTube ecosystem.
      </p>
    ),
    images: [
      { src: "/Newtube/tweetPage.png", alt: "Tweet detail view with interactions" },
      { src: "/Newtube/tweetPage1.png", alt: "Tweet replies and engagement" },
    ],
  },
  {
    number: 4,
    title: "Video Pages",
    description: (
      <>
        <p>
          <span className="text-foreground font-medium">Main Video Feed:</span> Displays recommended 
          videos and topic-wise browsing.
        </p>
        <p>
          <span className="text-foreground font-medium">Video Watch Page:</span> Plays the selected 
          video with subscribe, comment, view count, like/dislike, and a sidebar of recommended content.
        </p>
      </>
    ),
    images: [
      { src: "/Newtube/Video.png", alt: "Video feed with recommendations" },
      { src: "/Newtube/Video1.png", alt: "Video watch page with comments" },
    ],
    reverse: true,
  },
  {
    number: 5,
    title: "Shots (Reels) Page",
    description: (
      <p>
        A <span className="text-foreground font-medium">vertical, reels-style experience</span> with 
        smooth scroll snapping, animations, and instant like/dislike interactions, optimized for 
        fast consumption.
      </p>
    ),
    images: [{ src: "/Newtube/Shot.png", alt: "Shots page with vertical reels" }],
  },
  {
    number: 6,
    title: "User Dashboard",
    description: (
      <>
        <p>
          A <span className="text-foreground font-medium">personalized dashboard</span> where users can:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Upload videos, tweets, and posts</li>
          <li>Edit or delete content</li>
          <li>Manage playlists</li>
          <li>View watch history</li>
          <li>Track engagement on their content</li>
        </ul>
      </>
    ),
    images: [
      { src: "/Newtube/currUser.png", alt: "User dashboard overview" },
      { src: "/Newtube/watchHistory.png", alt: "Content management interface" },
    ],
    reverse: true,
  },
  {
    number: 7,
    title: "Playlist Page",
    description: (
      <p>
        Users can <span className="text-foreground font-medium">organize videos into custom playlists</span>, 
        enabling structured content consumption and creator-curated series.
      </p>
    ),
    images: [
      { src: "/Newtube/playlist1.png", alt: "Playlist overview" },
      { src: "/Newtube/playlist2.png", alt: "Playlist video list" },
    ],
  },
];

const FeaturesContainer = () => {
  return (
    <div id="features" className="relative">
      {/* Section header */}
      <div className="text-center py-16 px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
          Feature <span className="text-gradient">Breakdown</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up delay-100">
          Page-wise exploration of NewTube's comprehensive feature set
        </p>
      </div>

      {/* Features */}
      {features.map((feature, index) => (
        <div key={feature.number}>
          <FeatureSection
            number={feature.number}
            title={feature.title}
            description={feature.description}
            images={feature.images}
            reverse={feature.reverse}
          />
          {index < features.length - 1 && (
            <div className="section-divider max-w-4xl mx-auto" />
          )}
        </div>
      ))}
    </div>
  );
};

export default FeaturesContainer;
