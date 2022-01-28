import Counter from "./useState/01-SimpleUseState/Counter";
import CounterTwo from "./useState/02-BasedOnPreviousState/CounterTwo";
import CounterThree from "./useState/03-UseStateWithObjects/CounterThree";
import CounterFour from "./useState/04-UseStateWithArray/CounterFour";

function App() {
  return (
    <div className="">
      {/* <Counter/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree /> */}
      <CounterFour />
    </div>
  );
}

export default App;
