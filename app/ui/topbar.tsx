"use client";
import { BatteryFull, Signal, Wifi } from "lucide-react";
import { useEffect, useState } from "react";

export default function TopBar() {
  const [time, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () =>
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center px-4 py-2 md:absolute fixed top-0 z-1000 w-full max-w-md bg-white dark:bg-black h-8">
      <time className="font-mono text-sm" suppressHydrationWarning>
        {time || "--:--"}
      </time>
      <span className="flex items-center justify-between gap-2 ml-auto">
        <Wifi size={20} />
        <BatteryFull size={20} />
        <Signal size={20} />
      </span>
    </div>
  );
}
