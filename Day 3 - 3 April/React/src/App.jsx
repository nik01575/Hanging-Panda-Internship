import Cbc from "./componentTypes/Cbc"
import Fbc from "./componentTypes/Fbc"
import { Profiler } from "react";

const App = () => {

  function onRenderCallback(id, phase, actualDuration) {
    console.log(`Component: ${id}, Time taken: ${actualDuration}ms`);
  }

    return (
      // <Profiler id="Component" onRender={onRenderCallback}>
      //   <Cbc/>
      //   <Fbc/>
      // </Profiler>

      // <div>
      //   <Fbc/>
      //   <Cbc/>
      //   <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
      // </div>

    <Profiler id="Content" onRender={onRenderCallback}>
        <Profiler id="image" onRender={onRenderCallback}>
          <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
        </Profiler>

        <Profiler id="component" onRender={onRenderCallback}>
          <Fbc/>
          <Cbc/>
        </Profiler>

        
        {/* <svg className="heart-icon" viewBox="0 0 24 24">
          <path
            d="M12 21l-1-1C5 14 2 11 2 7a5 5 0 0 1 10 0 5 5 0 0 1 10 0c0 4-3 7-9 13z"
          />
        </svg> */}

    </Profiler>

    )
}

export default App