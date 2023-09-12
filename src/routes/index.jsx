import { useNavigation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Index() {
  const navigation = useNavigation();
  return (
    <div className="main__container">
      {navigation.state === "loading" ? (
        <div className="loader">
          Loading <div class="custom-loader"></div>
        </div>
      ) : (
        <div className="main__about">
          <div className="main__img">
            <img
              src="https://teeturtle-s3-web.s3.amazonaws.com/accounts/1/products/1986199881343/Hello-There_800x800_SEPS-1000x1000.jpg"
              alt="hello there"
            />
          </div>
          <div className="main__text">
            <p>
              Hello, my name is Roman. I'm a Frontend developer. This is my
              first learning React project.
            </p>
            <ul>
              Contact me:
              <li>
                <Link to="mailto:oktant2012@gmail.com">Email</Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/%D1%80%D0%BE%D0%BC%D0%B0-%D0%B3%D1%83%D0%B1%D0%B0-77600b196/"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
