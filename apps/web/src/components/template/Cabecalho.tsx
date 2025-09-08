import Logo from "../shared/Logo";

export default function Cabecalho() {
  return (
    <div
      className="flex flex-col h-20"
      style={{
        background:
          "linear-gradient(90deg, #14002d 0%, #420093 50%, #14002d 100%)",
      }}
    >
      <div className="flex-1 container flex flex-col justify-center">
        <div className="flex justify-between items-center"><Logo /></div>
      </div>
      <div
        className={`
        h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20
        `}
      ></div>
    </div>
  );
}
