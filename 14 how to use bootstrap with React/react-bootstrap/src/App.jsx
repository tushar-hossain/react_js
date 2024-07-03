import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Card2() {
  return (
    <Card className="p-1 m-3" style={{ width: "18rem" }}>
      <Card.Title className="text-center">Card</Card.Title>
      <hr />
      <Card.Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, voluptatum consequuntur facilis esse adipisci dolore.</Card.Text>
      <Button>Learn More</Button>
    </Card>
  );
}

export default function App() {
  return (
    <div>
      <Card2 />;
      <Card2 />;
    </div>
  );
}
