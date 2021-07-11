import { Spacer } from "../components/Spacer";
import Content from "./Content";
import Header from "./Header";

export default function Layout() {
  return (
    <div
      style={{
        border: "1px dotted red",
        flex: 1,
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <Spacer size={20} />
      <Content />
    </div>
  );
}
