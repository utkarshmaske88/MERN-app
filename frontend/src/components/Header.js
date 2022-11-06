import "../style.css";
import axios from "axios";
let data1;

let componentDidMount = () => {
  axios
    .get("https://movie-task.vercel.app/api/popular?page=1")
    .then((datas) => Response.call(datas.data.data.results[1]));
    
};
export function Header() {
  return (
    <>
      <div className="header" onClick={componentDidMount} value={componentDidMount}>

      </div>
    </>
  );
}
