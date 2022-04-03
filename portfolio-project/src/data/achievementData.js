import Img from "../assets/png/hack.png";
console.log(Img);
export const achievementData = {
  bio: "An achievement is a great accomplishment—something achieved with great effort or skill. Achieve and achievement often imply the completion of something important or difficult—a lofty goal or a great feat.",
  achievements: [
    {
      id: 1,
      title: "Hackathon",
      details:
        "3rd Place in All India Hackathon organized by Dronacharya Collage of Engineering.Created a Financial Assistance & Crowdfunding App using React-Native",
      date: "May 28, 2021",
      field: "App development",
      image: Img,
      // "https://images.unsplash.com/photo-1573141597928-403fcee0e056?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    },
    {
      id: 2,
      title: "5 star Competative Programming on HackerRank ",
      details: "Problem solver on HackerRank.",
      date: "Aug 20, 2019",
      field: "Python,C++",
      image:
        "https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      id: 3,
      title: "Qualified Problem Solving test on HakerRank",
      details:
        "I had successfully qualified the test of Problem Solving on HakerRank.",
      date: "Aug 20, 2019",
      field: "Python",
      image:
        "https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  ],
};
