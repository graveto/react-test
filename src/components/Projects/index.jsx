import data from "../../assets/data/data";

export default function Projects() {
  console.log(data);
  return (
    <>
      <div>Hello World</div>
      <ul>
        {data.map((img) => {
          return (
            <li key={img.id}>
              <p>{img.title}</p>
              <img src={img.imageURL} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
