import { useState } from "react";
import "./App.css";

function App() {
  // Check if prevCount is given as url parameter
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);

  const [prevCount, setPrevCount] = useState(
    params.get("prevCount")?.replace(",", ".") ?? ""
  );
  const [currCount, setCurrCount] = useState("");
  const [reference, setReference] = useState("");

  const WATER_UNIT_PRICE = 1.6 as const;
  const WATER_BASE_PRICE = 50 as const;
  const RECEIVER = "Pinsiön alueen vesiosuuskunta" as const;
  const ACCOUNT = "FI73 123456 123456" as const;
  const DUE_DATE = "31.5.2022" as const;

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
          constant
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
          constant
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

        <hr />
        <h2>Laskun tiedot</h2>

        <Field
          name="receiver"
          text="Saaja: "
          type="text"
          value={RECEIVER}
          constant
          wideCol
        />

        <Field
          name="account"
          text="Tilinumero: "
          type="text"
          value={ACCOUNT}
          constant
          wideCol
        />

        <Field
          name="totalFeeInvoice"
          text="Summa: "
          type="number"
          value={totalFee}
          disabled
        >
          €
        </Field>

        <Field
          name="dueDate"
          text="Eräpäivä: "
          type="text"
          value={DUE_DATE}
          constant
        />

        <Field
          name="reference"
          text="Viite: "
          type="text"
          value={reference}
          setValue={setReference}
          wideCol
        />

        <Field
          name="barcode"
          text="Virtuaaliviivakoodi: "
          type="text"
          value={"123615286548712364"}
          constant
          wideCol
        />

        <button>
          Kopioi viivakoodi
          <br />
          leikepöydälle
        </button>
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
  constant?: boolean;
  wideCol?: boolean;
}> = ({
  children,
  name,
  text,
  type,
  value,
  setValue,
  disabled,
  constant,
  wideCol,
}) => {
  return (
    <div className={`row formRow ${name}Row`}>
      <Label name={name} text={text} />
      <Value
        type={type}
        name={name}
        value={String(value)}
        setValue={setValue}
        disabled={disabled}
        constant={constant}
        wideCol={wideCol}
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
  constant?: boolean;
  wideCol?: boolean;
}> = ({ type, name, value, setValue, disabled, constant, wideCol }) => {
  return (
    <div className={`col  ${wideCol === true ? "wideValueCol" : "valueCol"}`}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue && setValue(e.target.value)}
        disabled={disabled ?? constant}
        className={`inputField ${constant === true ? "constantField" : ""}`}
      />
    </div>
  );
};

const Unit: React.FC = ({ children }) => {
  return <div className="col unitCol">{children}</div>;
};

export default App;
