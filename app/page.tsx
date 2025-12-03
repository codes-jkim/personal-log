import Posts from "./ui/posts";
import Profile from "./ui/profile";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between bg-white dark:bg-black sm:items-start" style={{ height: 'inherit' }}>
      <main className="w-full max-w-md mx-auto flex flex-col items-center bg-white dark:bg-black pt-8 pb-16 overflow-y-scroll">
        <Profile />
        <Posts />
      </main>
    </div>
  );
}
