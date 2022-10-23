import PostRow from "./components/PostRow";
import usePosts from "./hooks/data/usePosts";

function App() {
  const { data: posts, isFetching, isError, error } = usePosts();

  return (
    <div>
      <div className="">React Starter</div>
    <div className="p-8">
      {isFetching ? (
        <div>fetching . . .</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        posts?.map((p) => <PostRow key={p.id} post={p} />)
      )}
    </div>
    </div>
  );
}

export default App;
