export const AppTsx = `import "./styles.css";
import { machine } from "./Machine";
import { MachineContext } from "./machine";
import { getCircleUnderPointer } from "./utils";

function Circle({ circle }: Props) {
  const isSelected = MachineContext.useSelector(
    (state) => state.context.selectedCircleId === circle?.id
  );

  if (!circle?.position || !circle?.radius) return;

  const x = circle.position.x - circle.radius;
  const y = circle.position.y - circle.radius;

  return (
    <div
      className="circle"
      style={{
        background: circle.color,
        transform: "translate(" + x + "px, " + y + "px)",
        outlineColor: isSelected ? circle.color : "transparent",
        width: circle.radius * 2,
        height: circle.radius * 2,
        zIndex: isSelected ? 1 : 0,
      }}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    />
  );
}

function Stage() {
  const { send } = MachineContext.useActorRef();
  const { circles } = MachineContext.useSelector((state) => state.context);

  const onStageTouched = (e: React.PointerEvent) => {
    const position = { x: e.clientX, y: e.clientY };
    const circleUnderPointer = getCircleUnderPointer(circles, position);

    send({
      type: "stage.touched",
      position,
      circleUnderPointer,
    });
  };

  return (
    <main onPointerDown={onStageTouched}>
      {circles?.map((circle: Circle) => {
        return <Circle key={circle?.id} circle={circle} />;
      })}
    </main>
  );
}


function App() {
  return (
    <MachineContext.Provider>
      <Stage />
    </MachineContext.Provider>
  );
}

export default App;

`;
