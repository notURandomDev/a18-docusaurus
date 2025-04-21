import BlogAuthor from "@site/src/theme/Blog/Components/Author";

const CREWS = [
  {
    name: "黄子烨",
    title: "前端工程师",
    url: "https://github.com/yangshun",
    imageURL: "https://avatars.githubusercontent.com/u/749374?v=4",
    socials: {
      qq: "yangshunz",
      wechat: "yangshun",
      github: "asdf",
    },
  },
];

export default function HomepageCrews() {
  return (
    <div style={{ border: "1px solid black" }}>
      {/* <BlogAuthor author={CREWS[0]} /> */}
    </div>
  );
}
