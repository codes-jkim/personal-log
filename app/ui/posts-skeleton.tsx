const skeletonItems = Array.from({ length: 9 });

export default function PostsSkeleton() {
  return (
    <div className="grid grid-cols-3">
      {skeletonItems.map((_, index) => (
        <div
          key={`post-skeleton-${index}`}
          className="size-38 bg-neutral-200 dark:bg-neutral-800"
        />
      ))}
    </div>
  );
}
