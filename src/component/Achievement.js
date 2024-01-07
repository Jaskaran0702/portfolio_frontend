import { Container, Row ,Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import leetcode from "../assets/images/leetcode.png";
import coding from "../assets/images/coding.png";
import jeemain from "../assets/images/jeemain.png";
import jeeadv from "../assets/images/jeeadv.jpeg";
import cn from "../assets/images/coding-ninjas.jpg"
export const Achievement = ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const data = [
        { image: leetcode, title: "Leetcode" ,description :"Achieved the Highest Rating of 2026 and got Knight Badge"},
        { image: coding, title: "Coding Platforms", description :"Solved 1100+ question across various coding platforms"},
        { image: jeemain, title: "Jee Mains" , description :"Obtained 97.5 percentile in JEE MAINS 2021"},
        { image: cn, title: "Coding Ninjas", description :"Obtained 11th rank in Coding Ninjas Weekend Contest 95" },
        
      ];
    return (
        <section className="achievement" id="achievement">
            <Container>
                <Row>
                    <Col>
                        <div className="achievement-bx">
                            <h2>Achievements</h2>
                            <p>"Discover my achievements, a culmination of dedication and excellence. From academic milestones to impactful Ratings, each accomplishment reflects my commitment to continuous growth and delivering exceptional results."</p>
                            <Carousel responsive={responsive} infinite={true} className="achievement-slider">
                                
                                {data.map((achievement, index) => (
                                    <div key={index} className="ach-img">
                                        <img src={achievement.image} alt={achievement.title} />
                                        <h5>{achievement.title}</h5>
                                        <div className= "ach-des">
                                            <span>{achievement.description}</span>
                                        </div>
                                    </div>
                                ))}
                                
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )      
    
}