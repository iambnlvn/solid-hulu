export default function SkeletonThumbnail() {
  return (
    <div class="group transform cursor-pointer p-2 transition duration-200 ease-in hover:z-20 sm:hover:scale-105">
      <div class="h-56 w-full animate-pulse rounded-3xl bg-gray-700" />
      <div class="p-2">
        <div class="mt-2 h-6 w-3/4 animate-pulse rounded-3xl bg-gray-700" />
        <div class="mt-1 h-4 w-5/6 animate-pulse rounded-3xl bg-gray-700" />
        <div class="mt-2 flex">
          <div class="h-4 w-1/4 animate-pulse rounded-3xl bg-gray-700" />
          <div class="ml-2 h-4 w-1/6 animate-pulse rounded-3xl bg-gray-700" />
        </div>
      </div>
    </div>
  );
}
