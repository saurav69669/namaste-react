// const Shimmer = () => {
//     return <div className="shimmer-container">
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//     </div>
// }

// export default Shimmer;

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-between m-10">
      {Array(5).fill("").map((_, i) => (
        <div
          key={i}
          className="w-75 h-100 rounded-lg shimmer mb-6"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;