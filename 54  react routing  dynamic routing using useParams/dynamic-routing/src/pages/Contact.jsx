import { useNavigate } from "react-router-dom";

const Contact = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat ipsam quidem at quam sit porro pariatur, facere amet quibusdam
        assumenda consequuntur harum quis, iusto repudiandae sequi alias dolorem? Placeat, repellendus ipsam dolore nihil velit inventore reiciendis
        voluptatum. Illum modi id recusandae quaerat cumque, quod odio neque, sunt dignissimos at officia deleniti nihil, harum delectus unde. Quos
        enim temporibus quaerat nihil odit earum ipsum nesciunt hic asperiores. Odit alias porro blanditiis molestiae sunt dolores repellat ea maxime
        neque, omnis consectetur vitae deserunt illum amet exercitationem incidunt corrupti perferendis nam, adipisci quis totam harum qui. Aliquid
        beatae officiis ratione tempore laboriosam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam excepturi quam vel dicta nisi beatae rerum dolor, aliquam debitis
        quibusdam inventore exercitationem repellendus voluptates? Minima a id atque esse!
      </p>
      <button
        onClick={() => {
          Navigate("/");
        }}
      >
        go to home
      </button>
    </div>
  );
};

export default Contact;
