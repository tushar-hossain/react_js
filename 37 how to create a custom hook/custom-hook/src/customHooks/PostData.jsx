import customEffect from "./customEffect";

const PostData = () => {
  const { data, isLoading, error } = customEffect("https://jsonplaceholder.typicode.com/posts");

  const postElement =
    data &&
    data.map((data) => {
      return <p key={data.id}>{data.title}</p>;
    });

  const isLoadingMessage = <p>posts data is loading...</p>;
  const errorMessage = <p>posts data is not successfull</p>;

  return (
    <div>
      <h1>Posts Data Fetching</h1>
      {data && postElement}
      {isLoading && isLoadingMessage}
      {error && errorMessage}
    </div>
  );
};

export default PostData;
