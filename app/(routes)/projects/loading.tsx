const ContentCardSkeleton = () => {
  return (
    <div className='flex h-[50vh] w-full animate-pulse flex-col items-center justify-center'>
      <div className='h-full w-full rounded-lg bg-slate-200'></div>
    </div>
  );
};

export const ContentCardSkeletonList: React.FC = () => {
  return (
    <div className='grid w-full grid-cols-3 gap-[--gap]'>
      {Array.from({ length: 24 }).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <ContentCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='flex flex-col items-center p-[--gap]'>
      <ContentCardSkeletonList />
    </div>
  );
}
