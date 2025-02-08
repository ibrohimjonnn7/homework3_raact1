import "./home.css";
import img1 from "@/app/assets/img/img1.png";
import img2 from "@/app/assets/img/img2.png";
import img3 from "@/app/assets/img/img3.png";
import img4 from "@/app/assets/img/img4.png";
import img5 from "@/app/assets/img/img5.png";
import img6 from "@/app/assets/img/img6.png";
import img7 from "@/app/assets/img/img7.png";
import img8 from "@/app/assets/img/img8.png";
import img9 from "@/app/assets/img/img9.png";
import img10 from "@/app/assets/img/img10.png";
export default function HomePage() {
  return (
    <>
      {/* <p>hello world</p>
      <img src={car} alt="ddv" /> */}
      {/* section1 */}
      <div className="container1">
        <div className="content1">
          <p className="p1">Bello</p>
          <p className="p2">Life insurance</p>
          <p className="p3">Why Bello</p>
          <p className="p4">Help</p>
        </div>
        <div className="content2">
          <p className="p5">Log in</p>
          <button className="button1">GET MY PRICE</button>
        </div>
      </div>
      <br />
      <br />
      <hr />
      {/* section2 */}
      <div className="container2">
        <div className="content3">
          <p className="p6">MEET BELLO</p>
          <h1 className="h1_1">
            A new kind of <br /> life insurance
          </h1>
          <p className="p7">
            Secure your family's financial future, <br /> in as little as 10
            minutes.
          </p>
          <button className="button2">GET MY PRICE</button>
        </div>
        <div className="content4">
          <img src={img1} alt="img1" className="img1" />
        </div>
      </div>

      {/* section3 */}

      <div className="container3">
        <div className="content5">
          <img src={img2} alt="img2" className="img2" />
        </div>
        <div className="content6">
          <p className="p6">Secure your future</p>
          <h1 className="h1_1">
            It’s more affordable <br /> than you think
          </h1>
          <p className="p7">
            Life insurance shouldn’t be confusing or <br /> expensive. Bello’s
            term life insurance makes <br /> protecting your loved ones easy and
            affordable.
          </p>
          <button className="button3">GET MY PRICE</button>
        </div>
      </div>

      {/* section4 */}
      <div className="container3">
        <div className="content6">
          <p className="p6">Technology meets service</p>
          <h1 className="h1_1">We're here to help</h1>
          <p className="p7">
            Bella, our smart bot, can guide you to your perfect <br /> policy.
            There’s also human help whenever you need it.
          </p>
          <button className="button3">GET HELP</button>
        </div>
        <div className="content5">
          <img src={img3} alt="img3" className="img3" />
        </div>
      </div>

      {/* section5 */}
      <div className="container5">
        <img src={img4} alt="img4" className="img4" />
        <p className="p6">Top-Rated Term Life Insurance</p>
        <h1 className="h1_1">You’re in safe hands</h1>
        <p className="p7">
          We've partnered with, [insert underwriter], one of the world’s
          largest, most trusted insurance companies. This <br /> means we can
          ensure reliability in paying Claims.
        </p>
      </div>

      <div className="container6">
        <div className="box1">
          <img src={img5} alt="img5" className="img5" />
          <br />
          <br />
          <p className="p8">Top-Rated</p>
          <br />
          <p className="p9">
            A+ Financial Strength Rating by <br /> A.M. Best.
          </p>
        </div>
        <div className="box1">
          <img src={img6} alt="img6" className="img6" />
          <br />
          <br />
          <p className="p8">Top-Rated</p>
          <br />
          <p className="p9">
            A+ Financial Strength Rating by <br /> A.M. Best.
          </p>
        </div>
        <div className="box1">
          <img src={img7} alt="img7" className="img7" />
          <br />
          <br />
          <p className="p8">Top-Rated</p>
          <br />
          <p className="p9">
            A+ Financial Strength Rating by <br /> A.M. Best.
          </p>
        </div>
      </div>

      {/* section6 */}
      <div className="container7">
        <img src={img8} alt="img8" className="img8" />
      </div>

      <div className="container8">
        <div className="content5">
          <img src={img9} alt="img9" className="img9" />
        </div>
        <div className="content6">
          <p className="p6">Secure your future</p>
          <h1 className="h1_1">
            It’s more affordable <br /> than you think
          </h1>
          <p className="p7">
            Life insurance shouldn’t be confusing or <br /> expensive. Bello’s
            term life insurance makes <br /> protecting your loved ones easy and
            affordable.
          </p>
          <button className="button3">GET MY PRICE</button>
        </div>
      </div>
      <div className="container9">
        <div className="card1">
          <br />
          <h2 className="h2_1">Calculator</h2>
          <br />
          <br />
          <p className="p10">
            Calculate your premium, coverage, and <br /> potential loss.
          </p>
          <br />
          <br />
          <br />
          <button className="button4">GET HELP</button>
        </div>
        <div className="card2">
          <br />
          <h2 className="h2_1">Term vs. perm</h2>
          <br />
          <br />
          <p className="p10">
            Calculate your premium, coverage, and <br /> potential loss.
          </p>
          <br />
          <br />
          <br />
          <button className="button4">GET HELP</button>
        </div>
        <div className="card3">
          <br />
          <h2 className="h2_1">Pricing</h2>
          <br />
          <br />
          <p className="p10">
            Calculate your premium, coverage, and <br /> potential loss.
          </p>
          <br />
          <br />
          <br />
          <button className="button4">GET HELP</button>
        </div>
        <div className="card4">
          <br />
          <h2 className="h2_1">Insurance 101</h2>
          <br />
          <br />
          <p className="p10">
            Calculate your premium, coverage, and <br /> potential loss.
          </p>
          <br />
          <br />
          <br />
          <button className="button4">GET HELP</button>
        </div>
      </div>
      <div className="container10">
        <img src={img10} alt="img8" className="img10" />
      </div>
      <footer>
        <div class="end1">
          <div class="part1">
            <p>Menu</p>
            <p>New arrivals</p>
            <p>New arrivals</p>
            <p>New arrivals</p>
            <p>Popular this week</p>
            <p>All products</p>
          </div>
          <div class="part2">
            <p>Categories</p>
            <p>Crockery</p>
            <p>Furniture</p>
            <p>Homeware</p>
            <p>Plant pots</p>
            <p>Chairs</p>
            <p>Crockery</p>
          </div>
          <div class="part3">
            <p>Our company</p>
            <p>About us</p>
            <p>Vacancies</p>
            <p>Contact us</p>
            <p>Privacy</p>
            <p>Returns policy</p>
          </div>
          <div class="part4">
            <p>Join our mailing list</p>
            <div class="part44">
              <input type="text" placeholder="your@email.com" />
              <button>Sign up</button>
            </div>
          </div>
        </div>
        <div class="end2">
          <div class="the1">
            <p>Copyright 2022 Avion LTD</p>
          </div>
          <div class="the2">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-skype"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </footer>
    </>
  );
}
