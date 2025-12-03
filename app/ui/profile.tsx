
export default function Profile() {
  return (
    <header className="w-full pb-4">
      <h1 className="text-center text-xl py-6">jeongakim</h1>
      <div className="flex align-middle justify-around">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/profile.JPG" alt="Profile picture of Jeong-a" className="rounded-full w-20 h-auto" />
        <div className="mt-auto mb-auto">
          <p className="font-bold">Jeong-a, Kim / 김정아 / 金廷娥</p>
          <p className="text-sm">Frontend Developer</p>
          <p className="text-sm">🏝️ Jeju, Korea</p>
          <p className="text-xs mt-1 text-gray-400">
            Copyright 2025. Jeong-a,Kim All Rights Reserved.
          </p>
        </div>
      </div>
    </header>
  );
}
