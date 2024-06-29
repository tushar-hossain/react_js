import React from "react";

function App() {
  const users = [
    {
      fullName: "Tushar Hossain",
      age: 25,
      phones: [
        {
          home: "01725468652",
          office: "0185246325",
        },
      ],
    },
    {
      fullName: "Riju Islam",
      age: 22,
      phones: [
        {
          home: "0198548652",
          office: "016523425",
        },
      ],
    },
  ];

  return (
    <article>
      {users.map((user) => (
        <div>
          {<h1>FullName: {user.fullName}</h1>}
          {<p>Age: {user.age}</p>}
          <div>
            {user.phones.map((phone) => (
              <div>
                {<p>home: {phone.home}</p>}
                {<p>Office: {phone.office}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </article>
  );
}

export default App;
