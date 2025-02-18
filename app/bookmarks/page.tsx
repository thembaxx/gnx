import AddBookmark from "@/components/bookmarks/add-bookmark";

function BookmarkPage() {
  return (
    <div className="flex flex-col items-center py-8 px-6 dark:bg-[#1a1c1e] h-full">
      <div className="w-full max-w-150">
        <AddBookmark />
      </div>
    </div>
  );
}

export default BookmarkPage;
