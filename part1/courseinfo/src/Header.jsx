import course from "./courseData";

const Header = () => {
    return (
      <div>
        <h1>{course.name}</h1>
      </div>
    );
  };
  
  console.log("header data loaded");
  export default Header;