function Header() {
  let q = [
    `Code with passion, for each flowing line,
    Brings progress closer, a step at a time.`,
    `Python's power, in your eager hands,
    Unveils new worlds, where knowledge expands.`,
    `Persistent efforts, with every keystroke,
    Unleash the coder within you, let your code evoke.`,
    `Code with passion, errors be your guide.`,
    `Syntax and logic, a dance side by side.`,
    `Algorithms and loops, a symphony bright.`,
    `Bugs and fixes, challenges bring light.`,
    `Persistence conquers, code with delight.`,
    `Learning Python’s power, reaching new height.`,
  ];

  function randomquatspicker(q) {
    let length = q.length;
    let n = Math.floor(Math.random() * (length - 1));
    return q[n];
  }
  return (
    <header>
      <h1>PYTHON</h1>
      <p>{randomquatspicker(q)}</p>
      <hr />
    </header>
  );
}

export default Header;
