import { useState, useEffect } from "react";
import "./App.css";
import { Button, DeleteButton } from "./components/Button";
import { Col } from "./components/Container/col";
import { Row } from "./components/Container/row";
import Heading from "./components/Heading";
import Input from "./components/Input";
import { UID } from "./utilities/constants";

function App() {
  const [yearlyWishList, setYearlyWishList] = useState({
    [new Date()?.getFullYear()]: [],
  });
  const [currentYear, setCurrentYear] = useState(new Date()?.getFullYear());
  const [wishListThisYear, setWishListThisYear] = useState([
    // want to do list
    { name: "hellow", id: UID() },
    { name: "world", id: UID() },
  ]);
  useEffect(() => {
    setYearlyWishList((yearlyWishList[currentYear] = wishListThisYear));
  }, [wishListThisYear]);
  const [wantToDoThisYearInput, setWantToDoThisYearInput] = useState("");
  return (
    <div style={{ margin: 20 }}>
      <Heading children={"Habit tracker"} size={2} />
      <Heading size={3}>{currentYear}</Heading>
      <Row>
        <Input
          value={wantToDoThisYearInput}
          setValue={setWantToDoThisYearInput}
        />
        <Button
          children={"Add"}
          style={{}}
          onClick={(e) => {
            if (wantToDoThisYearInput !== "") {
              setWishListThisYear([
                ...wishListThisYear,
                { name: wantToDoThisYearInput, id: UID() },
              ]);
            }
            setWantToDoThisYearInput("");
          }}
        />
      </Row>
      <Col>
        {wishListThisYear?.map((item) => (
          <li
            key={item.id}
            style={{
              margin: 4,
              marginLeft: 20,
              listStyle: "number",
              width: "100%",
            }}>
            <span style={{ display: "", justifyContent: "space-between" }}>
              {item?.name}{" "}
              <DeleteButton
                onClick={() => {
                  setWishListThisYear(
                    wishListThisYear?.filter((i) => i?.id !== item?.id)
                  );
                }}
              />
            </span>
          </li>
        ))}
      </Col>
    </div>
  );
}

export default App;
