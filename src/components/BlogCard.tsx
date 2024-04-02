import avatar from "../assets/avatar.png";
function BlogCard({
  imageUrl,
  heading,
  Content,
}: {
  imageUrl: string;
  heading: string;
  Content: string;
}) {
  return (
    <div className="border border-ash-primary/10 max-w-md w-full rounded-xl bg-dark-secondary p-3 space-y-2 h-[550px] flex flex-col justify-between hover:scale-[102%] duration-300">
      <img
        src={imageUrl}
        alt="supporting img"
        className="rounded-xl aspect-video h-48 w-full"
      />
      <h1 className="text-xl text-white/80 font-semibold">{heading}</h1>
      <p className="text-sm text-ash-primary">{Content}</p>
      <div className="text-ash-secondary flex justify-between p-2 items-center">
        <div className="flex items-center space-x-2">
          <img
            src={avatar}
            alt="avatar"
            className="w-14 h-14 rounded-[14rem]"
          />
          <span className="font-semibold">Basavaraj</span>
        </div>
        <div className=" text-xs">2 April 2024</div>
      </div>
    </div>
  );
}

export default BlogCard;
