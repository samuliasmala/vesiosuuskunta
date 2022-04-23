import { useState } from "react";
import "./App.css";

function App() {
  // Check if prevCount is given as url parameter
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);

  const [prevCount, setPrevCount] = useState(params.get("prevCount") ?? "");
  const [currCount, setCurrCount] = useState("");

  const WATER_UNIT_PRICE = 1.6 as const;
  const WATER_BASE_PRICE = 50 as const;

  const usage =
    currCount !== "" && prevCount !== ""
      ? Number(currCount) - Number(prevCount)
      : "";
  const waterFee = usage !== "" ? WATER_UNIT_PRICE * usage : "";
  const totalFee = waterFee !== "" ? waterFee + WATER_BASE_PRICE : "";

  return (
    <div className="App">
      <div className="container">
        <h1>Pinsiön alueen vesiosuuskunnan vesilaskuri</h1>

        <Field
          name="prevAmount"
          text="Edellinen lukema: "
          type="number"
          value={prevCount}
          setValue={setPrevCount}
        >
          m<sup>2</sup>
        </Field>

        <Field
          name="currAmount"
          text="Nykyinen lukema: "
          type="number"
          value={currCount}
          setValue={setCurrCount}
        >
          m<sup>2</sup>
        </Field>

        <Field
          name="usage"
          text="Kulutus: "
          type="number"
          value={usage}
          disabled
        >
          m<sup>2</sup>
        </Field>

        <Field
          name="unitPrice"
          text="Veden yksikköhinta: "
          type="number"
          value={WATER_UNIT_PRICE}
          disabled
        >
          €/m<sup>2</sup>
        </Field>

        <Field
          name="waterFee"
          text="Veden hinta: "
          type="number"
          value={waterFee}
          disabled
        >
          €
        </Field>

        <Field
          name="baseFee"
          text="Perusmaksu: "
          type="number"
          value={WATER_BASE_PRICE}
          disabled
        >
          €
        </Field>

        <Field
          name="totalFee"
          text="Yhteensä: "
          type="number"
          value={totalFee}
          disabled
        >
          €
        </Field>
      </div>
    </div>
  );
}

const Field: React.FC<{
  name: string;
  text: string;
  type: string;
  value?: unknown;
  setValue?: (value: string) => void;
  disabled?: boolean;
}> = ({ children, name, text, type, value, setValue, disabled }) => {
  return (
    <div className={`row formRow ${name}Row`}>
      <Label name={name} text={text} />
      <Value
        type={type}
        name={name}
        value={String(value)}
        setValue={setValue}
        disabled={disabled}
      />
      <Unit>{children}</Unit>
    </div>
  );
};

const Label: React.FC<{ name: string; text: string }> = ({ name, text }) => {
  return (
    <div className="col labelCol">
      <label htmlFor={name}>{text}</label>
    </div>
  );
};

const Value: React.FC<{
  type: string;
  name: string;
  value?: string | number;
  setValue?: (value: string) => void;
  disabled?: boolean;
}> = ({ type, name, value, setValue, disabled }) => {
  return (
    <div className="col valueCol">
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue && setValue(e.target.value)}
        disabled={disabled}
        className={`inputField ${name}Field`}
      />
    </div>
  );
};

const Unit: React.FC = ({ children }) => {
  return <div className="col unitCol">{children}</div>;
};

export default App;
